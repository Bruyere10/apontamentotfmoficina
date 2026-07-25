const atividadesDisponiveis = [
    "Troca de motor N4/ N3 em veículo",
    "Troca de motor Diesel 2.2 KP1",
    "Troca de motor Diesel 2.2 Comander / Toro / RampageAC",
    "Troca de motor T3 / T4",
    "Revisão motor veículo",
    "Pesagem de óleo quente",
    "Check list veículo 0Km",
    "Checklist veículo Usado",
    "Check list Ducato e K0",
    "Troca de componente do motor em veículo (Front Cover, corrente, VVT...)",
    "Troca de catalisador em veículos aspirados",
    "Troca de catalisador em veículos turbo Fiat",
    "Troca de catalisador em veículo Peugeot e 281",
    "Instrumentação de catalisador veículo",
    "Troca de catalisador Diesel veículo",
    "Troca de turbina Diesel veículo",
    "Troca de turbina T3 e T4 veículo",
    "Troca de turbina GME veículo",
    "Revisão de motor em cela",
    "Troca de velas em veículo",
    "Troca de motor em carrinho preparado aspirado e turbo",
    "Preparação de carrinho para rodagem em cela.(Novo)",
    "Troca de motor GME veículo",
    "Motor controle total",
    "Motor controle parcial",
    "Atualização de componentes",
    "Desmontagem fim de prova aspirado e turbo",
    "Desmontagem fim de prova turbo GME, diesel e EC5",
    "Instrumentação de cabeçote (Incoder)",
    "Instrumentação de turbina",
    "Troca de cabeçote",
    "Troca de frontcover",
    "Troca de motor Start Cart",
    "Troca de sensores indicom na cela turbo",
    "Troca de sensores indicom aspirado",
    "Troca de bicos e bomba em veículo",
    "Benchmarking Escaneamento 3D",
    "PowerBook Motor Benchmarking",
    "PowerBook Transmissão Benchmarking",
    "PowerBook Eletrificados H.V Benchmarking",
    "PowerBook Sistemas Benchmarking",
    "Preparação Workshop Motores/Transmissão/Eletrificação/Sistemas Benchmarking",
    "Montagem Workshop Motores/Transmissão/Eletrificação/Sistemas Benchmarking",
    "Suporte técnico Workshop Motores/Transmissão/Eletrificação/Sistemas Benchmarking",
    "Desmontagem Workshop Motores/Transmissão/Eletrificação/Sistemas Benchmarking",
    "Suporte técnico em apresentações Workshop Welcome Benchmarking",
    "Checklist veículo Benchmarking",
    "Levar e Buscar carro Benchmarking locadora/concessionária",
    "Movimentar veículos Benchmarking Oficina/Benchmarking veículos/Pátio",
    "Diagnose em veículos Benchmarking",
    "Retirada de bateria H.V veículos Benchmarking",
    "Desenergização veículos híbridos",
    "Outros - Atividade rápida",
    "Outros - Atividade curta",
    "Outros - Atividade média",
    "Outros - Atividade longa",
    "Alinhamento de motor em cela",
    "TFM Cancelada",
    "Troca de motor Diesel em Cela",
    "Preparação e Alinhamento de Motor Diesel 2.2 em Cela",
    "Troca de componentes no veiculo",
    "Instrumentação de coletor de admissão",
    "Troca de catalisador no motor na cela",
    "Preparação de motor para rodagem em cela"
];

const btnAdd = document.querySelector(".btn-add");
const btnSalvar = document.querySelector(".btn-salvar");
const btnBuscar = document.querySelector(".btn-buscar");
const btnAbrirSugestao = document.querySelector(".btn-abrir-sugestao");
const btnAbrirFeedback = document.querySelector(".btn-abrir-feedback");
const btnSugerirAtividade = document.querySelector(".btn-sugerir-atividade");
const btnEnviarFeedback = document.querySelector(".btn-enviar-feedback");
const form = document.getElementById("form-apontamento");
const container = document.getElementById("atividades-lista");
const detalhesContainer = document.getElementById("detalhes-lista");
const buscaTfmInput = document.getElementById("busca-tfm");
const sugestaoAtividadeInput = document.getElementById("sugestao-atividade");
const sugestaoObservacaoInput = document.getElementById("sugestao-observacao");
const feedbackTipoInput = document.getElementById("feedback-tipo");
const feedbackTextoInput = document.getElementById("feedback-texto");
const feedbackObservacaoInput = document.getElementById("feedback-observacao");
const resultadoBusca = document.getElementById("resultado-busca");
const resultadoBuscaBackdrop = document.querySelector(".resultado-busca-backdrop");
const modalTfm = document.getElementById("modal-tfm");
const modalTfmConteudo = document.getElementById("modal-tfm-conteudo");
const modalSugestao = document.getElementById("modal-sugestao");
const modalFeedback = document.getElementById("modal-feedback");
const modalAtividade = document.getElementById("modal-atividade");
const modalColaborador = document.getElementById("modal-colaborador");
const modalRevisao = document.getElementById("modal-revisao");
const modalHelp = document.getElementById("modal-help");
const botoesHelp = document.querySelectorAll(".btn-help");
const btnConfirmarAtividade = document.querySelector(".btn-confirmar-atividade");
const btnConfirmarColaborador = document.querySelector(".btn-confirmar-colaborador");
const btnConfirmarSalvamento = document.querySelector(".btn-confirmar-salvamento");
const btnImprimirRevisao = document.querySelector(".btn-imprimir-revisao");
const telaLogin = document.getElementById("tela-login");
const loginNomeInput = document.getElementById("login-nome");
const loginMatriculaInput = document.getElementById("login-matricula");
const loginAlternativo = document.getElementById("login-alternativo");
const novoLoginNomeInput = document.getElementById("novo-login-nome");
const novoLoginMatriculaInput = document.getElementById("novo-login-matricula");
const loginFeedback = document.getElementById("login-feedback");
const btnEntrarLogin = document.querySelector(".btn-entrar-login");
const btnLoginAlternativo = document.querySelector(".btn-login-alternativo");
const btnEntrarPendente = document.querySelector(".btn-entrar-pendente");
const btnSairLogin = document.querySelector(".btn-sair-login");
const usuarioLogado = document.getElementById("usuario-logado");
const usuarioLogadoNome = document.getElementById("usuario-logado-nome");
const matriculaInput = document.getElementById("matricula");
const modalAtividadeInput = document.getElementById("modal-atividade-input");
const modalObservacaoInput = document.getElementById("modal-observacao-input");
const modalHorasInput = document.getElementById("modal-horas-input");
const modalColaboradorNomeInput = document.getElementById("modal-colaborador-nome");
const modalColaboradorMatriculaInput = document.getElementById("modal-colaborador-matricula");
const modalColaboradorHorasInput = document.getElementById("modal-colaborador-horas");
const feedbackGlobal = document.getElementById("feedback-global");
const resumoAtividades = document.getElementById("resumo-atividades");
const resumoSalvos = document.getElementById("resumo-salvos");
const resumoUltimoTfm = document.getElementById("resumo-ultimo-tfm");
const abaAcesso = document.getElementById("aba-acesso");
const abaConsultar = document.getElementById("aba-consultar");
const painelAcesso = document.getElementById("painel-acesso");
const painelConsultarLogin = document.getElementById("painel-consultar-login");
const loginBuscaTfmInput = document.getElementById("login-busca-tfm");
const btnBuscarLogin = document.querySelector(".btn-buscar-login");
const loginConsultaFeedback = document.getElementById("login-consulta-feedback");
const loginResultadoBusca = document.getElementById("login-resultado-busca");
const historicoLista = document.getElementById("historico-lista");
const revisaoConteudo = document.getElementById("revisao-conteudo");
const colaboradoresAdicionaisLista = document.getElementById("colaboradores-adicionais-lista");
const btnAddColaborador = document.querySelector(".btn-add-colaborador");
const LOGIN_CHAVE = "stellantisUsuarioLogado";
const HISTORICO_CHAVE = "stellantisHistoricoApontamentos";
const LIMITE_HISTORICO = 5;
const TIPOS_DOCUMENTO_PERMITIDOS = ["application/pdf", "image/png", "image/jpeg"];
const ETAPAS_SALVAMENTO = [
    "Pegando os dados...",
    "Conferindo anexos...",
    "Salvando na planilha...",
    "Aguarde, quase lá..."
];
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";
let resumoPlanilhaCarregado = false;
let historicoAtual = [];
let apontamentoPendente = null;
let usuarioAtual = null;
let atividadeEmEdicao = null;
let colaboradorEmEdicao = null;
let salvamentoIntervalo = null;
const cacheConsultaTfms = new Map();
let buscaEmLoteDisponivel = true;
const colaboradores = [
    { matricula: "87033", nome: "Leonel Barros Pereira Da Silva" },
    { matricula: "61449", nome: "Ailton Dos Reis Santana" },
    { matricula: "61618", nome: "Airton Fonseca do Nascimento" },
    { matricula: "90079", nome: "Albert de Almeida Libério" },
    { matricula: "105741",nome: "Caio Resende Soares" },
    { matricula: "61526", nome: "Cláudio Roberto Miranda" },
    { matricula: "61461", nome: "Cleiton De Souza" },
    { matricula: "61221", nome: "Ecelson Miranda" },
    { matricula: "61604", nome: "Edilson Ribeiro de Andrade" },
    { matricula: "81531", nome: "Fabio Henrique Alves Ventura" },
    { matricula: "61134", nome: "Franklin de Jesus Souza" },
    { matricula: "70980", nome: "Geraldo Marçal Paiva" },
    { matricula: "60738", nome: "Gustavo da Silva Amaral" },
    { matricula: "62011", nome: "João Paulo de Rezende Trindade" },
    { matricula: "83661", nome: "José Edson Martins Coelho" },
    { matricula: "91542", nome: "José Egídio Rocha" },
    { matricula: "60884", nome: "José Roberto Souza Franco" },
    { matricula: "91541", nome: "Paulo Roberto Ferreira" },
    { matricula: "63277", nome: "Renato Fagner Foureaux" },
    { matricula: "61313", nome: "Renis Mendes Goulart" },
    { matricula: "66642", nome: "Ricardo da Silva Matos" },
    { matricula: "61834", nome: "Roberto Carlos Vieira Martins" },
    { matricula: "60551", nome: "Rodolfo Ribeiro Martins" },
    { matricula: "66647", nome: "Romeu Malagoli dos Santos" },
    { matricula: "61091", nome: "Sebastião Dirino Correia" },
    { matricula: "61367", nome: "Sueimer Batista Pereira" },
    { matricula: "61938", nome: "Wender Bortoloto da Costa" },
    { matricula: "61124", nome: "Valdemi Amancio Do Nascimento" },
    { matricula: "215640", nome: "Renato Basílio dos Santos Júnior" },
    { matricula: "208408", nome: "Rafael da Silva Moreira" }
];
const colaboradoresDisponiveis = colaboradores.map(({ nome }) => nome);

