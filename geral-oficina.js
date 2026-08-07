const LOGIN_CHAVE = "stellantisUsuarioLogado";
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";

const usuarioGeral = document.getElementById("usuario-geral");
const usuarioGeralNome = document.getElementById("usuario-geral-nome");
const btnAtualizarGeral = document.getElementById("btn-atualizar-geral");
const oficinaStatus = document.getElementById("oficina-status");
const oficinaDashboard = document.getElementById("oficina-dashboard");
const resumoTotalHoras = document.getElementById("resumo-total-horas");
const resumoTotalTfms = document.getElementById("resumo-total-tfms");
const resumoTotalAtividades = document.getElementById("resumo-total-atividades");
const resumoMaiorAtividade = document.getElementById("resumo-maior-atividade");
const graficoPizza = document.getElementById("grafico-pizza");
const pizzaTotal = document.getElementById("pizza-total");
const pizzaLegenda = document.getElementById("pizza-legenda");
const graficoColunas = document.getElementById("grafico-colunas");
const colunasSubtitulo = document.getElementById("colunas-subtitulo");
const modoGraficoBotoes = document.querySelectorAll("[data-modo-grafico]");
const periodoInicio = document.getElementById("periodo-inicio");
const periodoFim = document.getElementById("periodo-fim");
const btnPeriodoTudo = document.getElementById("btn-periodo-tudo");
const periodoInfo = document.getElementById("periodo-info");
const calendarioPlanilha = document.getElementById("calendario-planilha");

let atividadesGerais = [];
let registrosGerais = [];
let periodoCompleto = { inicio: "", fim: "" };
let modoGrafico = "horas";
let resizeTimer;

function formatarHoras(valor) {
    return `${Number(valor || 0).toLocaleString("pt-BR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    })}h`;
}

function obterLoginSalvo() {
    try {
        return JSON.parse(localStorage.getItem(LOGIN_CHAVE));
    } catch (erro) {
        return null;
    }
}

function aplicarLoginSalvo() {
    const loginSalvo = obterLoginSalvo();

    if (!loginSalvo?.nome) {
        return;
    }

    usuarioGeral.hidden = false;
    usuarioGeralNome.textContent = loginSalvo.cadastroPendente ? `${loginSalvo.nome} (cadastro pendente)` : loginSalvo.nome;
}

function obterCorGrafico(index) {
    return `var(--grafico-cor-${(index % 10) + 1})`;
}

function obterLimiteColunas() {
    const larguraGrafico = graficoColunas.clientWidth || window.innerWidth;
    const colunasQueCabem = Math.floor(larguraGrafico / 110);

    return Math.min(10, Math.max(3, colunasQueCabem));
}

function normalizarDataInput(valor) {
    if (!valor) {
        return "";
    }

    if (typeof valor === "string" && /^\d{4}-\d{2}-\d{2}/.test(valor)) {
        return valor.slice(0, 10);
    }

    const data = new Date(valor);

    if (Number.isNaN(data.getTime())) {
        return "";
    }

    return data.toISOString().slice(0, 10);
}

function criarDataLocal(valor) {
    const [ano, mes, dia] = valor.split("-").map(Number);
    return new Date(ano, mes - 1, dia);
}

function formatarData(valor) {
    if (!valor) {
        return "-";
    }

    const data = criarDataLocal(valor);
    return data.toLocaleDateString("pt-BR");
}

function criarDatasPeriodo(inicio, fim) {
    if (!inicio || !fim) {
        return [];
    }

    const datas = [];
    const atual = criarDataLocal(inicio);
    const dataFim = criarDataLocal(fim);

    while (atual <= dataFim) {
        datas.push(atual.toISOString().slice(0, 10));
        atual.setDate(atual.getDate() + 1);
    }

    return datas;
}

function obterValorIndicador(item) {
    return modoGrafico === "tfms" ? item.tfms : item.horas;
}

function formatarIndicador(valor) {
    if (modoGrafico === "tfms") {
        return `${Number(valor || 0).toLocaleString("pt-BR")} TFM(s)`;
    }

    return formatarHoras(valor);
}

function obterNomeIndicador() {
    return modoGrafico === "tfms" ? "TFM" : "Horas";
}

function ordenarAtividadesPorModo(atividades) {
    return [...atividades].sort((primeira, segunda) => {
        const diferenca = obterValorIndicador(segunda) - obterValorIndicador(primeira);
        return diferenca || segunda.horas - primeira.horas || segunda.tfms - primeira.tfms;
    });
}

