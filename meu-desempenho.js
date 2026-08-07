const LOGIN_CHAVE = "stellantisUsuarioLogado";
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";

const usuarioDesempenho = document.getElementById("usuario-desempenho");
const usuarioDesempenhoNome = document.getElementById("usuario-desempenho-nome");
const desempenhoColaboradorNome = document.getElementById("desempenho-colaborador-nome");
const desempenhoColaboradorMatricula = document.getElementById("desempenho-colaborador-matricula");
const btnAtualizarDesempenho = document.getElementById("btn-atualizar-desempenho");
const desempenhoDashboard = document.getElementById("desempenho-dashboard");
const desempenhoTotalHoras = document.getElementById("desempenho-total-horas");
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

let usuarioAtual = null;
let desempenhoRegistrosPlanilha = [];
let desempenhoCarregando = false;
let desempenhoErro = "";
let requisicaoAtual = 0;
let modoDesempenho = "horas";

function obterLoginSalvo() {
    try {
        return JSON.parse(localStorage.getItem(LOGIN_CHAVE));
    } catch (erro) {
        return null;
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

function atualizarInfoPeriodoDesempenho(totalBanco, totalFiltrado) {
    const { inicio, fim } = obterPeriodoDesempenho();

    if (desempenhoCarregando) {
        desempenhoPeriodoInfo.textContent = "Carregando seus registros do banco de dados...";
        return;
    }

    if (desempenhoErro) {
        desempenhoPeriodoInfo.textContent = desempenhoErro;
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
        const acumulado = atividades.get(atividade) || { atividade, horas: 0, registros: 0, tfmsSet: new Set() };
        acumulado.horas += horas;
        acumulado.registros += 1;

        if (registro.tfm) {
            acumulado.tfmsSet.add(String(registro.tfm));
        }

        atividades.set(atividade, acumulado);

        if (data) {
            const dia = dias.get(data) || { data, horas: 0, registros: 0, tfmsSet: new Set() };
            dia.horas += horas;
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
            registros: item.registros,
            tfms: item.tfmsSet.size
        }))
        .sort((primeiro, segundo) => primeiro.data.localeCompare(segundo.data));
    const diasApontados = timeline.length;

    return {
        totalHoras,
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
    const periodo = obterPeriodoCalendario(timeline);
    const datas = criarDatasPeriodo(periodo.inicio, periodo.fim);
    const diasCalendario = datas.length
        ? datas.map((data) => registrosPorDia.get(data) || { data, horas: 0, registros: 0, tfms: 0 })
        : timeline;
    const maiorIndicador = Math.max(...diasCalendario.map((item) => obterValorIndicador(item)), 0);
    const diasComRegistro = diasCalendario.filter((item) => obterValorIndicador(item) > 0).length;

    desempenhoCalendarioTotal.textContent = `${diasCalendario.length.toLocaleString("pt-BR")} dia(s) exibido(s)`;

    if (!diasCalendario.length) {
        const vazio = document.createElement("p");
        vazio.className = "desempenho-mini-vazio";
        vazio.textContent = "Sem datas para exibir no calendário.";
        desempenhoCalendario.appendChild(vazio);
        return;
    }

    diasCalendario.forEach((item) => {
        const dia = document.createElement("div");
        const valor = obterValorIndicador(item);
        const intensidade = maiorIndicador ? valor / maiorIndicador : 0;
        const opacidade = valor > 0 ? 0.14 + (intensidade * 0.46) : 0.04;

        dia.className = `desempenho-calendario-dia${valor > 0 ? "" : " desempenho-calendario-dia-vazio"}`;
        dia.style.setProperty("--opacidade", opacidade.toFixed(2));
        dia.innerHTML = `
            <span>${obterDiaSemana(item.data)}</span>
            <strong>${formatarData(item.data).slice(0, 5)}</strong>
            <small>${valor > 0 ? formatarIndicador(valor) : "Sem registro"}</small>
        `;
        desempenhoCalendario.appendChild(dia);
    });

    if (diasComRegistro === 0) {
        desempenhoCalendarioTotal.textContent = `${diasCalendario.length.toLocaleString("pt-BR")} dia(s), sem registros`;
    }
}

function renderizarTfms(tfms) {
    desempenhoTfmsLista.innerHTML = "";
    desempenhoTfmsTotal.textContent = `${tfms.length.toLocaleString("pt-BR")} TFM(s)`;

    if (!tfms.length) {
        const vazio = document.createElement("p");
        vazio.className = "desempenho-mini-vazio";
        vazio.textContent = "Nenhum TFM encontrado no período selecionado.";
        desempenhoTfmsLista.appendChild(vazio);
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
        desempenhoTfmsLista.appendChild(card);
    });
}

function atualizarDesempenho() {
    const registrosFiltrados = filtrarRegistrosDesempenho(desempenhoRegistrosPlanilha);
    const desempenho = consolidarDesempenho(registrosFiltrados);
    const tfms = consolidarTfms(registrosFiltrados);

    atualizarInfoPeriodoDesempenho(desempenhoRegistrosPlanilha.length, registrosFiltrados.length);
    desempenhoTotalHoras.textContent = formatarHoras(desempenho.totalHoras);
    desempenhoTotalAtividades.textContent = desempenho.totalAtividades.toLocaleString("pt-BR");
    desempenhoTotalTfms.textContent = desempenho.totalTfms.toLocaleString("pt-BR");
    desempenhoDiasApontados.textContent = desempenho.diasApontados.toLocaleString("pt-BR");
    desempenhoMediaDia.textContent = formatarHoras(desempenho.mediaDia);
    desempenhoMediaAtividade.textContent = formatarHoras(desempenho.mediaAtividade);

    desempenhoRanking.innerHTML = "";
    desempenhoVazio.textContent = desempenhoCarregando
        ? "Carregando todos os seus dados do banco de dados..."
        : desempenhoErro || "Nenhum registro encontrado no banco de dados para sua matrícula.";
    desempenhoVazio.hidden = desempenho.ranking.length > 0 && !desempenhoCarregando && !desempenhoErro;
    desempenhoDashboard.hidden = false;
    desempenhoRankingSubtitulo.textContent = `Distribuição por ${obterNomeIndicador().toLowerCase()}`;
    desempenhoRankingTitulo.textContent = `Atividades por ${obterNomeIndicador().toLowerCase()}`;

    const maiorIndicador = desempenho.ranking[0] ? obterValorIndicador(desempenho.ranking[0]) : 0;
    desempenho.ranking.slice(0, 10).forEach((item) => {
        desempenhoRanking.appendChild(criarLinhaDesempenho(item, maiorIndicador));
    });

    renderizarCalendarioDesempenho(desempenho.timeline);
    renderizarTfms(tfms);
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

    desempenhoCarregando = true;
    desempenhoErro = "";
    atualizarDesempenho();

    const controleConsulta = new AbortController();
    const timeoutConsulta = setTimeout(() => controleConsulta.abort(), 8000);

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
        desempenhoErro = "";
    } catch (erro) {
        if (requisicao === requisicaoAtual) {
            desempenhoRegistrosPlanilha = [];
            desempenhoErro = erro.name === "AbortError"
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

btnAtualizarDesempenho.addEventListener("click", carregarDesempenhoColaborador);
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
    botao.addEventListener("click", () => {
        modoDesempenho = botao.dataset.modoDesempenho;
        modoDesempenhoBotoes.forEach((item) => {
            item.classList.toggle("oficina-modo-ativo", item === botao);
        });
        atualizarDesempenho();
    });
});