function normalizarTexto(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function fecharSugestoes() {
    document.querySelectorAll(".atividade-sugestoes").forEach((lista) => {
        lista.hidden = true;
        lista.innerHTML = "";
    });
}

function correspondeBusca(texto, busca) {
    const textoNormalizado = normalizarTexto(texto);
    const termos = normalizarTexto(busca).split(/\s+/).filter(Boolean);

    return termos.every((termo) => textoNormalizado.includes(termo));
}

function mostrarFeedback(mensagem, tipo = "sucesso") {
    feedbackGlobal.hidden = false;
    feedbackGlobal.className = `feedback-global ${tipo}`;
    feedbackGlobal.textContent = mensagem;
    feedbackGlobal.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function limparFeedback() {
    feedbackGlobal.hidden = true;
    feedbackGlobal.textContent = "";
}

function mostrarFeedbackLogin(mensagem, tipo = "erro") {
    loginFeedback.hidden = false;
    loginFeedback.className = `login-feedback ${tipo}`;
    loginFeedback.textContent = mensagem;
}

function limparFeedbackLogin() {
    loginFeedback.hidden = true;
    loginFeedback.textContent = "";
}

function criarBotaoFecharResultado(aoFechar) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "btn-fechar-resultado";
    botao.setAttribute("aria-label", "Fechar resultados da consulta");
    botao.innerHTML = `<i class="bi bi-x-lg"></i>`;
    botao.addEventListener("click", aoFechar);
    return botao;
}

function mostrarResultadoBuscaLogin(conteudo, tipo = "sucesso") {
    loginResultadoBusca.hidden = false;
    loginResultadoBusca.className = `resultado-busca login-resultado-busca resultado-busca-${tipo}`;
    loginResultadoBusca.innerHTML = "";
    loginResultadoBusca.appendChild(criarBotaoFecharResultado(limparResultadoBuscaLogin));
    loginResultadoBusca.appendChild(conteudo);
}

function limparResultadoBuscaLogin() {
    loginResultadoBusca.hidden = true;
    loginResultadoBusca.innerHTML = "";
}

function limparErroCampo(input) {
    const campo = input.closest(".campo");
    campo?.querySelector(".campo-mensagem")?.remove();
}

function marcarCampo(input, invalido, mensagem = "") {
    input.closest(".input-icon")?.classList.toggle("campo-invalido", invalido);
    limparErroCampo(input);

    if (invalido && mensagem) {
        const campo = input.closest(".campo");
        const alerta = document.createElement("small");
        alerta.className = "campo-mensagem";
        alerta.textContent = mensagem;
        campo?.appendChild(alerta);
    }
}

function limitarParaNumeros(input, limite) {
    input.value = input.value.replace(/\D/g, "").slice(0, limite);
}

function obterHistorico() {
    try {
        return JSON.parse(localStorage.getItem(HISTORICO_CHAVE)) || [];
    } catch (erro) {
        return [];
    }
}

function salvarHistorico(item) {
    const historico = obterHistorico();
    const novosItens = Array.isArray(item) ? item : [item];
    const atualizado = [...novosItens, ...historico].slice(0, LIMITE_HISTORICO);
    localStorage.setItem(HISTORICO_CHAVE, JSON.stringify(atualizado));
}

function configurarDataAtual() {
    const dataInicioInput = document.getElementById("data-inicio-tfm");
    const dataFimInput = document.getElementById("data-fim-tfm");
    const dataAtual = new Date().toISOString().slice(0, 10);

    if (!dataInicioInput.value) {
        dataInicioInput.value = dataAtual;
    }

    if (!dataFimInput.value) {
        dataFimInput.value = dataAtual;
    }
}

function obterLoginSalvo() {
    try {
        return JSON.parse(localStorage.getItem(LOGIN_CHAVE));
    } catch (erro) {
        return null;
    }
}

function salvarLogin(colaborador) {
    localStorage.setItem(LOGIN_CHAVE, JSON.stringify({
        nome: colaborador.nome,
        matricula: colaborador.matricula,
        cadastroPendente: Boolean(colaborador.cadastroPendente)
    }));
}

function criarDataLocal(valor) {
    const [ano, mes, dia] = valor.split("-").map(Number);
    return new Date(ano, mes - 1, dia);
}

function criarDatasPeriodo(dataInicio, dataFim) {
    const inicio = criarDataLocal(dataInicio);
    const fim = criarDataLocal(dataFim);
    const datas = [];

    for (let data = new Date(inicio); data <= fim; data.setDate(data.getDate() + 1)) {
        datas.push(new Date(data).toISOString().slice(0, 10));
    }

    return datas;
}

function distribuirHorasNoPeriodo(horas, dataInicio, dataFim) {
    const datas = criarDatasPeriodo(dataInicio, dataFim);
    const totalCentavosHora = Math.round(Number(horas || 0) * 100);
    const base = Math.floor(totalCentavosHora / datas.length);
    const resto = totalCentavosHora % datas.length;

    return datas.map((data, index) => ({
        data,
        horas: Number(((base + (index < resto ? 1 : 0)) / 100).toFixed(2))
    }));
}

function atualizarResumo() {
    const historico = historicoAtual.length ? historicoAtual : obterHistorico();
    const ultimoTfm = historico.find((item) => item.tfm)?.tfm;

    resumoUltimoTfm.textContent = ultimoTfm || "-";

    if (resumoPlanilhaCarregado) {
        return;
    }

    resumoAtividades.textContent = "...";
    resumoSalvos.textContent = "-";
}

async function carregarResumoPlanilha() {
    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=resumoGeral`);

        if (!resposta.ok) {
            throw new Error("Erro ao consultar resumo da planilha.");
        }

        const dados = await resposta.json();

        if (!dados.sucesso) {
            throw new Error(dados.erro || "Erro ao carregar resumo da planilha.");
        }

        resumoPlanilhaCarregado = true;
        resumoAtividades.textContent = Number(dados.totalAtividades || 0).toLocaleString("pt-BR");
        resumoSalvos.textContent = Number(dados.totalTfms || 0).toLocaleString("pt-BR");
    } catch (erro) {
        resumoPlanilhaCarregado = false;
        resumoAtividades.textContent = "-";
        resumoSalvos.textContent = "-";
        console.error(erro);
    }
}

function renderizarHistorico(historico = obterHistorico()) {
    historicoAtual = Array.isArray(historico) ? historico : [];
    historicoLista.innerHTML = "";

    if (historicoAtual.length === 0) {
        const vazio = document.createElement("p");
        vazio.className = "historico-vazio";
        vazio.textContent = "Nenhuma atividade encontrada na planilha ainda.";
        historicoLista.appendChild(vazio);
        atualizarResumo();
        return;
    }

    historicoAtual.slice(0, LIMITE_HISTORICO).forEach((item) => {
        const registro = document.createElement("article");
        const info = document.createElement("div");
        const atividade = document.createElement("strong");
        const detalhes = document.createElement("span");
        const tfm = document.createElement("span");

        registro.className = "historico-item";
        atividade.textContent = item.atividade || `Registro anterior com ${item.atividades || 1} atividade(s)`;
        detalhes.textContent = [item.nome, formatarData(item.data)].filter(Boolean).join(" - ");
        tfm.textContent = `TFM ${item.tfm}`;

        info.appendChild(atividade);
        info.appendChild(detalhes);
        registro.appendChild(info);
        registro.appendChild(tfm);
        historicoLista.appendChild(registro);
    });

    atualizarResumo();
}

async function carregarHistoricoPlanilha() {
    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=historicoRecentes&limite=${LIMITE_HISTORICO}`);

        if (!resposta.ok) {
            throw new Error("Erro ao consultar histórico da planilha.");
        }

        const dados = await resposta.json();

        if (!dados.sucesso) {
            throw new Error(dados.erro || "Erro ao carregar histórico da planilha.");
        }

        renderizarHistorico(Array.isArray(dados.historico) ? dados.historico : []);
    } catch (erro) {
        console.error(erro);
        renderizarHistorico();
    }
}

function renumerarAtividades() {
    document.querySelectorAll(".detalhes-item").forEach((item, index) => {
        const indice = index + 1;
        item.querySelector(".bloco-numero").textContent = String(indice).padStart(2, "0");
        item.querySelector(".bloco-cabecalho strong").textContent = item.classList.contains("detalhes-item-compacto")
            ? `Atividade ${indice}`
            : "Atividade realizada";
    });
    atualizarResumo();
}

function buscarColaboradorPorNome(nome) {
    const nomeNormalizado = normalizarTexto(nome.trim());
    return colaboradores.find((colaborador) => normalizarTexto(colaborador.nome) === nomeNormalizado);
}

function buscarColaboradorPorMatricula(matricula) {
    return colaboradores.find((colaborador) => colaborador.matricula === matricula.trim());
}