function normalizarAtividades(atividades) {
    return atividades
        .map((item) => ({
            atividade: item.atividade || "Atividade sem nome",
            horas: Number(item.horas || 0),
            tfms: Number(item.tfms || 0)
        }))
        .filter((item) => item.horas > 0 || item.tfms > 0)
        .sort((primeira, segunda) => segunda.horas - primeira.horas);
}

function normalizarRegistros(registros) {
    return registros
        .map((item) => ({
            data: normalizarDataInput(item.data),
            atividade: item.atividade || "Atividade sem nome",
            horas: Number(item.horas || 0),
            tfm: String(item.tfm || "").trim()
        }))
        .filter((item) => item.data && (item.horas > 0 || item.tfm));
}

function obterPeriodoCompletoRegistros(registros) {
    const datas = registros.map((item) => item.data).filter(Boolean).sort();

    return {
        inicio: datas[0] || "",
        fim: datas[datas.length - 1] || ""
    };
}

function obterRegistrosFiltrados() {
    const inicio = periodoInicio.value;
    const fim = periodoFim.value;

    return registrosGerais.filter((registro) => {
        if (inicio && registro.data < inicio) {
            return false;
        }

        if (fim && registro.data > fim) {
            return false;
        }

        return true;
    });
}

function consolidarAtividadesRegistros(registros) {
    const atividades = new Map();

    registros.forEach((registro) => {
        const atividade = registro.atividade || "Atividade sem nome";
        const acumulado = atividades.get(atividade) || {
            atividade,
            horas: 0,
            tfmsSet: new Set()
        };

        acumulado.horas += registro.horas;

        if (registro.tfm) {
            acumulado.tfmsSet.add(registro.tfm);
        }

        atividades.set(atividade, acumulado);
    });

    return [...atividades.values()]
        .map((item) => ({
            atividade: item.atividade,
            horas: Number(item.horas.toFixed(2)),
            tfms: item.tfmsSet.size
        }))
        .filter((item) => item.horas > 0 || item.tfms > 0);
}

function atualizarResumo(atividades) {
    const totalHoras = atividades.reduce((total, item) => total + item.horas, 0);
    const totalTfms = atividades.reduce((total, item) => total + item.tfms, 0);
    const atividadesOrdenadas = ordenarAtividadesPorModo(atividades);

    resumoTotalHoras.textContent = formatarHoras(totalHoras);
    resumoTotalTfms.textContent = totalTfms.toLocaleString("pt-BR");
    resumoTotalAtividades.textContent = atividades.length.toLocaleString("pt-BR");
    resumoMaiorAtividade.textContent = atividadesOrdenadas[0]?.atividade || "-";
    pizzaTotal.textContent = formatarIndicador(modoGrafico === "tfms" ? totalTfms : totalHoras);

    return modoGrafico === "tfms" ? totalTfms : totalHoras;
}

function renderizarPizza(atividades, totalIndicador) {
    let cursorPercentual = 0;
    const fatias = atividades.map((item, index) => {
        const valorIndicador = obterValorIndicador(item);
        const percentual = totalIndicador ? (valorIndicador / totalIndicador) * 100 : 0;
        const inicio = cursorPercentual;
        const fim = cursorPercentual + percentual;
        cursorPercentual = fim;

        return `${obterCorGrafico(index)} ${inicio}% ${fim}%`;
    });

    graficoPizza.style.background = fatias.length ? `conic-gradient(${fatias.join(", ")})` : "#edf4ff";
    pizzaLegenda.innerHTML = "";

    atividades.forEach((item, index) => {
        const valorIndicador = obterValorIndicador(item);
        const percentual = totalIndicador ? (valorIndicador / totalIndicador) * 100 : 0;
        const legendaItem = document.createElement("article");
        const marcador = document.createElement("span");
        const nome = document.createElement("strong");
        const valor = document.createElement("em");

        marcador.style.background = obterCorGrafico(index);
        nome.textContent = item.atividade;
        valor.textContent = `${formatarIndicador(valorIndicador)} • ${percentual.toFixed(1).replace(".", ",")}%`;

        legendaItem.appendChild(marcador);
        legendaItem.appendChild(nome);
        legendaItem.appendChild(valor);
        pizzaLegenda.appendChild(legendaItem);
    });
}

