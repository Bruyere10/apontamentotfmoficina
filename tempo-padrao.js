const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";
const LOGIN_CHAVE = "stellantisUsuarioLogado";

const usuarioContainer = document.getElementById("usuario-tempo-padrao");
const usuarioNome = document.getElementById("usuario-tempo-padrao-nome");
const buscaInput = document.getElementById("tempo-padrao-busca");
const limparBusca = document.getElementById("tempo-padrao-limpar");
const lista = document.getElementById("tempo-padrao-lista");
const status = document.getElementById("tempo-padrao-status");
const contagem = document.getElementById("tempo-padrao-contagem");
const atualizarButton = document.getElementById("tempo-padrao-atualizar");
let atividades = [];
let carregando = false;
let ultimaAtualizacao = 0;

function obterLoginSalvo() {
    try {
        return JSON.parse(localStorage.getItem(LOGIN_CHAVE));
    } catch (erro) {
        return null;
    }
}

function aplicarLogin() {
    const usuario = obterLoginSalvo();
    if (!usuario?.nome || !usuario?.matricula) {
        window.location.href = "index.html";
        return false;
    }

    usuarioNome.textContent = usuario.nome;
    usuarioContainer.hidden = false;
    return true;
}

function normalizarTexto(valor) {
    return String(valor || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function formatarTempo(valor) {
    const numero = Number(valor);
    if (valor === null || valor === undefined || valor === "" || !Number.isFinite(numero) || numero <= 0) return "Não informado";
    return `${numero.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} h`;
}

function renderizar() {
    const termos = normalizarTexto(buscaInput.value).split(/\s+/).filter(Boolean);
    const filtradas = atividades.filter((item) => {
        const conteudo = normalizarTexto(`${item.codigo} ${item.atividade}`);
        return termos.every((termo) => conteudo.includes(termo));
    });

    lista.innerHTML = "";
    filtradas.forEach((item) => {
        const linha = document.createElement("tr");
        const codigo = document.createElement("td");
        const atividade = document.createElement("td");
        const tempo = document.createElement("td");
        codigo.textContent = item.codigo;
        atividade.textContent = item.atividade;
        tempo.textContent = formatarTempo(item.tempoPadrao);
        linha.append(codigo, atividade, tempo);
        lista.appendChild(linha);
    });

    limparBusca.hidden = !buscaInput.value;
    contagem.textContent = `${filtradas.length} de ${atividades.length} atividades`;
    status.hidden = filtradas.length > 0;
    if (!filtradas.length && atividades.length) status.textContent = "Nenhuma atividade corresponde à pesquisa.";
}

async function carregarTemposPadrao(silencioso = false) {
    if (carregando) return;
    carregando = true;
    atualizarButton.disabled = true;
    atualizarButton.classList.add("carregando");

    if (!silencioso || !atividades.length) {
        status.hidden = false;
        status.textContent = "Carregando atividades...";
    }

    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=listarTemposPadrao&_=${Date.now()}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso || !Array.isArray(dados.atividades)) {
            throw new Error(dados.erro || "Não foi possível consultar os tempos padrão.");
        }

        atividades = dados.atividades;
        ultimaAtualizacao = Date.now();
        renderizar();
    } catch (erro) {
        if (!atividades.length) {
            lista.innerHTML = "";
            contagem.textContent = "0 atividades";
            status.hidden = false;
            status.textContent = erro.message;
        }
    } finally {
        carregando = false;
        atualizarButton.disabled = false;
        atualizarButton.classList.remove("carregando");
    }
}

buscaInput.addEventListener("input", renderizar);
limparBusca.addEventListener("click", () => {
    buscaInput.value = "";
    renderizar();
    buscaInput.focus();
});
atualizarButton.addEventListener("click", () => carregarTemposPadrao());
window.addEventListener("focus", () => {
    if (Date.now() - ultimaAtualizacao > 15000) carregarTemposPadrao(true);
});
window.setInterval(() => carregarTemposPadrao(true), 60000);

if (aplicarLogin()) carregarTemposPadrao();