function validarCredenciais(nome, matricula) {
    const colaborador = buscarColaboradorPorNome(nome);

    if (!colaborador || colaborador.matricula !== matricula.trim()) {
        return null;
    }

    return colaborador;
}

function validarLoginPendente(loginSalvo) {
    if (!loginSalvo?.cadastroPendente) {
        return null;
    }

    const nome = String(loginSalvo.nome || "").trim();
    const matricula = String(loginSalvo.matricula || "").trim();

    if (nome.length < 6 || !/^\d{4,6}$/.test(matricula)) {
        return null;
    }

    return { nome, matricula, cadastroPendente: true };
}

function atualizarMatriculaPorNome(nome) {
    const colaborador = buscarColaboradorPorNome(nome);
    matriculaInput.value = colaborador ? colaborador.matricula : "";
}

function atualizarMatriculaColaboradorAdicional(input, nome) {
    const item = input.closest(".colaborador-adicional-item");
    const matricula = item?.querySelector(".colaborador-adicional-matricula");
    const colaborador = buscarColaboradorPorNome(nome);

    if (matricula) {
        matricula.value = colaborador ? colaborador.matricula : "";
    }
}

function atualizarMatriculaModalColaborador(nome) {
    const colaborador = buscarColaboradorPorNome(nome);
    modalColaboradorMatriculaInput.value = colaborador ? colaborador.matricula : "";
}

function atualizarMatriculaLoginPorNome(nome) {
    const colaborador = buscarColaboradorPorNome(nome);
    loginMatriculaInput.value = colaborador ? colaborador.matricula : "";
}

function aplicarUsuarioLogado(colaborador) {
    usuarioAtual = colaborador;
    document.body.classList.remove("login-bloqueado");
    telaLogin.hidden = true;
    usuarioLogado.hidden = false;
    usuarioLogadoNome.textContent = colaborador.cadastroPendente ? `${colaborador.nome} (cadastro pendente)` : colaborador.nome;
    document.getElementById("nome").value = colaborador.nome;
    matriculaInput.value = colaborador.matricula;
    limparFeedbackLogin();
}

function exigirLogin() {
    const loginSalvo = obterLoginSalvo();
    const colaborador = loginSalvo
        ? validarCredenciais(loginSalvo.nome, loginSalvo.matricula) || validarLoginPendente(loginSalvo)
        : null;

    if (colaborador) {
        aplicarUsuarioLogado(colaborador);
        return;
    }

    localStorage.removeItem(LOGIN_CHAVE);
    usuarioAtual = null;
    document.body.classList.add("login-bloqueado");
    telaLogin.hidden = false;
    usuarioLogado.hidden = true;
    loginAlternativo.hidden = true;
    loginNomeInput.focus();
    fecharSugestoes();
}

function alternarAbaLogin(aba) {
    const isConsultar = aba === "consultar";
    abaAcesso.classList.toggle("login-aba-ativo", !isConsultar);
    abaAcesso.setAttribute("aria-selected", String(!isConsultar));
    abaConsultar.classList.toggle("login-aba-ativo", isConsultar);
    abaConsultar.setAttribute("aria-selected", String(isConsultar));
    painelAcesso.hidden = isConsultar;
    painelConsultarLogin.hidden = !isConsultar;
    if (isConsultar) {
        loginBuscaTfmInput?.focus();
    } else {
        loginNomeInput?.focus();
    }
}

async function buscarTfmLogin() {
    const tfms = extrairTfms(loginBuscaTfmInput.value);

    if (!tfms.length) {
        limparResultadoBuscaLogin();
        loginConsultaFeedback.hidden = false;
        loginConsultaFeedback.className = "login-feedback erro";
        loginConsultaFeedback.textContent = "Digite ou cole pelo menos um TFM com 6 números para pesquisar.";
        loginBuscaTfmInput.focus();
        return;
    }

    loginConsultaFeedback.hidden = true;
    limparResultadoBuscaLogin();
    const icone = btnBuscarLogin.querySelector("i");
    const texto = btnBuscarLogin.querySelector("span");
    btnBuscarLogin.disabled = true;
    icone.className = "bi bi-gear-fill";
    texto.textContent = "Buscando...";

    try {
        const resultados = await consultarListaTfms(tfms);

        if (!resultados[0].encontrado) {
            mostrarResultadoBuscaLogin(criarResumoConsultaTfms(resultados), "aviso");
            return;
        }

        mostrarResultadoBuscaLogin(criarResumoConsultaTfms(resultados), resultados.some((resultado) => !resultado.encontrado) ? "aviso" : "sucesso");
    } catch (erro) {
        loginConsultaFeedback.hidden = false;
        loginConsultaFeedback.className = "login-feedback erro";
        loginConsultaFeedback.textContent = "Erro ao buscar o TFM. Tente novamente.";
        console.error(erro);
    } finally {
        btnBuscarLogin.disabled = false;
        icone.className = "bi bi-search";
        texto.textContent = "Buscar TFM";
    }
}

function alternarLoginPendente() {
    loginAlternativo.hidden = !loginAlternativo.hidden;

    if (!loginAlternativo.hidden) {
        novoLoginNomeInput.focus();
    }
}

function entrarLogin() {
    const nome = loginNomeInput.value.trim();
    const matricula = loginMatriculaInput.value.trim();
    const colaborador = validarCredenciais(nome, matricula);

    marcarCampo(loginNomeInput, !nome, "Informe seu nome.");
    marcarCampo(loginMatriculaInput, !matricula, "Informe sua matrícula.");

    if (!colaborador) {
        mostrarFeedbackLogin("Nome e matrícula não conferem com a lista de colaboradores.");
        return;
    }

    salvarLogin(colaborador);
    aplicarUsuarioLogado(colaborador);
}

function entrarLoginPendente() {
    const nome = novoLoginNomeInput.value.trim();
    const matricula = novoLoginMatriculaInput.value.trim();
    const nomeJaExiste = buscarColaboradorPorNome(nome);
    const matriculaJaExiste = buscarColaboradorPorMatricula(matricula);
    const nomeInvalido = nome.length < 6 || !nome.includes(" ");
    const matriculaInvalida = !/^\d{4,6}$/.test(matricula);

    marcarCampo(novoLoginNomeInput, nomeInvalido, "Digite seu nome completo.");
    marcarCampo(novoLoginMatriculaInput, matriculaInvalida, "Digite uma matrícula válida.");

    if (nomeInvalido || matriculaInvalida) {
        mostrarFeedbackLogin("Preencha nome completo e matrícula para solicitar inclusão.");
        return;
    }

    if (nomeJaExiste || matriculaJaExiste) {
        mostrarFeedbackLogin("Esse nome ou matrícula já existe na lista. Use o acesso principal acima.", "aviso");
        return;
    }

    const colaborador = { nome, matricula, cadastroPendente: true };
    salvarLogin(colaborador);
    aplicarUsuarioLogado(colaborador);
    registrarCadastroPendente(colaborador);
    mostrarFeedback("Acesso liberado como cadastro pendente. Solicite a inclusão oficial à liderança.", "aviso");
}

function sairLogin() {
    localStorage.removeItem(LOGIN_CHAVE);
    usuarioAtual = null;
    loginNomeInput.value = "";
    loginMatriculaInput.value = "";
    novoLoginNomeInput.value = "";
    novoLoginMatriculaInput.value = "";
    document.getElementById("nome").value = "";
    matriculaInput.value = "";
    exigirLogin();
}

function mostrarSugestoes(input, opcoes, aoSelecionar) {
    const wrapper = input.closest(".autocomplete-wrapper");
    const lista = wrapper.querySelector(".atividade-sugestoes");
    const busca = input.value.trim();
    const sugestoes = opcoes
        .filter((opcao) => correspondeBusca(opcao, busca))
        .sort((primeira, segunda) => normalizarTexto(primeira).indexOf(normalizarTexto(busca)) - normalizarTexto(segunda).indexOf(normalizarTexto(busca)));

    lista.innerHTML = "";

    if (sugestoes.length === 0) {
        lista.hidden = true;
        return;
    }

    sugestoes.forEach((opcao) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "atividade-sugestao";
        botao.textContent = opcao;

        botao.addEventListener("mousedown", () => {
            input.value = opcao;
            if (aoSelecionar) {
                aoSelecionar(opcao);
            }
            fecharSugestoes();
        });

        lista.appendChild(botao);
    });

    lista.hidden = false;
}

function configurarAutocomplete(input, opcoes, aoSelecionar, aoDigitar) {
    input.addEventListener("input", () => {
        mostrarSugestoes(input, opcoes, aoSelecionar);
        if (aoDigitar) {
            aoDigitar(input.value);
        }
    });
    input.addEventListener("focus", () => mostrarSugestoes(input, opcoes, aoSelecionar));
}

function configurarDocumento(input) {
    const nomeArquivo = input.closest(".input-file").querySelector(".arquivo-nome");

    input.addEventListener("change", () => {
        const arquivos = Array.from(input.files || []);
        nomeArquivo.textContent = arquivos.length
            ? arquivos.map((arquivo) => arquivo.name).join(", ")
            : "Nenhum arquivo selecionado";
    });
}

function criarColaboradorAdicionalItem(dados = {}) {
    const item = document.createElement("div");
    item.className = "colaborador-adicional-item bloco-item detalhes-item-compacto";
    item.innerHTML = `
        <div class="bloco-cabecalho">
            <span class="bloco-numero" aria-label="Colaborador adicional"><i class="bi bi-person"></i></span>
            <div class="atividade-resumo-acoes">
                <button type="button" class="btn-editar-colaborador" aria-label="Editar colaborador adicional">
                    <i class="bi bi-pencil-square"></i>
                    <span>Editar</span>
                </button>
                <button type="button" class="btn-remover-colaborador" aria-label="Remover colaborador adicional">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
        </div>

        <input type="hidden" class="colaborador-adicional-nome">
        <input type="hidden" class="colaborador-adicional-matricula">
        <input type="hidden" class="colaborador-adicional-horas">
    `;

    item.querySelector(".colaborador-adicional-nome").value = dados.nome || "";
    item.querySelector(".colaborador-adicional-matricula").value = dados.matricula || "";
    item.querySelector(".colaborador-adicional-horas").value = dados.horas || "";
    atualizarResumoColaboradorAdicional(item);

    return item;
}