function renderizarColunas(atividades) {
    const limiteColunas = obterLimiteColunas();
    const atividadesTop = atividades.slice(0, limiteColunas);
    const maiorValor = Math.max(...atividadesTop.map((item) => obterValorIndicador(item)), 0);

    colunasSubtitulo.textContent = `Top ${atividadesTop.length} por ${obterNomeIndicador()}`;
    graficoColunas.innerHTML = "";

    atividadesTop.forEach((item, index) => {
        const coluna = document.createElement("article");
        const valor = document.createElement("strong");
        const barraWrap = document.createElement("div");
        const barra = document.createElement("span");
        const nome = document.createElement("em");
        const valorIndicador = obterValorIndicador(item);
        const altura = maiorValor ? Math.max(8, (valorIndicador / maiorValor) * 100) : 0;

        coluna.className = "grafico-coluna";
        coluna.style.setProperty("--cor-coluna", obterCorGrafico(index));
        valor.textContent = formatarIndicador(valorIndicador);
        barraWrap.className = "grafico-coluna-barra";
        barra.style.height = `${Math.min(altura, 100)}%`;
        nome.textContent = item.atividade;

        barraWrap.appendChild(barra);
        coluna.appendChild(valor);
        coluna.appendChild(barraWrap);
        coluna.appendChild(nome);
        graficoColunas.appendChild(coluna);
    });
}

function atualizarInfoPeriodo(totalRegistros, totalFiltrado) {
    if (!periodoCompleto.inicio || !periodoCompleto.fim) {
        periodoInfo.textContent = "O endpoint atual ainda não retornou datas da planilha.";
        return;
    }

    const inicioSelecionado = periodoInicio.value || periodoCompleto.inicio;
    const fimSelecionado = periodoFim.value || periodoCompleto.fim;
    periodoInfo.textContent = `${totalFiltrado} de ${totalRegistros} registro(s), de ${formatarData(inicioSelecionado)} a ${formatarData(fimSelecionado)}.`;
}

function renderizarCalendario() {
    calendarioPlanilha.innerHTML = "";

    if (!periodoCompleto.inicio || !periodoCompleto.fim) {
        const vazio = document.createElement("p");
        vazio.className = "calendario-vazio";
        vazio.textContent = "Sem datas para montar o calendário. Publique a versão atualizada do Apps Script para enviar as datas da planilha.";
        calendarioPlanilha.appendChild(vazio);
        return;
    }

    const totalPorDia = new Map();
    registrosGerais.forEach((registro) => {
        const dia = totalPorDia.get(registro.data) || { horas: 0, tfms: new Set() };
        dia.horas += registro.horas;

        if (registro.tfm) {
            dia.tfms.add(registro.tfm);
        }

        totalPorDia.set(registro.data, dia);
    });

    const maiorValor = Math.max(...[...totalPorDia.values()].map((item) => (modoGrafico === "tfms" ? item.tfms.size : item.horas)), 0);
    const inicioSelecionado = periodoInicio.value || periodoCompleto.inicio;
    const fimSelecionado = periodoFim.value || periodoCompleto.fim;

    criarDatasPeriodo(periodoCompleto.inicio, periodoCompleto.fim).forEach((data) => {
        const item = totalPorDia.get(data) || { horas: 0, tfms: new Set() };
        const valor = modoGrafico === "tfms" ? item.tfms.size : item.horas;
        const intensidade = maiorValor ? valor / maiorValor : 0;
        const dia = document.createElement("button");

        dia.type = "button";
        dia.className = "calendario-dia";
        dia.classList.toggle("calendario-dia-vazio", valor <= 0);
        dia.classList.toggle("calendario-dia-ativo", data >= inicioSelecionado && data <= fimSelecionado);
        dia.style.setProperty("--opacidade", (0.08 + intensidade * 0.36).toFixed(2));
        dia.innerHTML = `<span>${formatarData(data).slice(0, 5)}</span><strong>${valor > 0 ? formatarIndicador(valor) : "-"}</strong>`;
        dia.addEventListener("click", () => {
            periodoInicio.value = data;
            periodoFim.value = data;
            atualizarDashboardPorPeriodo();
        });

        calendarioPlanilha.appendChild(dia);
    });
}

function configurarPeriodoCompleto() {
    periodoCompleto = obterPeriodoCompletoRegistros(registrosGerais);

    periodoInicio.min = periodoCompleto.inicio || "";
    periodoInicio.max = periodoCompleto.fim || "";
    periodoFim.min = periodoCompleto.inicio || "";
    periodoFim.max = periodoCompleto.fim || "";
    periodoInicio.value = periodoCompleto.inicio || "";
    periodoFim.value = periodoCompleto.fim || "";
}

