const LOGIN_CHAVE = "stellantisUsuarioLogado";
const DESEMPENHO_CACHE_PREFIXO = "stellantisDesempenho:";
const DESEMPENHO_CACHE_DURACAO = 24 * 60 * 60 * 1000;
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";

const usuarioDesempenho = document.getElementById("usuario-desempenho");
const usuarioDesempenhoNome = document.getElementById("usuario-desempenho-nome");
const desempenhoColaboradorNome = document.getElementById("desempenho-colaborador-nome");
const desempenhoColaboradorMatricula = document.getElementById("desempenho-colaborador-matricula");
const btnAtualizarDesempenho = document.getElementById("btn-atualizar-desempenho");
const desempenhoDashboard = document.getElementById("desempenho-dashboard");
const desempenhoTotalHoras = document.getElementById("desempenho-total-horas");
const desempenhoHorasAndamento = document.getElementById("desempenho-horas-andamento");
const desempenhoTotalAtividades = document.getElementById("desempenho-total-atividades");
const desempenhoTotalTfms = document.getElementById("desempenho-total-tfms");
const desempenhoDiasApontados = document.getElementById("desempenho-dias-apontados");
const desempenhoMediaDia = document.getElementById("desempenho-media-dia");
const desempenhoMediaAtividade = document.getElementById("desempenho-media-atividade");
const desempenhoPeriodoInicio = document.getElementById("desempenho-periodo-inicio");
const desempenhoPeriodoFim = document.getElementById("desempenho-periodo-fim");
const desempenhoPeriodoInfo = document.getElementById("desempenho-periodo-info");
const desempenhoCalendario = document.getElementById("desempenho-calendario");
const desempenhoCalendarioTotal = document.getElementById("desempenho-calendario-total");
const desempenhoRanking = document.getElementById("desempenho-ranking");
const desempenhoRankingSubtitulo = document.getElementById("desempenho-ranking-subtitulo");
const desempenhoRankingTitulo = document.getElementById("desempenho-ranking-titulo");
const desempenhoVazio = document.getElementById("desempenho-vazio");
const desempenhoTfmsTotal = document.getElementById("desempenho-tfms-total");
const desempenhoTfmsLista = document.getElementById("desempenho-tfms-lista");
const desempenhoAtalhos = document.querySelectorAll("[data-desempenho-periodo]");
const modoDesempenhoBotoes = document.querySelectorAll("[data-modo-desempenho]");
const modoDesempenhoLateralBotoes = document.querySelectorAll("[data-desempenho-modo-lateral]");
const desempenhoNavegacaoBotoes = document.querySelectorAll("[data-desempenho-view]");
const desempenhoVisoes = document.querySelectorAll("[data-desempenho-view-content]");
const desempenhoMes = document.getElementById("desempenho-mes");
const desempenhoMesAnterior = document.getElementById("desempenho-mes-anterior");
const desempenhoMesSeguinte = document.getElementById("desempenho-mes-seguinte");
const desempenhoCalendarioMensal = document.getElementById("desempenho-calendario-mensal");
const desempenhoBuscaTfm = document.getElementById("desempenho-busca-tfm");
const desempenhoViewTfmsTotal = document.getElementById("desempenho-view-tfms-total");
const desempenhoViewTfmsLista = document.getElementById("desempenho-view-tfms-lista");
const desempenhoBuscaAtividade = document.getElementById("desempenho-busca-atividade");
const desempenhoViewAtividadesTotal = document.getElementById("desempenho-view-atividades-total");
const desempenhoViewAtividadesLista = document.getElementById("desempenho-view-atividades-lista");
const desempenhoAbertosTotal = document.getElementById("desempenho-abertos-total");
const desempenhoAbertosStatus = document.getElementById("desempenho-abertos-status");
const desempenhoAbertosLista = document.getElementById("desempenho-abertos-lista");

let usuarioAtual = null;
let desempenhoRegistrosPlanilha = [];
let desempenhoCarregando = false;
let desempenhoErro = "";
let requisicaoAtual = 0;
let modoDesempenho = "horas";
let dataDesempenhoSelecionada = "";
let visaoDesempenho = "geral";

function obterLoginSalvo() {
    try {
        return JSON.parse(localStorage.getItem(LOGIN_CHAVE));
    } catch (erro) {
        return null;
    }
}

function obterCacheDesempenho(matricula) {
    try {
        const cache = JSON.parse(localStorage.getItem(`${DESEMPENHO_CACHE_PREFIXO}${matricula}`));

        if (!Array.isArray(cache?.registros) || Date.now() - Number(cache.salvoEm || 0) > DESEMPENHO_CACHE_DURACAO) {
            return null;
        }

        return cache.registros;
    } catch (erro) {
        return null;
    }
}

function salvarCacheDesempenho(matricula, registros) {
    try {
        localStorage.setItem(`${DESEMPENHO_CACHE_PREFIXO}${matricula}`, JSON.stringify({
            salvoEm: Date.now(),
            registros
        }));
    } catch (erro) {
        console.warn("Não foi possível armazenar o cache do desempenho.", erro);
    }
}