function adicionarColaboradorAdicional(dados = {}) {
    const item = criarColaboradorAdicionalItem(dados);
    colaboradoresAdicionaisLista.appendChild(item);
    atualizarNumeracaoColaboradoresAdicionais();
}

function atualizarResumoColaboradorAdicional(item) {
    const nome = item.querySelector(".colaborador-adicional-nome")?.value.trim() || "colaborador adicional";
    const matricula = item.querySelector(".colaborador-adicional-matricula")?.value.trim();
    const horas = item.querySelector(".colaborador-adicional-horas")?.value.trim();
    const icone = item.querySelector(".bloco-numero");

    if (icone) {
        icone.title = `${nome}${matricula ? ` - ${matricula}` : ""}${horas ? ` - ${horas}h` : ""}`;
    }
}

function atualizarNumeracaoColaboradoresAdicionais() {
    document.querySelectorAll(".colaborador-adicional-item").forEach((item, index) => {
        const icone = item.querySelector(".bloco-numero");

        if (icone) {
            icone.setAttribute("aria-label", `Colaborador adicional ${index + 1}`);
        }
    });
}

function limparColaboradoresAdicionais() {
    colaboradoresAdicionaisLista.innerHTML = "";
}

function renderizarColaboradoresAdicionais(colaboradores = []) {
    limparColaboradoresAdicionais();
    colaboradores.forEach((colaborador) => adicionarColaboradorAdicional(colaborador));
}

function criarDetalhesItem(indice) {
    const novoDetalhe = document.createElement("div");
    novoDetalhe.classList.add("detalhes-item", "bloco-item");
    const numeroFormatado = String(indice).padStart(2, "0");

    if (indice > 1) {
        novoDetalhe.classList.add("detalhes-item-compacto");
        novoDetalhe.innerHTML = `
            <div class="bloco-cabecalho">
                <span class="bloco-numero">${numeroFormatado}</span>
                <div class="bloco-cabecalho-titulo">
                    <strong>Atividade ${indice}</strong>
                    <span class="atividade-resumo-texto">Sem atividade informada</span>
                </div>
                <div class="atividade-resumo-acoes">
                    <button type="button" class="btn-editar-atividade" aria-label="Editar atividade ${indice}">
                        <i class="bi bi-pencil-square"></i>
                        <span>Editar</span>
                    </button>
                    <button type="button" class="btn-remover-atividade" aria-label="Remover atividade ${indice}">
                        <i class="bi bi-trash3"></i>
                    </button>
                </div>
            </div>

            <input id="atividade-${indice}" name="atividade[]" type="hidden" class="atividade-input" required>
            <input id="horas-${indice}" name="horas[]" type="hidden" class="horas-input" required>
            <input id="observacao-${indice}" name="observacao[]" type="hidden" class="observacao-input">
        `;

        return novoDetalhe;
    }

    novoDetalhe.innerHTML = `
        <div class="bloco-cabecalho">
            <span class="bloco-numero">${numeroFormatado}</span>
            <div class="bloco-cabecalho-titulo">
                <strong>Atividade realizada ${indice}</strong>
            </div>
            <button type="button" class="btn-remover-atividade" aria-label="Remover atividade ${indice}">
                <i class="bi bi-trash3"></i>
            </button>
        </div>

        <div class="detalhes-grid">
            <div class="campo campo-inteiro">
                <label for="atividade-${indice}">Atividade Realizada</label>
                <div class="autocomplete-wrapper">
                    <div class="input-icon">
                        <i class="bi bi-list-ul"></i>
                        <input id="atividade-${indice}" name="atividade[]" type="text" class="atividade-input" placeholder="Digite ou selecione a atividade" autocomplete="off" required>
                    </div>
                    <div class="atividade-sugestoes" hidden></div>
                </div>
            </div>

            <div class="campo campo-horas">
                <label for="horas-${indice}">Horas Trabalhadas</label>
                <div class="input-icon">
                    <i class="bi bi-clock-history"></i>
                    <input id="horas-${indice}" name="horas[]" type="text" class="horas-input" placeholder="Ex: 1.5" inputmode="decimal" pattern="[0-9]+(\\.[0-9]+)?" required>
                </div>
            </div>

            <div class="campo observacao">
                <label for="observacao-${indice}">Observação da atividade ${indice}</label>
                <div class="input-icon input-textarea">
                    <i class="bi bi-chat-left-text"></i>
                    <textarea id="observacao-${indice}" name="observacao[]" rows="3" class="observacao-input" placeholder="Digite alguma observação sobre a atividade"></textarea>
                </div>
            </div>

        </div>
    `;

    return novoDetalhe;
}

function atualizarResumoAtividadeItem(item) {
    const atividade = item.querySelector(".atividade-input")?.value.trim() || "Sem atividade informada";
    const horas = item.querySelector(".horas-input")?.value.trim();
    const resumo = item.querySelector(".atividade-resumo-texto");

    if (!resumo) {
        return;
    }

    resumo.textContent = horas ? `${atividade} - ${horas}h` : atividade;
}

function converterArquivoParaBase64(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.onload = () => resolve(leitor.result.split(",")[1]);
        leitor.onerror = () => reject(leitor.error);
        leitor.readAsDataURL(arquivo);
    });
}

async function prepararDocumentos(input) {
    const arquivos = Array.from(input.files || []);

    if (arquivos.length === 0) {
        return [];
    }

    return Promise.all(arquivos.map(async (arquivo) => {
        if (!TIPOS_DOCUMENTO_PERMITIDOS.includes(arquivo.type)) {
            throw new Error("Anexe apenas arquivos PDF, PNG, JPG ou JPEG.");
        }

        if (arquivo.size > 5 * 1024 * 1024) {
            throw new Error("Cada arquivo deve ter no máximo 5 MB.");
        }

        return {
            nome: arquivo.name,
            tipo: arquivo.type,
            tamanho: arquivo.size,
            conteudoBase64: await converterArquivoParaBase64(arquivo)
        };
    }));
}

async function coletarAtividades() {
    const atividades = Array.from(document.querySelectorAll(".detalhes-item")).map((item) => ({
        atividade: item.querySelector(".atividade-input").value,
        horas: normalizarHoras(item.querySelector(".horas-input")?.value || ""),
        observacao: item.querySelector(".observacao-input").value
    }));

    return atividades.filter(({ atividade }) => atividade);
}

function coletarColaboradoresAdicionais() {
    return Array.from(document.querySelectorAll(".colaborador-adicional-item")).map((item) => ({
        nome: item.querySelector(".colaborador-adicional-nome").value.trim(),
        matricula: item.querySelector(".colaborador-adicional-matricula").value.trim(),
        horas: normalizarHoras(item.querySelector(".colaborador-adicional-horas").value)
    })).filter(({ nome, matricula, horas }) => nome || matricula || horas);
}

function normalizarHoras(valor) {
    return String(valor || "").trim().replace(",", ".");
}

function aplicarSeparadorDecimalPonto(input) {
    input.value = input.value.replace(",", ".");
}

function alterarEstadoSalvando(estaSalvando, mensagem = "Salvando...") {
    const icone = btnSalvar.querySelector("i");
    const texto = btnSalvar.querySelector("span");

    btnSalvar.disabled = estaSalvando;
    btnSalvar.classList.toggle("salvando", estaSalvando);
    icone.className = estaSalvando ? "bi bi-arrow-repeat" : "bi bi-floppy";
    texto.textContent = estaSalvando ? mensagem : "Salvar Apontamento";
}

function atualizarEtapaSalvamento(mensagem) {
    alterarEstadoSalvando(true, mensagem);
    feedbackGlobal.hidden = false;
    feedbackGlobal.className = "feedback-global aviso salvando";
    feedbackGlobal.textContent = mensagem;
}

function iniciarAnimacaoSalvamento() {
    let etapaAtual = 0;
    clearInterval(salvamentoIntervalo);
    atualizarEtapaSalvamento(ETAPAS_SALVAMENTO[etapaAtual]);

    salvamentoIntervalo = setInterval(() => {
        etapaAtual = Math.min(etapaAtual + 1, ETAPAS_SALVAMENTO.length - 1);
        atualizarEtapaSalvamento(ETAPAS_SALVAMENTO[etapaAtual]);
    }, 1400);
}

function pararAnimacaoSalvamento() {
    clearInterval(salvamentoIntervalo);
    salvamentoIntervalo = null;
}

function alterarEstadoBuscando(estaBuscando) {
    const icone = btnBuscar.querySelector("i");
    const texto = btnBuscar.querySelector("span");

    btnBuscar.disabled = estaBuscando;
    btnBuscar.classList.toggle("salvando", estaBuscando);
    icone.className = estaBuscando ? "bi bi-gear-fill" : "bi bi-search";
    texto.textContent = estaBuscando ? "Buscando..." : "Buscar TFM";
}

function alterarEstadoSugestao(estaEnviando) {
    const icone = btnSugerirAtividade.querySelector("i");
    const texto = btnSugerirAtividade.querySelector("span");

    btnSugerirAtividade.disabled = estaEnviando;
    btnSugerirAtividade.classList.toggle("salvando", estaEnviando);
    icone.className = estaEnviando ? "bi bi-gear-fill" : "bi bi-send";
    texto.textContent = estaEnviando ? "Enviando..." : "Enviar sugestão";
}