function atualizarDashboardPorPeriodo() {
    if (registrosGerais.length) {
        const registrosFiltrados = obterRegistrosFiltrados();
        const atividadesFiltradas = consolidarAtividadesRegistros(registrosFiltrados);
        atualizarInfoPeriodo(registrosGerais.length, registrosFiltrados.length);
        renderizarCalendario();
        renderizarGraficos(atividadesFiltradas);
        return;
    }

    atualizarInfoPeriodo(0, 0);
    renderizarCalendario();
    renderizarGraficos(atividadesGerais);
}

function renderizarGraficos(atividades) {
    const atividadesOrdenadas = ordenarAtividadesPorModo(atividades);
    const totalIndicador = atualizarResumo(atividades);

    if (!atividades.length) {
        pizzaTotal.textContent = formatarIndicador(0);
        graficoPizza.style.background = "#edf4ff";
        pizzaLegenda.innerHTML = "";
        graficoColunas.innerHTML = "";
        colunasSubtitulo.textContent = `Top 0 por ${obterNomeIndicador()}`;
        return;
    }

    renderizarPizza(atividadesOrdenadas, totalIndicador);
    renderizarColunas(atividadesOrdenadas);
}

function renderizarDashboard(atividades) {
    atividadesGerais = normalizarAtividades(atividades);

    if (!atividadesGerais.length) {
        oficinaDashboard.hidden = true;
        oficinaStatus.hidden = false;
        oficinaStatus.textContent = "Nenhum dado geral encontrado no banco de dados.";
        return;
    }

    oficinaStatus.hidden = true;
    oficinaDashboard.hidden = false;
    atualizarDashboardPorPeriodo();
}

function atualizarModoGrafico(novoModo) {
    modoGrafico = novoModo;
    modoGraficoBotoes.forEach((botao) => {
        botao.classList.toggle("oficina-modo-ativo", botao.dataset.modoGrafico === modoGrafico);
    });

    if (atividadesGerais.length) {
        atualizarDashboardPorPeriodo();
    }
}

async function carregarGeralOficina() {
    btnAtualizarGeral.disabled = true;
    oficinaDashboard.hidden = true;
    oficinaStatus.hidden = false;
    oficinaStatus.textContent = "Carregando dados gerais da oficina...";

    const controleConsulta = new AbortController();
    const timeoutConsulta = setTimeout(() => controleConsulta.abort(), 10000);

    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=geralOficina`, {
            signal: controleConsulta.signal
        });

        if (!resposta.ok) {
            throw new Error("Erro ao consultar dados gerais da oficina.");
        }

        const dados = await resposta.json();

        if (!dados.sucesso || !Array.isArray(dados.atividades)) {
            throw new Error(dados.erro || "Erro ao carregar dados gerais da oficina.");
        }

        registrosGerais = normalizarRegistros(dados.registros || []);
        configurarPeriodoCompleto();
        renderizarDashboard(registrosGerais.length ? consolidarAtividadesRegistros(registrosGerais) : dados.atividades);
    } catch (erro) {
        oficinaStatus.hidden = false;
        oficinaStatus.textContent = erro.name === "AbortError"
            ? "A consulta geral da oficina demorou mais que o esperado. Tente atualizar novamente."
            : "Não foi possível carregar o geral da oficina. Publique a versão atualizada do Apps Script e tente novamente.";
        console.error(erro);
    } finally {
        clearTimeout(timeoutConsulta);
        btnAtualizarGeral.disabled = false;
    }
}

btnAtualizarGeral.addEventListener("click", carregarGeralOficina);
btnPeriodoTudo.addEventListener("click", () => {
    periodoInicio.value = periodoCompleto.inicio || "";
    periodoFim.value = periodoCompleto.fim || "";
    atualizarDashboardPorPeriodo();
});
[periodoInicio, periodoFim].forEach((input) => {
    input.addEventListener("change", atualizarDashboardPorPeriodo);
});
modoGraficoBotoes.forEach((botao) => {
    botao.addEventListener("click", () => atualizarModoGrafico(botao.dataset.modoGrafico));
});
window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
        if (atividadesGerais.length) {
            renderizarColunas(ordenarAtividadesPorModo(atividadesGerais));
        }
    }, 120);
});

aplicarLoginSalvo();
carregarGeralOficina();