function aplicarLoginSalvo() {
    usuarioAtual = obterLoginSalvo();
    const nome = usuarioAtual?.nome || "-";
    const matricula = String(usuarioAtual?.matricula || "").trim();

    desempenhoColaboradorNome.textContent = usuarioAtual?.cadastroPendente ? `${nome} (cadastro pendente)` : nome;
    desempenhoColaboradorMatricula.textContent = matricula || "-";

    if (usuarioAtual?.nome) {
        usuarioDesempenho.hidden = false;
        usuarioDesempenhoNome.textContent = desempenhoColaboradorNome.textContent;
    }
}

function converterHorasNumero(valor) {
    const horas = Number(String(valor || "0").replace(",", "."));
    return Number.isFinite(horas) ? horas : 0;
}

function formatarHoras(valor) {
    return `${Number(valor || 0).toLocaleString("pt-BR", { maximumFractionDigits: 2 })}h`;
}

function obterValorIndicador(item) {
    return modoDesempenho === "tfms" ? item.tfms : item.horas;
}

function formatarIndicador(valor) {
    if (modoDesempenho === "tfms") {
        return `${Number(valor || 0).toLocaleString("pt-BR")} TFM(s)`;
    }

    return formatarHoras(valor);
}

function obterNomeIndicador() {
    return modoDesempenho === "tfms" ? "TFMs" : "Horas";
}

function atualizarModoDesempenho(novoModo) {
    modoDesempenho = novoModo;
    modoDesempenhoBotoes.forEach((botao) => {
        botao.classList.toggle("oficina-modo-ativo", botao.dataset.modoDesempenho === modoDesempenho);
    });
    modoDesempenhoLateralBotoes.forEach((botao) => {
        botao.classList.toggle("desempenho-modo-ativo", botao.dataset.desempenhoModoLateral === modoDesempenho);
    });
    atualizarDesempenho();
}

function normalizarDataInput(valor) {
    if (!valor) {
        return "";
    }

    if (typeof valor === "string" && /^\d{4}-\d{2}-\d{2}/.test(valor)) {
        return valor.slice(0, 10);
    }

    const data = new Date(valor);
    return Number.isNaN(data.getTime()) ? "" : data.toISOString().slice(0, 10);
}

function criarDataLocal(valor) {
    const [ano, mes, dia] = valor.split("-").map(Number);
    return new Date(ano, mes - 1, dia);
}