function alterarEstadoFeedback(estaEnviando) {
    const icone = btnEnviarFeedback.querySelector("i");
    const texto = btnEnviarFeedback.querySelector("span");

    btnEnviarFeedback.disabled = estaEnviando;
    btnEnviarFeedback.classList.toggle("salvando", estaEnviando);
    icone.className = estaEnviando ? "bi bi-gear-fill" : "bi bi-send";
    texto.textContent = estaEnviando ? "Enviando..." : "Enviar feedback";
}

function mostrarResultadoBusca(conteudo, tipo = "sucesso") {
    resultadoBusca.hidden = false;
    resultadoBuscaBackdrop.hidden = false;
    resultadoBusca.className = `resultado-busca resultado-busca-${tipo}`;
    resultadoBusca.closest(".card-busca").classList.add("tem-resultado-busca");
    document.body.classList.add("resultado-busca-aberto");
    resultadoBusca.innerHTML = "";
    resultadoBusca.appendChild(criarBotaoFecharResultado(limparResultadoBusca));
    resultadoBusca.appendChild(conteudo);
}

function limparResultadoBusca() {
    resultadoBusca.hidden = true;
    resultadoBuscaBackdrop.hidden = true;
    resultadoBusca.closest(".card-busca").classList.remove("tem-resultado-busca");
    document.body.classList.remove("resultado-busca-aberto");
    resultadoBusca.innerHTML = "";
}

function abrirModalTfm(conteudo) {
    modalTfmConteudo.innerHTML = "";
    modalTfmConteudo.appendChild(conteudo);
    modalTfm.hidden = false;
    document.body.classList.add("modal-aberto");
}

function fecharModalTfm() {
    modalTfm.hidden = true;
    modalTfmConteudo.innerHTML = "";
    document.body.classList.remove("modal-aberto");
}

function abrirModalHelp() {
    modalHelp.hidden = false;
    document.body.classList.add("modal-aberto");
}

function fecharModalHelp() {
    modalHelp.hidden = true;
    document.body.classList.remove("modal-aberto");
}

function abrirModalSugestao() {
    modalSugestao.hidden = false;
    document.body.classList.add("modal-aberto");
    sugestaoAtividadeInput.focus();
}

function fecharModalSugestao() {
    modalSugestao.hidden = true;
    document.body.classList.remove("modal-aberto");
}

function abrirModalFeedback() {
    modalFeedback.hidden = false;
    document.body.classList.add("modal-aberto");
    feedbackTextoInput.focus();
}

function fecharModalFeedback() {
    modalFeedback.hidden = true;
    document.body.classList.remove("modal-aberto");
}

function abrirModalAtividade(item = null) {
    atividadeEmEdicao = item;
    modalAtividadeInput.value = item?.querySelector(".atividade-input")?.value || "";
    modalObservacaoInput.value = item?.querySelector(".observacao-input")?.value || "";
    modalHorasInput.value = item?.querySelector(".horas-input")?.value || "";
    document.getElementById("modal-atividade-titulo").textContent = item ? "Editar atividade" : "Adicionar outra atividade";
    btnConfirmarAtividade.querySelector("span").textContent = item ? "Salvar alterações" : "Adicionar atividade";
    modalAtividade.hidden = false;
    document.body.classList.add("modal-aberto");
    modalAtividadeInput.focus();
}

function fecharModalAtividade() {
    modalAtividade.hidden = true;
    atividadeEmEdicao = null;
    modalAtividadeInput.value = "";
    modalObservacaoInput.value = "";
    modalHorasInput.value = "";
    document.getElementById("modal-atividade-titulo").textContent = "Adicionar outra atividade";
    btnConfirmarAtividade.querySelector("span").textContent = "Adicionar atividade";
    marcarCampo(modalAtividadeInput, false);
    fecharSugestoes();
    document.body.classList.remove("modal-aberto");
}

function abrirModalColaborador(item = null) {
    colaboradorEmEdicao = item;
    modalColaboradorNomeInput.value = item?.querySelector(".colaborador-adicional-nome")?.value || "";
    modalColaboradorMatriculaInput.value = item?.querySelector(".colaborador-adicional-matricula")?.value || "";
    modalColaboradorHorasInput.value = item?.querySelector(".colaborador-adicional-horas")?.value || "";
    document.getElementById("modal-colaborador-titulo").textContent = item ? "Editar colaborador" : "Adicionar colaborador";
    btnConfirmarColaborador.querySelector("span").textContent = item ? "Salvar alterações" : "Adicionar colaborador";
    modalColaborador.hidden = false;
    document.body.classList.add("modal-aberto");
    modalColaboradorNomeInput.focus();
}

function fecharModalColaborador() {
    modalColaborador.hidden = true;
    colaboradorEmEdicao = null;
    modalColaboradorNomeInput.value = "";
    modalColaboradorMatriculaInput.value = "";
    modalColaboradorHorasInput.value = "";
    document.getElementById("modal-colaborador-titulo").textContent = "Adicionar colaborador";
    btnConfirmarColaborador.querySelector("span").textContent = "Adicionar colaborador";
    marcarCampo(modalColaboradorNomeInput, false);
    marcarCampo(modalColaboradorHorasInput, false);
    fecharSugestoes();
    document.body.classList.remove("modal-aberto");
}

function abrirModalRevisao(dados) {
    apontamentoPendente = dados;
    revisaoConteudo.innerHTML = "";
    revisaoConteudo.appendChild(criarComprovanteApontamento(dados));
    modalRevisao.hidden = false;
    document.body.classList.add("modal-aberto");
}

function fecharModalRevisao() {
    modalRevisao.hidden = true;
    apontamentoPendente = null;
    revisaoConteudo.innerHTML = "";
    document.body.classList.remove("modal-aberto");
}

function adicionarAtividadeDoModal() {
    const atividade = modalAtividadeInput.value.trim();

    marcarCampo(modalAtividadeInput, !atividade);

    if (!atividade) {
        mostrarFeedback("Informe a atividade antes de adicionar.", "erro");
        return;
    }

    const item = atividadeEmEdicao || criarDetalhesItem(document.querySelectorAll(".detalhes-item").length + 1);

    item.querySelector(".atividade-input").value = atividade;
    item.querySelector(".observacao-input").value = modalObservacaoInput.value.trim();
    item.querySelector(".horas-input").value = normalizarHoras(modalHorasInput.value);

    if (!atividadeEmEdicao) {
        detalhesContainer.appendChild(item);
    }

    atualizarResumoAtividadeItem(item);
    fecharModalAtividade();
    limparFeedback();
    atualizarResumo();
}

function adicionarColaboradorDoModal() {
    const nome = modalColaboradorNomeInput.value.trim();
    const matricula = modalColaboradorMatriculaInput.value.trim();
    const horas = normalizarHoras(modalColaboradorHorasInput.value);
    const horasNumero = Number(horas);

    marcarCampo(modalColaboradorNomeInput, !nome, "Informe o nome do colaborador.");
    marcarCampo(modalColaboradorHorasInput, !horasNumero || horasNumero <= 0, "Informe as horas desse colaborador.");

    if (!nome || !horasNumero || horasNumero <= 0) {
        mostrarFeedback("Informe nome e horas do colaborador antes de adicionar.", "erro");
        return;
    }

    const item = colaboradorEmEdicao || criarColaboradorAdicionalItem();
    item.querySelector(".colaborador-adicional-nome").value = nome;
    item.querySelector(".colaborador-adicional-matricula").value = matricula;
    item.querySelector(".colaborador-adicional-horas").value = horas;

    if (!colaboradorEmEdicao) {
        colaboradoresAdicionaisLista.appendChild(item);
    }

    atualizarResumoColaboradorAdicional(item);
    atualizarNumeracaoColaboradoresAdicionais();
    fecharModalColaborador();
    limparFeedback();
}

function formatarValor(valor) {
    return valor || "-";
}

function formatarData(valor) {
    if (!valor) {
        return "-";
    }

    const data = new Date(valor);

    if (Number.isNaN(data.getTime())) {
        return valor;
    }

    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

function normalizarDataInput(valor) {
    if (!valor) {
        return "";
    }

    const texto = String(valor).trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
        return texto;
    }

    const dataBrasil = texto.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

    if (dataBrasil) {
        const [, dia, mes, ano] = dataBrasil;
        return `${ano}-${mes}-${dia}`;
    }

    const data = new Date(texto);

    if (Number.isNaN(data.getTime())) {
        return "";
    }

    return data.toISOString().slice(0, 10);
}

function criarComprovanteApontamento(dados) {
    const comprovante = document.createElement("div");
    comprovante.className = "comprovante-apontamento";
    const colaboradoresAdicionais = Array.isArray(dados.colaboradoresAdicionais) ? dados.colaboradoresAdicionais : [];
    comprovante.innerHTML = `
        <div class="comprovante-cabecalho">
            <div>
                <span>Comprovante de apontamento</span>
                <strong>TFM ${formatarValor(dados.tfm)}</strong>
            </div>
        </div>

        <div class="resultado-info-grid">
            <div class="resultado-info-item"><span>Período</span><strong>${formatarData(dados.dataInicioTfm)} a ${formatarData(dados.dataFimTfm)}</strong></div>
            <div class="resultado-info-item"><span>Nome</span><strong>${formatarValor(dados.nome)}</strong></div>
            <div class="resultado-info-item"><span>Matrícula</span><strong>${formatarValor(dados.matricula)}</strong></div>
            <div class="resultado-info-item"><span>Turno</span><strong>${formatarValor(dados.turno)}</strong></div>
            <div class="resultado-info-item"><span>Projeto</span><strong>${formatarValor(dados.projeto)}</strong></div>
            <div class="resultado-info-item"><span>Documento</span><strong>${dados.documentos?.length ? dados.documentos.map((documento) => documento.nome).join(", ") : "Sem documento anexado"}</strong></div>
        </div>

        <div class="resultado-atividades">
            <strong>Atividades para salvar</strong>
            ${dados.atividades.map((atividade) => `
                <div class="resultado-atividade-item">
                    <div><span>Atividade</span><strong>${formatarValor(atividade.atividade)}</strong></div>
                    <div><span>Horas</span><strong>${formatarValor(atividade.horas)}</strong></div>
                    <div><span>Observação</span><strong>${formatarValor(atividade.observacao)}</strong></div>
                </div>
            `).join("")}
        </div>

        ${colaboradoresAdicionais.length ? `
            <div class="resultado-atividades">
                <strong>Colaboradores adicionais</strong>
                ${colaboradoresAdicionais.map((colaborador) => `
                    <div class="resultado-atividade-item">
                        <div><span>Nome</span><strong>${formatarValor(colaborador.nome)}</strong></div>
                        <div><span>Matrícula</span><strong>${formatarValor(colaborador.matricula)}</strong></div>
                        <div><span>Horas</span><strong>${formatarValor(colaborador.horas)}</strong></div>
                    </div>
                `).join("")}
            </div>
        ` : ""}
    `;

    return comprovante;
}