function formatarDataIso(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

function formatarData(valor) {
    if (!valor) {
        return "-";
    }

    return criarDataLocal(valor).toLocaleDateString("pt-BR");
}

function obterDiaSemana(valor) {
    return criarDataLocal(valor).toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
}

function normalizarBusca(valor) {
    return String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function criarDatasPeriodo(inicio, fim) {
    if (!inicio || !fim || inicio > fim) {
        return [];
    }

    const datas = [];
    const atual = criarDataLocal(inicio);
    const limite = criarDataLocal(fim);

    while (atual <= limite) {
        datas.push(formatarDataIso(atual));
        atual.setDate(atual.getDate() + 1);
    }

    return datas;
}

function obterSemanaDaData(valor) {
    const data = criarDataLocal(valor);
    const deslocamentoSegunda = (data.getDay() + 6) % 7;
    data.setDate(data.getDate() - deslocamentoSegunda);
    const inicio = formatarDataIso(data);
    data.setDate(data.getDate() + 6);

    return criarDatasPeriodo(inicio, formatarDataIso(data));
}

function obterDataAncoraCalendario(timeline) {
    return dataDesempenhoSelecionada || timeline[timeline.length - 1]?.data || formatarDataIso(new Date());
}

function obterIntensidadeCargaAlta(horas) {
    if (horas <= 9) {
        return 0;
    }

    const intensidadeBase = Math.min((horas - 9) / 15, 1);
    const intensidadeExtra = horas > 24 ? Math.min((horas - 24) / 24, 1) : 0;
    return 0.12 + intensidadeBase * 0.24 + intensidadeExtra * 0.22;
}

function alterarVisaoDesempenho(visao) {
    visaoDesempenho = visao;
    desempenhoNavegacaoBotoes.forEach((botao) => {
        const ativo = botao.dataset.desempenhoView === visao;
        botao.classList.toggle("desempenho-nav-ativo", ativo);
        botao.setAttribute("aria-current", ativo ? "page" : "false");
    });
    desempenhoVisoes.forEach((conteudo) => {
        conteudo.hidden = conteudo.dataset.desempenhoViewContent !== visao;
    });

    if (visao === "calendario") {
        renderizarCalendarioMensal();
    } else if (visao === "tfms" || visao === "atividades") {
        renderizarVisoesDetalhadas();
    }
}

function obterMatriculaDesempenho() {
    return String(usuarioAtual?.matricula || "").trim();
}

function obterDataRegistroDesempenho(registro) {
    return normalizarDataInput(registro.data);
}

function obterPeriodoDesempenho() {
    return {
        inicio: desempenhoPeriodoInicio.value,
        fim: desempenhoPeriodoFim.value
    };
}

function filtrarRegistrosDesempenho(registros) {
    const { inicio, fim } = obterPeriodoDesempenho();

    return registros.filter((registro) => {
        const data = obterDataRegistroDesempenho(registro);

        if ((inicio || fim) && !data) {
            return false;
        }

        if (inicio && data < inicio) {
            return false;
        }

        if (fim && data > fim) {
            return false;
        }

        return true;
    });
}

function obterDatasExtremasDesempenho(registros) {
    const datas = registros.map(obterDataRegistroDesempenho).filter(Boolean).sort();

    return {
        inicio: datas[0] || "",
        fim: datas[datas.length - 1] || ""
    };
}

function criarTexto(tag, classe, texto) {
    const elemento = document.createElement(tag);

    if (classe) {
        elemento.className = classe;
    }

    elemento.textContent = texto;
    return elemento;
}

function obterPeriodoCalendario(timeline) {
    const { inicio, fim } = obterPeriodoDesempenho();
    const extremos = obterDatasExtremasDesempenho(timeline);

    return {
        inicio: inicio || extremos.inicio,
        fim: fim || extremos.fim
    };
}

function atualizarInfoPeriodoDesempenho(totalBanco, totalFiltrado, totalExibido) {
    const { inicio, fim } = obterPeriodoDesempenho();

    if (desempenhoCarregando) {
        desempenhoPeriodoInfo.textContent = totalBanco
            ? "Exibindo os últimos dados disponíveis enquanto buscamos atualizações..."
            : "Carregando seus registros do banco de dados...";
        return;
    }

    if (desempenhoErro) {
        desempenhoPeriodoInfo.textContent = desempenhoErro;
        return;
    }

    if (dataDesempenhoSelecionada) {
        desempenhoPeriodoInfo.textContent = `${totalExibido} registro(s) em ${formatarData(dataDesempenhoSelecionada)}. Clique novamente no dia selecionado para exibir todo o período.`;
        return;
    }

    if (inicio || fim) {
        const inicioTexto = inicio ? formatarData(inicio) : "início";
        const fimTexto = fim ? formatarData(fim) : "hoje";
        desempenhoPeriodoInfo.textContent = `${totalFiltrado} de ${totalBanco} registro(s) no período de ${inicioTexto} a ${fimTexto}.`;
        return;
    }

    desempenhoPeriodoInfo.textContent = `${totalBanco} registro(s) carregado(s) do banco de dados.`;
}

function consolidarDesempenho(registros) {
    const atividades = new Map();
    const dias = new Map();
    const tfms = new Set();
    let totalHoras = 0;
    let totalHorasAndamento = 0;

    registros.forEach((registro) => {
        const atividade = String(registro.atividade || "Atividade sem nome").trim() || "Atividade sem nome";
        const horas = converterHorasNumero(registro.horas);
        const data = obterDataRegistroDesempenho(registro);

        if (registro.tfm) {
            tfms.add(String(registro.tfm));
        }

        if (horas <= 0) {
            return;
        }

        totalHoras += horas;
        if (registro.emAndamento) {
            totalHorasAndamento += horas;
        }
        const acumulado = atividades.get(atividade) || { atividade, horas: 0, registros: 0, tfmsSet: new Set() };
        acumulado.horas += horas;
        acumulado.registros += 1;

        if (registro.tfm) {
            acumulado.tfmsSet.add(String(registro.tfm));
        }

        atividades.set(atividade, acumulado);

        if (data) {
            const dia = dias.get(data) || { data, horas: 0, horasAndamento: 0, registros: 0, tfmsSet: new Set() };
            dia.horas += horas;
            if (registro.emAndamento) {
                dia.horasAndamento += horas;
            }
            dia.registros += 1;

            if (registro.tfm) {
                dia.tfmsSet.add(String(registro.tfm));
            }

            dias.set(data, dia);
        }
    });

    const ranking = [...atividades.values()]
        .map((item) => ({
            atividade: item.atividade,
            horas: item.horas,
            registros: item.registros,
            tfms: item.tfmsSet.size
        }))
        .sort((primeira, segunda) => obterValorIndicador(segunda) - obterValorIndicador(primeira) || segunda.horas - primeira.horas || segunda.registros - primeira.registros);
    const timeline = [...dias.values()]
        .map((item) => ({
            data: item.data,
            horas: item.horas,
            horasAndamento: item.horasAndamento,
            registros: item.registros,
            tfms: item.tfmsSet.size
        }))
        .sort((primeiro, segundo) => primeiro.data.localeCompare(segundo.data));
    const diasApontados = timeline.length;

    return {
        totalHoras,
        totalHorasAndamento,
        totalAtividades: registros.length,
        totalTfms: tfms.size,
        diasApontados,
        mediaDia: diasApontados ? totalHoras / diasApontados : 0,
        mediaAtividade: registros.length ? totalHoras / registros.length : 0,
        ranking,
        timeline
    };
}

function consolidarTfms(registros) {
    const tfms = new Map();

    registros.forEach((registro) => {
        const numeroTfm = String(registro.tfm || "").trim() || "Sem TFM informado";
        const horas = converterHorasNumero(registro.horas);
        const atividade = String(registro.atividade || "Atividade sem nome").trim() || "Atividade sem nome";
        const data = obterDataRegistroDesempenho(registro);
        const acumulado = tfms.get(numeroTfm) || {
            tfm: numeroTfm,
            horas: 0,
            registros: 0,
            atividades: new Map(),
            datas: []
        };

        acumulado.horas += horas;
        acumulado.registros += 1;

        if (data) {
            acumulado.datas.push(data);
        }

        const atividadeAtual = acumulado.atividades.get(atividade) || { nome: atividade, horas: 0, registros: 0 };
        atividadeAtual.horas += horas;
        atividadeAtual.registros += 1;
        acumulado.atividades.set(atividade, atividadeAtual);
        tfms.set(numeroTfm, acumulado);
    });

    return [...tfms.values()].map((item) => {
        const datas = item.datas.sort();

        return {
            tfm: item.tfm,
            horas: item.horas,
            registros: item.registros,
            inicio: datas[0] || "",
            fim: datas[datas.length - 1] || "",
            atividades: [...item.atividades.values()].sort((primeira, segunda) => segunda.horas - primeira.horas || primeira.nome.localeCompare(segunda.nome))
        };
    }).sort((primeiro, segundo) => {
        const dataPrimeiro = primeiro.fim || primeiro.inicio || "";
        const dataSegundo = segundo.fim || segundo.inicio || "";
        return dataSegundo.localeCompare(dataPrimeiro) || segundo.horas - primeiro.horas || primeiro.tfm.localeCompare(segundo.tfm);
    });
}

function criarLinhaDesempenho(item, maiorIndicador) {
    const linha = document.createElement("div");
    const valor = obterValorIndicador(item);
    const largura = maiorIndicador ? Math.max(8, (valor / maiorIndicador) * 100) : 0;

    linha.className = "desempenho-barra-item";
    linha.innerHTML = `
        <div class="desempenho-barra-topo">
            <span>${item.atividade}</span>
            <strong>${formatarIndicador(valor)}</strong>
        </div>
        <div class="desempenho-barra-trilho"><span class="desempenho-barra-preenchimento" style="--largura:${largura}%"></span></div>
        <small>${formatarHoras(item.horas)} em ${item.registros} registro(s) e ${item.tfms} TFM(s)</small>
    `;

    return linha;
}

function renderizarCalendarioDesempenho(timeline) {
    desempenhoCalendario.innerHTML = "";
    const registrosPorDia = new Map(timeline.map((item) => [item.data, item]));
    const datas = obterSemanaDaData(obterDataAncoraCalendario(timeline));
    const diasCalendario = datas.map((data) => registrosPorDia.get(data) || { data, horas: 0, horasAndamento: 0, registros: 0, tfms: 0 });
    const maiorIndicador = Math.max(...diasCalendario.map((item) => obterValorIndicador(item)), 0);
    const diasComRegistro = diasCalendario.filter((item) => obterValorIndicador(item) > 0).length;

    desempenhoCalendarioTotal.textContent = `${formatarData(datas[0])} a ${formatarData(datas[6])}`;

    diasCalendario.forEach((item) => {
        const dia = document.createElement("button");
        const valor = obterValorIndicador(item);
        const classeCarga = item.horas > 0
            ? item.horas > 9
                ? " desempenho-calendario-dia-acima"
                : " desempenho-calendario-dia-adequado"
            : "";
        const intensidade = maiorIndicador ? valor / maiorIndicador : 0;
        const opacidade = valor > 0 ? 0.14 + (intensidade * 0.46) : 0.04;
        const selecionado = item.data === dataDesempenhoSelecionada;

        dia.type = "button";
        dia.className = `desempenho-calendario-dia${valor > 0 ? "" : " desempenho-calendario-dia-vazio"}${classeCarga}${item.horasAndamento > 0 ? " desempenho-calendario-dia-andamento" : ""}${selecionado ? " desempenho-calendario-dia-ativo" : ""}`;
        dia.style.setProperty("--opacidade", opacidade.toFixed(2));
        dia.style.setProperty("--intensidade-alerta", obterIntensidadeCargaAlta(item.horas).toFixed(2));
        dia.setAttribute("aria-pressed", String(selecionado));
        dia.title = selecionado ? "Remover filtro desta data" : `Filtrar indicadores por ${formatarData(item.data)}`;
        dia.innerHTML = `
            <span>${obterDiaSemana(item.data)}</span>
            <strong>${formatarData(item.data).slice(0, 5)}</strong>
            <small>${valor > 0 ? formatarIndicador(valor) : "Sem registro"}</small>
            ${item.horasAndamento > 0 ? `<em>Em andamento: ${formatarHoras(item.horasAndamento)}</em>` : ""}
        `;
        dia.addEventListener("click", () => {
            dataDesempenhoSelecionada = selecionado ? "" : item.data;
            atualizarDesempenho();
        });
        desempenhoCalendario.appendChild(dia);
    });

    if (diasComRegistro === 0) {
        desempenhoCalendarioTotal.textContent = `${formatarData(datas[0])} a ${formatarData(datas[6])} · sem registros`;
    }
}

function alterarMesCalendario(deslocamento) {
    const referencia = desempenhoMes.value ? criarDataLocal(`${desempenhoMes.value}-01`) : new Date();
    referencia.setMonth(referencia.getMonth() + deslocamento);
    desempenhoMes.value = formatarDataIso(referencia).slice(0, 7);
    renderizarCalendarioMensal();
}

function renderizarCalendarioMensal() {
    const timeline = consolidarDesempenho(filtrarRegistrosDesempenho(desempenhoRegistrosPlanilha)).timeline;
    const registrosPorDia = new Map(timeline.map((item) => [item.data, item]));
    const mesSelecionado = desempenhoMes.value || obterDataAncoraCalendario(timeline).slice(0, 7);
    const [ano, mes] = mesSelecionado.split("-").map(Number);
    const primeiroDia = new Date(ano, mes - 1, 1);
    const ultimoDia = new Date(ano, mes, 0);
    const espacosInicio = (primeiroDia.getDay() + 6) % 7;
    const maiorIndicador = Math.max(...timeline
        .filter((item) => item.data.startsWith(mesSelecionado))
        .map((item) => obterValorIndicador(item)), 0);

    desempenhoMes.value = mesSelecionado;
    desempenhoCalendarioMensal.innerHTML = "";

    for (let indice = 0; indice < espacosInicio; indice += 1) {
        const espaco = document.createElement("span");
        espaco.className = "desempenho-mensal-espaco";
        desempenhoCalendarioMensal.appendChild(espaco);
    }

    for (let diaNumero = 1; diaNumero <= ultimoDia.getDate(); diaNumero += 1) {
        const data = formatarDataIso(new Date(ano, mes - 1, diaNumero));
        const item = registrosPorDia.get(data) || { data, horas: 0, horasAndamento: 0, registros: 0, tfms: 0 };
        const valor = obterValorIndicador(item);
        const classeCarga = item.horas > 0
            ? item.horas > 9
                ? " desempenho-mensal-dia-acima"
                : " desempenho-mensal-dia-adequado"
            : "";
        const intensidade = maiorIndicador ? valor / maiorIndicador : 0;
        const dia = document.createElement("button");

        dia.type = "button";
        dia.className = `desempenho-mensal-dia${valor > 0 ? " desempenho-mensal-dia-registro" : ""}${classeCarga}${item.horasAndamento > 0 ? " desempenho-mensal-dia-andamento" : ""}`;
        dia.style.setProperty("--intensidade", (0.08 + intensidade * 0.42).toFixed(2));
        dia.style.setProperty("--intensidade-alerta", obterIntensidadeCargaAlta(item.horas).toFixed(2));
        dia.innerHTML = `<strong>${diaNumero}</strong><span>${valor > 0 ? formatarIndicador(valor) : "Sem registro"}</span><small>${item.horasAndamento > 0 ? `Em andamento: ${formatarHoras(item.horasAndamento)}` : `${item.registros} atividade(s)`}</small>`;
        dia.title = `Abrir ${formatarData(data)} na visão geral`;
        dia.addEventListener("click", () => {
            dataDesempenhoSelecionada = data;
            alterarVisaoDesempenho("geral");
            atualizarDesempenho();
            document.querySelector(".desempenho-resumo").scrollIntoView({ behavior: "smooth", block: "start" });
        });
        desempenhoCalendarioMensal.appendChild(dia);
    }
}

function renderizarTfms(tfms, lista = desempenhoTfmsLista, total = desempenhoTfmsTotal) {
    lista.innerHTML = "";
    total.textContent = `${tfms.length.toLocaleString("pt-BR")} TFM(s)`;

    if (!tfms.length) {
        const vazio = document.createElement("p");
        vazio.className = "desempenho-mini-vazio";
        vazio.textContent = "Nenhum TFM encontrado no período selecionado.";
        lista.appendChild(vazio);
        return;
    }

    tfms.forEach((item) => {
        const card = document.createElement("article");
        const cabecalho = document.createElement("div");
        const titulo = document.createElement("div");
        const metricas = document.createElement("div");
        const atividades = document.createElement("div");
        const periodo = item.inicio && item.fim
            ? item.inicio === item.fim
                ? formatarData(item.inicio)
                : `${formatarData(item.inicio)} a ${formatarData(item.fim)}`
            : "Sem data";

        card.className = "desempenho-tfm-item";
        cabecalho.className = "desempenho-tfm-cabecalho";
        titulo.className = "desempenho-tfm-titulo";
        metricas.className = "desempenho-tfm-metricas";
        atividades.className = "desempenho-tfm-atividades";

        titulo.appendChild(criarTexto("span", "", "TFM"));
        titulo.appendChild(criarTexto("strong", "", item.tfm));
        titulo.appendChild(criarTexto("small", "", periodo));

        metricas.appendChild(criarTexto("span", "", formatarHoras(item.horas)));
        metricas.appendChild(criarTexto("span", "", `${item.registros} atividade(s)`));
        cabecalho.append(titulo, metricas);

        item.atividades.slice(0, 4).forEach((atividade) => {
            const linha = document.createElement("div");
            linha.appendChild(criarTexto("span", "", atividade.nome));
            linha.appendChild(criarTexto("strong", "", formatarHoras(atividade.horas)));
            atividades.appendChild(linha);
        });

        if (item.atividades.length > 4) {
            atividades.appendChild(criarTexto("small", "desempenho-tfm-mais", `+${item.atividades.length - 4} atividade(s)`));
        }

        card.append(cabecalho, atividades);
        lista.appendChild(card);
    });
}

function renderizarVisoesDetalhadas() {
    const registrosPeriodo = filtrarRegistrosDesempenho(desempenhoRegistrosPlanilha);
    const termoTfm = normalizarBusca(desempenhoBuscaTfm.value);
    const atividadeSelecionada = desempenhoBuscaAtividade.value;
    const tfms = consolidarTfms(registrosPeriodo).filter((item) => {
        const conteudo = [item.tfm, ...item.atividades.map((atividade) => atividade.nome)].join(" ");
        return normalizarBusca(conteudo).includes(termoTfm);
    });
    const todasAtividades = consolidarDesempenho(registrosPeriodo).ranking;
    const atividades = atividadeSelecionada
        ? todasAtividades.filter((item) => item.atividade === atividadeSelecionada)
        : todasAtividades;

    const opcoesAtuais = [...desempenhoBuscaAtividade.options].slice(1).map((opcao) => opcao.value);
    const novasOpcoes = todasAtividades.map((item) => item.atividade).sort((primeira, segunda) => primeira.localeCompare(segunda, "pt-BR"));

    if (opcoesAtuais.join("\u0000") !== novasOpcoes.join("\u0000")) {
        desempenhoBuscaAtividade.replaceChildren(new Option("Todas as atividades", ""));
        novasOpcoes.forEach((atividade) => {
            desempenhoBuscaAtividade.add(new Option(atividade, atividade));
        });
        desempenhoBuscaAtividade.value = novasOpcoes.includes(atividadeSelecionada) ? atividadeSelecionada : "";
    }

    renderizarTfms(tfms, desempenhoViewTfmsLista, desempenhoViewTfmsTotal);
    desempenhoViewTfmsTotal.textContent = tfms.length.toLocaleString("pt-BR");
    desempenhoViewAtividadesTotal.textContent = atividades.length.toLocaleString("pt-BR");
    desempenhoViewAtividadesLista.innerHTML = "";

    if (!atividades.length) {
        desempenhoViewAtividadesLista.appendChild(criarTexto("p", "desempenho-mini-vazio", "Nenhuma atividade encontrada no período selecionado."));
        return;
    }

    const larguraDisponivel = desempenhoViewAtividadesLista.clientWidth || document.documentElement.clientWidth;
    const larguraMinimaColuna = larguraDisponivel < 600 ? 72 : 104;
    const limiteVisivel = Math.max(3, Math.floor(larguraDisponivel / larguraMinimaColuna));
    const atividadesVisiveis = atividades.slice(0, limiteVisivel);
    const maiorHoras = Math.max(...atividadesVisiveis.map((item) => item.horas), 0);

    desempenhoViewAtividadesLista.style.setProperty("--total-colunas", atividadesVisiveis.length);
    atividadesVisiveis.forEach((item) => {
        const coluna = document.createElement("article");
        const valor = criarTexto("strong", "desempenho-coluna-valor", formatarHoras(item.horas));
        const barraArea = document.createElement("div");
        const barra = document.createElement("span");
        const nome = criarTexto("span", "desempenho-coluna-nome", item.atividade);
        const proporcao = maiorHoras ? Math.max(0.08, item.horas / maiorHoras) : 0;

        coluna.className = "desempenho-coluna-item";
        barraArea.className = "desempenho-coluna-area";
        barra.className = "desempenho-coluna-barra";
        barra.style.setProperty("--altura-coluna", `${(proporcao * 100).toFixed(2)}%`);
        barraArea.appendChild(barra);
        coluna.title = `${item.atividade}: ${formatarHoras(item.horas)}, ${item.registros} registro(s), ${item.tfms} TFM(s)`;
        coluna.append(valor, barraArea, nome);
        desempenhoViewAtividadesLista.appendChild(coluna);
    });
}

function atualizarDesempenho() {
    const registrosPeriodo = filtrarRegistrosDesempenho(desempenhoRegistrosPlanilha);

    const registrosExibidos = dataDesempenhoSelecionada
        ? registrosPeriodo.filter((registro) => obterDataRegistroDesempenho(registro) === dataDesempenhoSelecionada)
        : registrosPeriodo;
    const desempenhoPeriodo = consolidarDesempenho(registrosPeriodo);
    const desempenho = consolidarDesempenho(registrosExibidos);
    const tfms = consolidarTfms(registrosExibidos);

    atualizarInfoPeriodoDesempenho(desempenhoRegistrosPlanilha.length, registrosPeriodo.length, registrosExibidos.length);
    desempenhoTotalHoras.textContent = formatarHoras(desempenho.totalHoras);
    desempenhoHorasAndamento.textContent = formatarHoras(desempenho.totalHorasAndamento);
    desempenhoTotalAtividades.textContent = desempenho.totalAtividades.toLocaleString("pt-BR");
    desempenhoTotalTfms.textContent = desempenho.totalTfms.toLocaleString("pt-BR");
    desempenhoDiasApontados.textContent = desempenho.diasApontados.toLocaleString("pt-BR");
    desempenhoMediaDia.textContent = formatarHoras(desempenho.mediaDia);
    desempenhoMediaAtividade.textContent = formatarHoras(desempenho.mediaAtividade);

    desempenhoRanking.innerHTML = "";
    desempenhoVazio.textContent = desempenhoCarregando
        ? "Carregando todos os seus dados do banco de dados..."
        : desempenhoErro || "Nenhum registro encontrado no banco de dados para sua matrícula.";
    desempenhoVazio.hidden = desempenho.ranking.length > 0;
    desempenhoDashboard.hidden = visaoDesempenho !== "geral";
    desempenhoRankingSubtitulo.textContent = `Distribuição por ${obterNomeIndicador().toLowerCase()}`;
    desempenhoRankingTitulo.textContent = `Atividades por ${obterNomeIndicador().toLowerCase()}`;

    const maiorIndicador = desempenho.ranking[0] ? obterValorIndicador(desempenho.ranking[0]) : 0;
    desempenho.ranking.slice(0, 10).forEach((item) => {
        desempenhoRanking.appendChild(criarLinhaDesempenho(item, maiorIndicador));
    });

    renderizarCalendarioDesempenho(desempenhoPeriodo.timeline);
    renderizarTfms(tfms);
    renderizarVisoesDetalhadas();

    if (visaoDesempenho === "calendario") {
        renderizarCalendarioMensal();
    }
}

async function carregarDesempenhoColaborador() {
    const matricula = obterMatriculaDesempenho();
    const requisicao = requisicaoAtual + 1;
    requisicaoAtual = requisicao;

    if (!matricula) {
        desempenhoRegistrosPlanilha = [];
        desempenhoCarregando = false;
        desempenhoErro = "Entre pela tela inicial para carregar seu desempenho do banco de dados.";
        atualizarDesempenho();
        return;
    }

    const registrosCache = obterCacheDesempenho(matricula);

    if (registrosCache) {
        desempenhoRegistrosPlanilha = registrosCache;
    }

    desempenhoCarregando = true;
    desempenhoErro = "";
    atualizarDesempenho();

    const controleConsulta = new AbortController();
    const timeoutConsulta = setTimeout(() => controleConsulta.abort(), 25000);

    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=desempenhoColaborador&matricula=${encodeURIComponent(matricula)}`, {
            signal: controleConsulta.signal
        });

        if (!resposta.ok) {
            throw new Error("Erro ao consultar desempenho do colaborador.");
        }

        const dados = await resposta.json();

        if (!dados.sucesso || !Array.isArray(dados.registros)) {
            throw new Error(dados.erro || "Erro ao carregar desempenho do colaborador.");
        }

        if (requisicao !== requisicaoAtual) {
            return;
        }

        desempenhoRegistrosPlanilha = dados.registros.filter((item) => String(item.matricula || "").trim() === matricula);
        salvarCacheDesempenho(matricula, desempenhoRegistrosPlanilha);
        desempenhoErro = "";
    } catch (erro) {
        if (requisicao === requisicaoAtual) {
            if (!registrosCache) {
                desempenhoRegistrosPlanilha = [];
            }

            desempenhoErro = registrosCache
                ? "Não foi possível atualizar agora. Os últimos dados disponíveis foram mantidos."
                : erro.name === "AbortError"
                    ? "A consulta ao banco demorou mais que o esperado. Tente atualizar novamente."
                    : "Não foi possível carregar o desempenho do banco de dados. Publique a versão atualizada do Apps Script e tente novamente.";
            console.error(erro);
        }
    } finally {
        if (requisicao === requisicaoAtual) {
            desempenhoCarregando = false;
            atualizarDesempenho();
        }

        clearTimeout(timeoutConsulta);
    }
}

function renderizarTfmsAbertosDesempenho(tfms) {
    const matricula = obterMatriculaDesempenho();
    const relacionados = tfms.filter((item) => String(item.matriculaHost) === matricula || Number(item.minhasHoras || 0) > 0);
    desempenhoAbertosLista.innerHTML = "";
    desempenhoAbertosTotal.textContent = `${relacionados.length} aberto(s)`;
    desempenhoAbertosStatus.hidden = relacionados.length > 0;
    desempenhoAbertosStatus.textContent = "Nenhum TFM em andamento relacionado à sua matrícula.";

    relacionados.forEach((item) => {
        const card = document.createElement("article");
        card.className = "desempenho-aberto-item";
        card.innerHTML = `
            <div>
                <span><i class="bi bi-hourglass-split"></i> Em andamento</span>
                <strong>TFM ${item.tfm}</strong>
                <small>Início: ${formatarData(item.dataInicial)} · Host: ${item.nomeHost || "-"}</small>
            </div>
            <div><span>Minhas horas</span><strong>${formatarHoras(item.minhasHoras)}</strong></div>
            <div><span>Total acumulado</span><strong>${formatarHoras(item.horasTotal)}</strong></div>
        `;
        desempenhoAbertosLista.appendChild(card);
    });
}

async function carregarTfmsAbertosDesempenho() {
    const matricula = obterMatriculaDesempenho();
    if (!matricula) return;

    desempenhoAbertosStatus.hidden = false;
    desempenhoAbertosStatus.textContent = "Carregando TFMs em andamento...";

    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=listarTfmsAbertos&matricula=${encodeURIComponent(matricula)}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso) throw new Error(dados.erro || "Erro ao consultar TFMs em andamento.");
        renderizarTfmsAbertosDesempenho(Array.isArray(dados.tfms) ? dados.tfms : []);
    } catch (erro) {
        desempenhoAbertosStatus.hidden = false;
        desempenhoAbertosStatus.textContent = erro.message;
    }
}

function aplicarAtalhoPeriodoDesempenho(periodo) {
    desempenhoAtalhos.forEach((botao) => {
        botao.classList.toggle("desempenho-atalho-ativo", botao.dataset.desempenhoPeriodo === periodo);
    });

    if (periodo === "todos") {
        desempenhoPeriodoInicio.value = "";
        desempenhoPeriodoFim.value = "";
        atualizarDesempenho();
        return;
    }

    const dias = Number(periodo);
    const extremos = obterDatasExtremasDesempenho(desempenhoRegistrosPlanilha);
    const dataFim = extremos.fim || new Date().toISOString().slice(0, 10);
    const dataInicio = criarDataLocal(dataFim);
    dataInicio.setDate(dataInicio.getDate() - Math.max(dias - 1, 0));

    desempenhoPeriodoInicio.value = dataInicio.toISOString().slice(0, 10);
    desempenhoPeriodoFim.value = dataFim;
    atualizarDesempenho();
}

aplicarLoginSalvo();
carregarDesempenhoColaborador();
carregarTfmsAbertosDesempenho();

btnAtualizarDesempenho.addEventListener("click", () => {
    carregarDesempenhoColaborador();
    carregarTfmsAbertosDesempenho();
});
[desempenhoPeriodoInicio, desempenhoPeriodoFim].forEach((input) => {
    input.addEventListener("input", () => {
        desempenhoAtalhos.forEach((botao) => botao.classList.remove("desempenho-atalho-ativo"));
        atualizarDesempenho();
    });
    input.addEventListener("change", () => {
        desempenhoAtalhos.forEach((botao) => botao.classList.remove("desempenho-atalho-ativo"));
        atualizarDesempenho();
    });
});

desempenhoAtalhos.forEach((botao) => {
    botao.addEventListener("click", () => aplicarAtalhoPeriodoDesempenho(botao.dataset.desempenhoPeriodo));
});

modoDesempenhoBotoes.forEach((botao) => {
    botao.addEventListener("click", () => atualizarModoDesempenho(botao.dataset.modoDesempenho));
});

modoDesempenhoLateralBotoes.forEach((botao) => {
    botao.addEventListener("click", () => atualizarModoDesempenho(botao.dataset.desempenhoModoLateral));
});

desempenhoNavegacaoBotoes.forEach((botao) => {
    botao.addEventListener("click", () => alterarVisaoDesempenho(botao.dataset.desempenhoView));
});

desempenhoMes.addEventListener("change", renderizarCalendarioMensal);
desempenhoMesAnterior.addEventListener("click", () => alterarMesCalendario(-1));
desempenhoMesSeguinte.addEventListener("click", () => alterarMesCalendario(1));
desempenhoBuscaTfm.addEventListener("input", renderizarVisoesDetalhadas);
desempenhoBuscaAtividade.addEventListener("input", renderizarVisoesDetalhadas);
window.addEventListener("resize", () => {
    if (visaoDesempenho === "atividades") {
        renderizarVisoesDetalhadas();
    }
});