function imprimirComprovante() {
    if (!apontamentoPendente) {
        return;
    }

    const janela = window.open("", "_blank", "width=900,height=700");

    if (!janela) {
        mostrarFeedback("Permita pop-ups para imprimir o comprovante.", "aviso");
        return;
    }

    janela.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Comprovante TFM ${apontamentoPendente.tfm}</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body class="pagina-impressao">
            ${criarComprovanteApontamento(apontamentoPendente).outerHTML}
            <script>window.onload = () => window.print();<\/script>
        </body>
        </html>
    `);
    janela.document.close();
}

function criarLinhaResumo(rotulo, valor) {
    const item = document.createElement("div");
    item.className = "resultado-info-item";
    item.innerHTML = `<span>${rotulo}</span><strong>${formatarValor(valor)}</strong>`;
    return item;
}

function separarLinksDocumento(valor) {
    return String(valor || "")
        .split(" | ")
        .map((link) => link.trim())
        .filter(Boolean);
}

function extrairTfms(valor) {
    const tfms = [...String(valor || "").matchAll(/(?:^|\D)(\d{6})(?=\D|$)/g)].map((resultado) => resultado[1]);
    return [...new Set(tfms)];
}

async function consultarTfm(tfm) {
    const resposta = await fetch(`${SCRIPT_URL}?acao=buscarTfm&tfm=${encodeURIComponent(tfm)}`);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o Apps Script.");
    }

    return resposta.json();
}

async function consultarTfmsIndividualmente(tfms) {
    const resultados = await Promise.all(tfms.map(async (tfm) => ({
        tfm,
        dados: await consultarTfm(tfm)
    })));

    resultados.forEach(({ tfm, dados }) => {
        cacheConsultaTfms.set(tfm, {
            tfm,
            dados,
            encontrado: Boolean(dados?.encontrado)
        });
    });
}

async function consultarListaTfms(tfms) {
    const resultadosEmCache = tfms
        .filter((tfm) => cacheConsultaTfms.has(tfm))
        .map((tfm) => cacheConsultaTfms.get(tfm));
    const tfmsPendentes = tfms.filter((tfm) => !cacheConsultaTfms.has(tfm));

    if (!tfmsPendentes.length) {
        return resultadosEmCache;
    }

    if (!buscaEmLoteDisponivel) {
        await consultarTfmsIndividualmente(tfmsPendentes);
        return tfms.map((tfm) => cacheConsultaTfms.get(tfm));
    }

    const resposta = await fetch(`${SCRIPT_URL}?acao=buscarTfms&tfms=${encodeURIComponent(tfmsPendentes.join(","))}`);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o Apps Script.");
    }

    const dados = await resposta.json();

    if (!dados.sucesso) {
        const acaoEmLoteIndisponivel = normalizarTexto(dados.erro || "").includes("acao invalida");

        if (!acaoEmLoteIndisponivel) {
            throw new Error(dados.erro || "Erro ao consultar os TFMs.");
        }

        buscaEmLoteDisponivel = false;
        await consultarTfmsIndividualmente(tfmsPendentes);
        return tfms.map((tfm) => cacheConsultaTfms.get(tfm));
    }

    tfmsPendentes.forEach((tfm) => {
        const resultado = Array.isArray(dados.resultados)
            ? dados.resultados.find((item) => item.tfm === tfm)
            : null;

        cacheConsultaTfms.set(tfm, {
            tfm,
            dados: resultado || { sucesso: true, encontrado: false, tfm },
            encontrado: Boolean(resultado?.encontrado)
        });
    });

    return tfms.map((tfm) => cacheConsultaTfms.get(tfm));
}

function criarResumoConsultaTfms(resultados) {
    const conteudo = document.createElement("div");
    const encontrados = resultados.filter((resultado) => resultado.encontrado).length;
    const naoEncontrados = resultados.length - encontrados;

    conteudo.className = "consulta-tfm-lista";
    conteudo.innerHTML = `
        <div class="consulta-tfm-resumo">
            <strong>${resultados.length} TFM(s) verificado(s)</strong>
            <span>${encontrados} encontrado(s) e ${naoEncontrados} fora da planilha</span>
        </div>
    `;

    resultados.forEach((resultado) => {
        const item = document.createElement("div");
        item.className = `consulta-tfm-item ${resultado.encontrado ? "consulta-tfm-encontrado" : "consulta-tfm-nao-encontrado"}`;

        const info = document.createElement("div");
        info.innerHTML = `
            <strong>TFM ${resultado.tfm}</strong>
            <span>${resultado.encontrado ? "Encontrado na planilha" : "Não está na planilha"}</span>
        `;
        item.appendChild(info);

        if (resultado.encontrado) {
            const botao = document.createElement("button");
            botao.type = "button";
            botao.className = "btn-ver-tfm";
            botao.innerHTML = `<i class="bi bi-eye"></i> Ver detalhes`;
            botao.addEventListener("click", () => abrirModalTfm(criarResultadoTfm(resultado.dados)));
            item.appendChild(botao);
        }

        conteudo.appendChild(item);
    });

    return conteudo;
}

function criarResultadoTfm(dados) {
    const conteudo = document.createElement("div");
    conteudo.className = "resultado-tfm";
    const registros = Array.isArray(dados.registros) ? dados.registros : [];
    const linksDocumento = separarLinksDocumento(dados.urlDocumento);

    const cabecalho = document.createElement("div");
    cabecalho.className = "resultado-tfm-cabecalho";
    cabecalho.innerHTML = `
        <div>
            <strong>TFM ${dados.tfm}</strong>
            <span>${formatarValor(dados.nome)}</span>
        </div>
    `;

    if (linksDocumento.length) {
        const linksContainer = document.createElement("div");
        linksContainer.className = "resultado-documentos-links";

        linksDocumento.forEach((url, index) => {
            const link = document.createElement("a");
            link.className = "btn-abrir-pdf";
            link.href = url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.innerHTML = `<i class="bi bi-box-arrow-up-right"></i> ${linksDocumento.length > 1 ? `Documento ${index + 1}` : "Abrir documento"}`;
            linksContainer.appendChild(link);
        });

        cabecalho.appendChild(linksContainer);
    }

    if (usuarioAtual) {
        const botaoEditar = document.createElement("button");
        botaoEditar.type = "button";
        botaoEditar.className = "btn-carregar-tfm";
        botaoEditar.innerHTML = `<i class="bi bi-pencil-square"></i> Editar no formulário`;
        botaoEditar.addEventListener("click", () => carregarTfmNoFormulario(dados));
        cabecalho.appendChild(botaoEditar);
    }

    const resumo = document.createElement("div");
    resumo.className = "resultado-info-grid";
    resumo.appendChild(criarLinhaResumo("Data", formatarData(dados.data)));
    resumo.appendChild(criarLinhaResumo("Matrícula", dados.matricula));
    resumo.appendChild(criarLinhaResumo("Turno", dados.turno));
    resumo.appendChild(criarLinhaResumo("Projeto", dados.projeto));
    resumo.appendChild(criarLinhaResumo("Documento", dados.nomeDocumento || "Sem documento anexado"));

    const colaboradoresAdicionais = Array.isArray(dados.colaboradoresAdicionais) ? dados.colaboradoresAdicionais : [];

    const atividades = document.createElement("div");
    atividades.className = "resultado-atividades";

    const tituloAtividades = document.createElement("strong");
    tituloAtividades.textContent = "Atividades registradas";
    atividades.appendChild(tituloAtividades);

    registros.forEach((registro) => {
        const atividade = document.createElement("div");
        atividade.className = "resultado-atividade-item";
        atividade.innerHTML = `
            <div>
                <span>Atividade</span>
                <strong>${formatarValor(registro.atividade)}</strong>
            </div>
            <div>
                <span>Observação</span>
                <strong>${formatarValor(registro.observacao)}</strong>
            </div>
        `;
        atividades.appendChild(atividade);
    });

    conteudo.appendChild(cabecalho);
    conteudo.appendChild(resumo);

    if (colaboradoresAdicionais.length) {
        const colaboradores = document.createElement("div");
        colaboradores.className = "resultado-atividades";
        colaboradores.innerHTML = `<strong>Colaboradores adicionais</strong>${colaboradoresAdicionais.map((colaborador) => `
            <div class="resultado-atividade-item">
                <div><span>Nome</span><strong>${formatarValor(colaborador.nome)}</strong></div>
                <div><span>Matrícula</span><strong>${formatarValor(colaborador.matricula)}</strong></div>
                <div><span>Horas</span><strong>${formatarValor(colaborador.horas)}</strong></div>
            </div>
        `).join("")}`;
        conteudo.appendChild(colaboradores);
    }

    conteudo.appendChild(atividades);

    return conteudo;
}

async function buscarDocumentoTfm() {
    const tfms = extrairTfms(buscaTfmInput.value);

    if (!tfms.length) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Digite ou cole pelo menos um TFM com 6 números para pesquisar.";
        mostrarResultadoBusca(mensagem, "erro");
        return;
    }

    try {
        alterarEstadoBuscando(true);
        const resultados = await consultarListaTfms(tfms);

        if (!resultados[0].encontrado) {
            mostrarResultadoBusca(criarResumoConsultaTfms(resultados), "aviso");
            return;
        }

        mostrarResultadoBusca(criarResumoConsultaTfms(resultados), resultados.some((resultado) => !resultado.encontrado) ? "aviso" : "sucesso");
    } catch (erro) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Erro ao buscar o TFM. Verifique se o Apps Script foi publicado corretamente.";
        mostrarResultadoBusca(mensagem, "erro");
        console.error(erro);
    } finally {
        alterarEstadoBuscando(false);
    }
}

async function enviarSugestaoAtividade() {
    const atividade = sugestaoAtividadeInput.value.trim();
    const observacao = sugestaoObservacaoInput.value.trim();
    const nomeColaborador = (usuarioAtual?.nome || document.getElementById("nome").value).trim();
    const matriculaColaborador = (usuarioAtual?.matricula || matriculaInput.value).trim();

    if (atividade.length < 3) {
        mostrarFeedback("Digite uma atividade sugerida antes de enviar.", "erro");
        sugestaoAtividadeInput.focus();
        return;
    }

    try {
        alterarEstadoSugestao(true);

        const dados = {
            acao: "sugerirAtividade",
            atividade,
            observacao,
            sugestaoAtividade: atividade,
            observacaoAtividade: observacao,
            nomeColaborador,
            matriculaColaborador,
            dataSugestao: new Date().toISOString(),
            nome: nomeColaborador,
            matricula: matriculaColaborador
        };

        const resposta = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar a sugestão para o Apps Script.");
        }

        const resultado = await resposta.json();

        if (!resultado.sucesso) {
            throw new Error(resultado.erro || "Erro ao salvar sugestão.");
        }

        mostrarFeedback("Sugestão de atividade enviada com sucesso!", "sucesso");
        sugestaoAtividadeInput.value = "";
        sugestaoObservacaoInput.value = "";
        fecharModalSugestao();
    } catch (erro) {
        mostrarFeedback(erro.message || "Erro ao enviar sugestão!", "erro");
        console.error(erro);
    } finally {
        alterarEstadoSugestao(false);
    }
}

async function enviarFeedbackColaborador() {
    const tipoFeedback = feedbackTipoInput.value;
    const feedback = feedbackTextoInput.value.trim();
    const observacao = feedbackObservacaoInput.value.trim();
    const nomeColaborador = (usuarioAtual?.nome || document.getElementById("nome").value).trim();
    const matriculaColaborador = (usuarioAtual?.matricula || matriculaInput.value).trim();

    if (feedback.length < 3) {
        mostrarFeedback("Digite sua sugestão, ideia ou reclamação antes de enviar.", "erro");
        feedbackTextoInput.focus();
        return;
    }

    try {
        alterarEstadoFeedback(true);

        const resposta = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                acao: "enviarFeedback",
                feedback,
                observacao,
                tipoFeedback,
                nomeColaborador,
                matriculaColaborador,
                nome: nomeColaborador,
                matricula: matriculaColaborador,
                dataFeedback: new Date().toISOString()
            })
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar o feedback para o Apps Script.");
        }

        const resultado = await resposta.json();

        if (!resultado.sucesso) {
            throw new Error(resultado.erro || "Erro ao salvar feedback.");
        }

        mostrarFeedback("Feedback enviado com sucesso!", "sucesso");
        feedbackTipoInput.value = "Sugestão";
        feedbackTextoInput.value = "";
        feedbackObservacaoInput.value = "";
        fecharModalFeedback();
    } catch (erro) {
        mostrarFeedback(erro.message || "Erro ao enviar feedback!", "erro");
        console.error(erro);
    } finally {
        alterarEstadoFeedback(false);
    }
}

async function registrarCadastroPendente(colaborador) {
    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                acao: "registrarCadastroPendente",
                nome: colaborador.nome,
                matricula: colaborador.matricula
            })
        });
    } catch (erro) {
        console.error(erro);
    }
}

function carregarTfmNoFormulario(dados) {
    const dataInicio = normalizarDataInput(dados.dataInicioTfm || dados.data);
    const dataFim = normalizarDataInput(dados.dataFimTfm || dados.dataInicioTfm || dados.data);

    document.getElementById("data-inicio-tfm").value = dataInicio;
    document.getElementById("data-fim-tfm").value = dataFim;
    document.getElementById("nome").value = dados.nome || "";
    document.getElementById("matricula").value = dados.matricula || "";
    document.getElementById("turno").value = dados.turno || "";
    document.getElementById("tfm").value = dados.tfm || "";
    document.getElementById("projeto").value = dados.projeto || "";
    renderizarColaboradoresAdicionais(Array.isArray(dados.colaboradoresAdicionais) ? dados.colaboradoresAdicionais : []);

    const registros = Array.isArray(dados.registros) ? dados.registros : [];
    document.querySelectorAll(".detalhes-item").forEach((item, index) => {
        if (index > 0) {
            item.remove();
        }
    });

    const primeiroItem = document.querySelector(".detalhes-item");
    const itens = registros.length ? registros : [{ atividade: "", observacao: "" }];
    itens.forEach((registro, index) => {
        const item = index === 0 ? primeiroItem : criarDetalhesItem(index + 1);
        item.querySelector(".atividade-input").value = registro.atividade || "";
        item.querySelector(".horas-input").value = registro.horas || "";
        item.querySelector(".observacao-input").value = registro.observacao || "";
        atualizarResumoAtividadeItem(item);

        if (index > 0) {
            detalhesContainer.appendChild(item);
        }
    });

    renumerarAtividades();
    fecharModalTfm();
    mostrarFeedback("Dados carregados no formulário. Confira antes de salvar novamente.", "aviso");
}

function validarFormulario() {
    const tfmInput = document.getElementById("tfm");
    const dataInicioInput = document.getElementById("data-inicio-tfm");
    const dataFimInput = document.getElementById("data-fim-tfm");
    let valido = form.checkValidity();

    marcarCampo(tfmInput, !/^[0-9]{6}$/.test(tfmInput.value.trim()), "O TFM precisa ter exatamente 6 números.");
    marcarCampo(dataInicioInput, !dataInicioInput.value, "Informe a data inicial do TFM.");
    marcarCampo(dataFimInput, !dataFimInput.value || dataFimInput.value < dataInicioInput.value, "Informe uma data final igual ou posterior ao início.");

    for (const item of document.querySelectorAll(".colaborador-adicional-item")) {
        const nomeInput = item.querySelector(".colaborador-adicional-nome");
        const horasInput = item.querySelector(".colaborador-adicional-horas");
        const nome = nomeInput.value.trim();
        const horas = Number(normalizarHoras(horasInput.value));

        marcarCampo(nomeInput, !nome, "Informe o nome do colaborador.");
        marcarCampo(horasInput, !horas || horas <= 0, "Informe as horas desse colaborador.");

        if (!nome || !horas || horas <= 0) {
            mostrarFeedback("Preencha nome e horas dos colaboradores adicionais ou remova a linha.", "erro");
            (!nome ? nomeInput : horasInput).focus();
            return false;
        }
    }

    if (!/^[0-9]{6}$/.test(tfmInput.value.trim())) {
        valido = false;
        mostrarFeedback("Informe um número de TFM com exatamente 6 números.", "erro");
        tfmInput.focus();
        return false;
    }

    if (!dataInicioInput.value || !dataFimInput.value || dataFimInput.value < dataInicioInput.value) {
        valido = false;
        mostrarFeedback("Informe um período válido para o TFM.", "erro");
        (dataFimInput.value < dataInicioInput.value ? dataFimInput : dataInicioInput).focus();
        return false;
    }

    if (!valido) {
        const primeiroInvalido = form.querySelector(":invalid") || document.querySelector(".campo-invalido input");
        mostrarFeedback("Revise os campos obrigatórios antes de salvar.", "erro");
        if (primeiroInvalido) {
            primeiroInvalido.focus();
        }
        form.reportValidity();
    }

    return valido;
}

async function prepararDadosApontamento() {
    const dataInicioTfm = document.getElementById("data-inicio-tfm").value;
    const dataFimTfm = document.getElementById("data-fim-tfm").value;
    const atividades = await coletarAtividades();
    const colaboradoresAdicionais = coletarColaboradoresAdicionais();
    const atividadesDistribuidas = atividades.map((atividade) => ({
        ...atividade,
        distribuicaoDiaria: distribuirHorasNoPeriodo(atividade.horas, dataInicioTfm, dataFimTfm)
    }));

    return {
        data: dataFimTfm,
        dataInicioTfm,
        dataFimTfm,
        nome: document.getElementById("nome").value,
        matricula: document.getElementById("matricula").value,
        cadastroPendente: Boolean(usuarioAtual?.cadastroPendente),
        observacaoCadastro: usuarioAtual?.cadastroPendente ? "Colaborador entrou pelo botão Não encontrei meu nome." : "",
        turno: document.getElementById("turno").value,
        tfm: document.getElementById("tfm").value,
        projeto: document.getElementById("projeto").value,
        colaboradoresAdicionais,
        documentos: await prepararDocumentos(document.getElementById("documento-1")),
        atividades: atividadesDistribuidas,
        distribuicaoDiaria: atividadesDistribuidas.flatMap((atividade) => (
            atividade.distribuicaoDiaria.map((dia) => ({
                data: dia.data,
                horas: dia.horas,
                atividade: atividade.atividade,
                observacao: atividade.observacao
            }))
        ))
    };
}

async function salvarApontamentoConfirmado() {
    if (!apontamentoPendente || btnSalvar.disabled) {
        return;
    }

    const dados = apontamentoPendente;

    try {
        iniciarAnimacaoSalvamento();
        btnConfirmarSalvamento.disabled = true;

        atualizarEtapaSalvamento("Coletando dados para envio...");
        const resposta = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar os dados para o Apps Script.");
        }

        atualizarEtapaSalvamento("Salvando na planilha...");
        const resultado = await resposta.json();

        if (!resultado.sucesso) {
            throw new Error(resultado.erro || "Erro ao salvar apontamento.");
        }

        cacheConsultaTfms.delete(dados.tfm);
        atualizarEtapaSalvamento("Atualizando resumo...");
        salvarHistorico(dados.atividades.map((atividade) => ({
            data: `${formatarData(dados.dataInicioTfm)} a ${formatarData(dados.dataFimTfm)}`,
            nome: dados.nome,
            matricula: dados.matricula,
            tfm: dados.tfm,
            atividade: atividade.atividade,
            observacao: atividade.observacao,
            horas: Number(atividade.horas || 0).toLocaleString("pt-BR", { maximumFractionDigits: 1 }),
            salvoEm: new Date().toISOString()
        })));

        resumoPlanilhaCarregado = false;
        await carregarResumoPlanilha();

        pararAnimacaoSalvamento();
        fecharModalRevisao();
        mostrarFeedback("Dados enviados com sucesso!", "sucesso");
        form.reset();
        configurarDataAtual();
        if (usuarioAtual) {
            document.getElementById("nome").value = usuarioAtual.nome;
            matriculaInput.value = usuarioAtual.matricula;
        }
        document.querySelectorAll(".arquivo-nome").forEach((nomeArquivo) => {
            nomeArquivo.textContent = "Nenhum arquivo selecionado";
        });

        document.querySelectorAll(".atividade-item").forEach((item, index) => {
            if (index > 0) {
                item.remove();
            }
        });

        document.querySelectorAll(".detalhes-item").forEach((item, index) => {
            if (index > 0) {
                item.remove();
            }
        });
        limparColaboradoresAdicionais();
        await carregarHistoricoPlanilha();
    } catch (erro) {
        pararAnimacaoSalvamento();
        mostrarFeedback(erro.message || "Erro ao salvar!", "erro");
        console.error(erro);
    } finally {
        pararAnimacaoSalvamento();
        alterarEstadoSalvando(false);
        btnConfirmarSalvamento.disabled = false;
        atualizarResumo();
    }
}

document.querySelectorAll(".atividade-input").forEach((input) => configurarAutocomplete(input, atividadesDisponiveis));
configurarAutocomplete(modalAtividadeInput, atividadesDisponiveis);
configurarAutocomplete(modalColaboradorNomeInput, colaboradoresDisponiveis, atualizarMatriculaModalColaborador, atualizarMatriculaModalColaborador);
document.querySelectorAll(".colaborador-input").forEach((input) => configurarAutocomplete(input, colaboradoresDisponiveis, atualizarMatriculaPorNome, atualizarMatriculaPorNome));
configurarAutocomplete(loginNomeInput, colaboradoresDisponiveis, atualizarMatriculaLoginPorNome, atualizarMatriculaLoginPorNome);
document.querySelectorAll(".documento-input").forEach(configurarDocumento);

document.addEventListener("mousedown", (event) => {
    if (!event.target.closest(".autocomplete-wrapper")) {
        fecharSugestoes();
    }
}, true);

btnAdd.addEventListener("click", () => {
    abrirModalAtividade();
});

detalhesContainer.addEventListener("click", (event) => {
    const botaoRemover = event.target.closest(".btn-remover-atividade");
    const botaoEditar = event.target.closest(".btn-editar-atividade");

    if (botaoEditar) {
        abrirModalAtividade(botaoEditar.closest(".detalhes-item"));
        return;
    }

    if (!botaoRemover) {
        return;
    }

    botaoRemover.closest(".detalhes-item").remove();
    renumerarAtividades();
});

btnBuscar.addEventListener("click", buscarDocumentoTfm);
resultadoBuscaBackdrop.addEventListener("click", limparResultadoBusca);
btnAbrirSugestao.addEventListener("click", abrirModalSugestao);
btnAbrirFeedback.addEventListener("click", abrirModalFeedback);
btnSugerirAtividade.addEventListener("click", enviarSugestaoAtividade);
btnEnviarFeedback.addEventListener("click", enviarFeedbackColaborador);
btnConfirmarAtividade.addEventListener("click", adicionarAtividadeDoModal);
btnConfirmarColaborador.addEventListener("click", adicionarColaboradorDoModal);
btnAddColaborador.addEventListener("click", () => abrirModalColaborador());
colaboradoresAdicionaisLista.addEventListener("click", (event) => {
    const botaoRemover = event.target.closest(".btn-remover-colaborador");
    const botaoEditar = event.target.closest(".btn-editar-colaborador");

    if (botaoEditar) {
        abrirModalColaborador(botaoEditar.closest(".colaborador-adicional-item"));
        return;
    }

    if (botaoRemover) {
        botaoRemover.closest(".colaborador-adicional-item").remove();
        atualizarNumeracaoColaboradoresAdicionais();
    }
});
buscaTfmInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        buscarDocumentoTfm();
    }
});

sugestaoAtividadeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        enviarSugestaoAtividade();
    }
});

feedbackTextoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        enviarFeedbackColaborador();
    }
});

modalAtividade.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAtividadeDoModal();
    }
});

modalColaborador.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarColaboradorDoModal();
    }
});

document.querySelectorAll("[data-fechar-modal]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalTfm);
});

document.querySelectorAll("[data-fechar-help]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalHelp);
});

document.querySelectorAll("[data-fechar-sugestao]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalSugestao);
});

document.querySelectorAll("[data-fechar-feedback]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalFeedback);
});

document.querySelectorAll("[data-fechar-atividade]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalAtividade);
});

document.querySelectorAll("[data-fechar-colaborador]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalColaborador);
});

document.querySelectorAll("[data-fechar-revisao]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalRevisao);
});

botoesHelp.forEach((botao) => botao.addEventListener("click", abrirModalHelp));
btnConfirmarSalvamento.addEventListener("click", salvarApontamentoConfirmado);
btnImprimirRevisao.addEventListener("click", imprimirComprovante);
btnEntrarLogin.addEventListener("click", entrarLogin);
btnLoginAlternativo.addEventListener("click", alternarLoginPendente);
btnEntrarPendente.addEventListener("click", entrarLoginPendente);
btnSairLogin.addEventListener("click", sairLogin);
abaAcesso.addEventListener("click", () => alternarAbaLogin("acesso"));
abaConsultar.addEventListener("click", () => alternarAbaLogin("consultar"));
btnBuscarLogin.addEventListener("click", buscarTfmLogin);
loginBuscaTfmInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        buscarTfmLogin();
    }
});

document.addEventListener("input", (event) => {
    if (event.target.matches(".horas-input, #modal-horas-input, #modal-colaborador-horas, .colaborador-adicional-horas")) {
        aplicarSeparadorDecimalPonto(event.target);
    }

    if (event.target.matches("#modal-colaborador-matricula, .colaborador-adicional-matricula")) {
        limitarParaNumeros(event.target, 6);
    }

    if (event.target.matches("#modal-colaborador-nome, #modal-colaborador-horas, .colaborador-adicional-nome, .colaborador-adicional-horas")) {
        marcarCampo(event.target, false);
    }

    if (event.target.matches("#tfm")) {
        marcarCampo(event.target, false);
        atualizarResumo();
    }

    if (event.target.matches("#tfm")) {
        limitarParaNumeros(event.target, 6);
    }

    if (event.target.matches("#login-matricula")) {
        limitarParaNumeros(event.target, 6);
        const colaborador = buscarColaboradorPorMatricula(event.target.value);

        if (colaborador && !loginNomeInput.value.trim()) {
            loginNomeInput.value = colaborador.nome;
        }
    }

    if (event.target.matches("#novo-login-matricula")) {
        limitarParaNumeros(event.target, 6);
    }

    if (event.target.matches("#projeto")) {
        event.target.value = event.target.value.toUpperCase();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !resultadoBusca.hidden) {
        limparResultadoBusca();
    }

    if (event.key === "Escape" && !modalTfm.hidden) {
        fecharModalTfm();
    }

    if (event.key === "Escape" && !modalHelp.hidden) {
        fecharModalHelp();
    }

    if (event.key === "Escape" && !modalSugestao.hidden) {
        fecharModalSugestao();
    }

    if (event.key === "Escape" && !modalFeedback.hidden) {
        fecharModalFeedback();
    }

    if (event.key === "Escape" && !modalAtividade.hidden) {
        fecharModalAtividade();
    }

    if (event.key === "Escape" && !modalColaborador.hidden) {
        fecharModalColaborador();
    }

    if (event.key === "Escape" && !modalRevisao.hidden) {
        fecharModalRevisao();
    }
});

[loginNomeInput, loginMatriculaInput].forEach((input) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            entrarLogin();
        }
    });

    input.addEventListener("input", () => {
        marcarCampo(input, false);
        limparFeedbackLogin();
    });
});

[novoLoginNomeInput, novoLoginMatriculaInput].forEach((input) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            entrarLoginPendente();
        }
    });

    input.addEventListener("input", () => {
        marcarCampo(input, false);
        limparFeedbackLogin();
    });
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    limparFeedback();

    if (btnSalvar.disabled) {
        return;
    }

    if (!validarFormulario()) {
        return;
    }

    try {
        abrirModalRevisao(await prepararDadosApontamento());
    } catch (erro) {
        mostrarFeedback(erro.message || "Erro ao preparar revisão do apontamento.", "erro");
        console.error(erro);
    }
});

configurarDataAtual();
renderizarHistorico();
carregarResumoPlanilha();
carregarHistoricoPlanilha();
exigirLogin();
