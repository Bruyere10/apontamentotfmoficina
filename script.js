const atividadesDisponiveisLegado = [
    "Troca de motor N4/ N3 em veículo",
    "Troca de motor Diesel 2.2 KP1",
    "Troca de motor Diesel 2.2 Comander / Toro / RampageAC",
    "Troca de motor T3 / T4 em cela",
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
    "Preparação de carrinho para rodagem em cela. (Novo)",
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
    "Troca de motor T3 / T4 em veículo",
    "Alinhamento de motor em cela",
    "TFM Cancelada",
    "Troca de motor Diesel em Cela",
    "Preparação e Alinhamento de Motor Diesel 2.2 em Cela",
    "Troca de componentes no veiculo",
    "Instrumentação de coletor de admissão",
    "Troca de catalisador no motor na cela",
    "Preparação de motor para rodagem em cela",
    "Montagem de motor CCP controle parcial",
    "Preparação de motor revista para devolução a manufatura, realização de check list",
    "Armazenamento dos componentes de motor em kit",
    "Substituição do suporte do A/C",
    "Atividade troca de bateria H.V veículo J3U HEV",
    "Troca coletor de admissão",
    "Substituir motor T3",
    "Diagnose em veículo",
    "Exposição dos componentes de motores na bancada da sala benchmarking ou no carrinho teardown.",
    "Desmontagem parcial do motor com controle de torques.",
    "Preparação de motor para Lea Motors China",
    "Desmontagem de motor e preparação de componentes para controle dimensional realizado pela metrologia.",
    "Descarte de peças.",
    "Troca Óleo Motor.",
    "Teste de funcionamento dos injetores vazão e pressão",
    "Retirada de bateria H.V",
    "Trocar motor de partida DIESEL e 4x4",
    "Troca chicote almoxarifado",
    "Diagnose em motor na cela",
    "Substituir tanque de combustível, tubos e coletor de admissão",
    "Diagnose em motor na banca da oficina",
    "Reparação do motor no CCP",
    "Troca de sensores indicom na cela  na PUC",
    "Instrumentação em veículos Elétricos e Híbridos"
].sort((primeira, segunda) => primeira.localeCompare(segunda, "pt-BR"));
const atividadesDisponiveis = Array.isArray(window.ATIVIDADES_DISPONIVEIS)
    ? window.ATIVIDADES_DISPONIVEIS
    : atividadesDisponiveisLegado;

const btnAdd = document.querySelector(".btn-add");
const btnSalvar = document.querySelector(".btn-salvar");
const btnBuscar = document.querySelector(".btn-buscar");
const btnAbrirSugestao = document.querySelector(".btn-abrir-sugestao");
const btnAbrirFeedback = document.querySelector(".btn-abrir-feedback");
const btnSugerirAtividade = document.querySelector(".btn-sugerir-atividade");
const btnEnviarFeedback = document.querySelector(".btn-enviar-feedback");
const form = document.getElementById("form-registro");
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
const modalDocumentos = document.getElementById("modal-documentos");
const modalDocumentosConteudo = document.getElementById("modal-documentos-conteudo");
const modalLimiteHoras = document.getElementById("modal-limite-horas");
const btnContinuarLimiteHoras = document.getElementById("btn-continuar-limite-horas");
const btnCancelarLimiteHoras = modalLimiteHoras.querySelector(".modal-limite-horas-cancelar");
const tituloLimiteHoras = document.getElementById("modal-limite-horas-titulo");
const textoLimiteHoras = document.getElementById("modal-limite-horas-texto");
const modalAlertasDisponibilidade = document.getElementById("modal-alertas-disponibilidade");
const textoAlertasDisponibilidade = document.getElementById("modal-alertas-disponibilidade-texto");
const btnFecharAlertasDisponibilidade = document.getElementById("btn-fechar-alertas-disponibilidade");
const notificacoesDisponibilidade = document.getElementById("notificacoes-disponibilidade");
const btnNotificacoesDisponibilidade = document.getElementById("btn-notificacoes-disponibilidade");
const contadorNotificacoesDisponibilidade = document.getElementById("notificacoes-disponibilidade-contador");
const painelNotificacoesDisponibilidade = document.getElementById("painel-notificacoes-disponibilidade");
const listaNotificacoesDisponibilidade = document.getElementById("notificacoes-disponibilidade-lista");
const btnAtualizarNotificacoes = document.getElementById("btn-atualizar-notificacoes");
const avisoRevisoesDisponibilidade = document.getElementById("aviso-revisoes-disponibilidade");
const btnEntendiRevisoes = document.getElementById("btn-entendi-revisoes");
const resumoNotificacoesDisponibilidade = document.getElementById("notificacoes-disponibilidade-resumo");
const ultimaAtualizacaoNotificacoes = document.getElementById("notificacoes-ultima-atualizacao");
const dadosAtrasadosNotificacoes = document.getElementById("notificacoes-dados-atrasados");
const filtroNotificacoesTipo = document.getElementById("filtro-notificacoes-tipo");
const filtroNotificacoesMes = document.getElementById("filtro-notificacoes-mes");
const rodapeNotificacoesDisponibilidade = document.getElementById("notificacoes-disponibilidade-rodape");
const btnExportarNotificacoes = document.getElementById("btn-exportar-notificacoes");
const btnVerTodasNotificacoes = document.getElementById("btn-ver-todas-notificacoes");
const botoesHelp = document.querySelectorAll(".btn-help");
const botoesHelpSugestao = document.querySelectorAll(".btn-help-sugestao");
const botoesHelpFeedback = document.querySelectorAll(".btn-help-feedback");
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
const modalTempoPadrao = document.getElementById("modal-tempo-padrao");
const temposPadraoBusca = document.getElementById("tempos-padrao-busca");
const temposPadraoLista = document.getElementById("tempos-padrao-lista");
const temposPadraoStatus = document.getElementById("tempos-padrao-status");
const modalColaboradorNomeInput = document.getElementById("modal-colaborador-nome");
const modalColaboradorMatriculaInput = document.getElementById("modal-colaborador-matricula");
const modalColaboradorDataInput = document.getElementById("modal-colaborador-data");
const modalColaboradorHorasInput = document.getElementById("modal-colaborador-horas");
const modalColaboradorLancamentos = document.getElementById("modal-colaborador-lancamentos");
const btnAdicionarDiaColaborador = document.querySelector(".btn-adicionar-dia-colaborador");
const feedbackGlobal = document.getElementById("feedback-global");
const avisoBiOficina = document.getElementById("aviso-bi-oficina");
const btnFecharAvisoBiOficina = document.getElementById("btn-fechar-aviso-bi-oficina");
const resumoAtividades = document.getElementById("resumo-atividades");
const resumoSalvos = document.getElementById("resumo-salvos");
const resumoUltimoTfm = document.getElementById("resumo-ultimo-tfm");
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
const desempenhoRanking = document.getElementById("desempenho-ranking");
const desempenhoVazio = document.getElementById("desempenho-vazio");
const oficinaGeralStatus = document.getElementById("oficina-geral-status");
const oficinaGeralGrafico = document.getElementById("oficina-geral-grafico");
const distribuicaoManualToggle = document.getElementById("distribuicao-manual-toggle");
const distribuicaoManualPainel = document.getElementById("distribuicao-manual-painel");
const distribuicaoManualLista = document.getElementById("distribuicao-manual-lista");
const distribuicaoManualResumo = document.getElementById("distribuicao-manual-resumo");
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
const revisaoSalvamentoStatus = document.getElementById("revisao-salvamento-status");
const colaboradoresAdicionaisLista = document.getElementById("colaboradores-adicionais-lista");
const btnAddColaborador = document.querySelector(".btn-add-colaborador");
const formAbrirTfm = document.getElementById("form-abrir-tfm");
const abertoDataInicial = document.getElementById("aberto-data-inicial");
const abertoTurno = document.getElementById("aberto-turno");
const abertoTfm = document.getElementById("aberto-tfm");
const abertoProjeto = document.getElementById("aberto-projeto");
const abertoFeedback = document.getElementById("aberto-feedback");
const tfmsAbertosStatus = document.getElementById("tfms-abertos-status");
const tfmsAbertosLista = document.getElementById("tfms-abertos-lista");
const btnAtualizarTfmsAbertos = document.getElementById("btn-atualizar-tfms-abertos");
const formHorasTfmAberto = document.getElementById("form-horas-tfm-aberto");
const horasTfmNumero = document.getElementById("horas-tfm-numero");
const horasTfmId = document.getElementById("horas-tfm-id");
const horasTfmData = document.getElementById("horas-tfm-data");
const horasTfmQuantidade = document.getElementById("horas-tfm-quantidade");
const horasTfmAtividade = document.getElementById("horas-tfm-atividade");
const horasTfmObservacao = document.getElementById("horas-tfm-observacao");
const horasTfmFeedback = document.getElementById("horas-tfm-feedback");
const btnFecharFormHoras = document.getElementById("btn-fechar-form-horas");
const LOGIN_CHAVE = "stellantisUsuarioLogado";
const HISTORICO_CHAVE = "stellantisHistoricoApontamentos";
const LIMITE_HISTORICO = 60;
const LIMITE_HISTORICO_VISIVEL = 5;
const TIPOS_DOCUMENTO_PERMITIDOS = ["application/pdf", "image/png", "image/jpeg"];
const ETAPAS_SALVAMENTO = [
    "Pegando os dados...",
    "Conferindo anexos...",
    "Salvando no Banco de Dados...",
    "Aguarde, quase lá..."
];
const ETAPAS_CONSULTA_TFM = [
    "Procurando TFM...",
    "Consultando o Banco de Dados...",
    "Aguarde, quase lá..."
];
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";
const LIMITE_PREVIEW_DOCUMENTOS = 4;
let resumoPlanilhaCarregado = false;
let historicoAtual = [];
let apontamentoPendente = null;
let linhaEditando = null; // Armazena qual linha está sendo editada
let usuarioAtual = null;
let desempenhoRegistrosPlanilha = null;
let desempenhoPlanilhaMatricula = "";
let desempenhoRequisicaoAtual = 0;
let desempenhoCarregando = false;
let desempenhoErro = "";
let oficinaGeralCarregada = false;
let oficinaGeralRequisicaoAtual = 0;
let atividadeEmEdicao = null;
let colaboradorEmEdicao = null;
let lancamentosColaboradorModal = [];
let documentosEmVerificacao = null;
let salvamentoIntervalo = null;
let consultaTfmIntervalo = null;
let temposPadraoAtividades = [];
let temposPadraoCarregados = false;
const cacheConsultaTfms = new Map();
let buscaEmLoteDisponivel = true;
let tfmsAbertosCarregados = [];
let resolverConfirmacaoLimiteHoras = null;
let focoAntesConfirmacaoLimite = null;
let alertasDisponibilidadeAtuais = [];
let chavesAlertasNovos = new Set();
let exibirTodasNotificacoes = false;
let ultimaConsultaAlertasEm = 0;
const colaboradores = [
    { matricula: "87033", nome: "Leonel Barros Pereira Da Silva" },
    { matricula: "61449", nome: "Ailton Dos Reis Santana" },
    { matricula: "61618", nome: "Airton Fonseca do Nascimento" },
    { matricula: "90079", nome: "Albert de Almeida Libério" },
    { matricula: "105741", nome: "Caio Resende Soares" },
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
    { matricula: "208408", nome: "Rafael da Silva Moreira" },
    { matricula: "61557", nome: "Aldecir De Oliveira Chaves" }
];
const colaboradoresDisponiveis = colaboradores.map(({ nome }) => nome);

function normalizarTexto(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function formatarTempoPadrao(valor) {
    const numero = Number(valor);
    if (valor === null || valor === undefined || valor === "" || !Number.isFinite(numero) || numero <= 0) {
        return "Não informado";
    }

    return `${numero.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} h`;
}

function prepararTemposPadrao(dados) {
    const recebidos = Array.isArray(dados) ? dados : [];
    const porAtividade = new Map(recebidos.map((item) => [normalizarTexto(item.atividade), item]));

    recebidos.forEach((item) => {
        const atividade = String(item.atividade || "").trim();
        if (atividade && !atividadesDisponiveis.some((existente) => normalizarTexto(existente) === normalizarTexto(atividade))) {
            atividadesDisponiveis.push(atividade);
        }
    });
    atividadesDisponiveis.sort((primeira, segunda) => primeira.localeCompare(segunda, "pt-BR"));

    const catalogo = atividadesDisponiveis.map((atividade) => {
        const item = porAtividade.get(normalizarTexto(atividade));
        return {
            codigo: item?.codigo ?? "-",
            atividade,
            tempoPadrao: item && item.tempoPadrao !== "" && item.tempoPadrao !== null
                ? Number(item.tempoPadrao)
                : null
        };
    });

    recebidos.forEach((item) => {
        if (!catalogo.some((catalogado) => normalizarTexto(catalogado.atividade) === normalizarTexto(item.atividade))) {
            catalogo.push({ ...item, tempoPadrao: Number(item.tempoPadrao) });
        }
    });

    temposPadraoAtividades = catalogo.sort((primeiro, segundo) => {
        const codigoPrimeiro = Number(primeiro.codigo);
        const codigoSegundo = Number(segundo.codigo);
        if (Number.isFinite(codigoPrimeiro) && Number.isFinite(codigoSegundo)) return codigoPrimeiro - codigoSegundo;
        if (Number.isFinite(codigoPrimeiro)) return -1;
        if (Number.isFinite(codigoSegundo)) return 1;
        return primeiro.atividade.localeCompare(segundo.atividade, "pt-BR");
    });
}

function obterTempoPadrao(atividade) {
    return temposPadraoAtividades.find((item) => normalizarTexto(item.atividade) === normalizarTexto(atividade))?.tempoPadrao ?? null;
}

function atualizarTempoPadraoInput(input, output = input.closest(".detalhes-item")?.querySelector(".tempo-padrao-resumo")) {
    if (!output) return;
    const atividade = input.value.trim();
    output.textContent = atividade
        ? `Tempo padrão: ${formatarTempoPadrao(obterTempoPadrao(atividade))}`
        : "Tempo padrão: selecione uma atividade";
}

function renderizarTemposPadrao() {
    if (!temposPadraoLista) return;
    const busca = normalizarTexto(temposPadraoBusca?.value);
    const filtrados = temposPadraoAtividades.filter((item) => normalizarTexto(item.atividade).includes(busca));
    temposPadraoLista.innerHTML = "";

    filtrados.forEach((item) => {
        const linha = document.createElement("tr");
        const codigo = document.createElement("td");
        const atividade = document.createElement("td");
        const tempo = document.createElement("td");
        codigo.textContent = item.codigo;
        atividade.textContent = item.atividade;
        tempo.textContent = formatarTempoPadrao(item.tempoPadrao);
        linha.append(codigo, atividade, tempo);
        temposPadraoLista.appendChild(linha);
    });

    temposPadraoStatus.hidden = filtrados.length > 0;
    temposPadraoStatus.textContent = temposPadraoAtividades.length
        ? "Nenhuma atividade encontrada."
        : "Nenhum tempo padrão foi encontrado.";
}

async function carregarTemposPadrao(forcarAtualizacao = false) {
    if (temposPadraoCarregados && !forcarAtualizacao) return;
    if (!temposPadraoCarregados) {
        prepararTemposPadrao([]);
        renderizarTemposPadrao();
    }

    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=listarTemposPadrao&_=${Date.now()}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso || !Array.isArray(dados.atividades)) {
            throw new Error(dados.erro || "Não foi possível carregar os tempos padrão.");
        }
        prepararTemposPadrao(dados.atividades);
        temposPadraoCarregados = true;
        renderizarTemposPadrao();
        document.querySelectorAll(".detalhes-item .atividade-input").forEach((input) => atualizarTempoPadraoInput(input));
        atualizarTempoPadraoInput(modalAtividadeInput, modalTempoPadrao);
    } catch (erro) {
        if (temposPadraoStatus) {
            temposPadraoStatus.hidden = false;
            temposPadraoStatus.textContent = "Não foi possível carregar os tempos padrão. Publique a versão atualizada do Apps Script e tente novamente.";
        }
        console.error(erro);
    }
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

function criarCarregamentoConsulta(mensagem) {
    const conteudo = document.createElement("div");
    conteudo.className = "consulta-carregamento salvando";
    conteudo.innerHTML = `
        <div class="consulta-carregamento-icone"><i class="bi bi-search"></i></div>
        <div>
            <strong data-consulta-status-texto>${mensagem}</strong>
            <span>Isso pode levar alguns segundos quando há muitos TFMs.</span>
        </div>
    `;
    return conteudo;
}

function atualizarMensagemConsulta(container, mensagem) {
    const texto = container?.querySelector("[data-consulta-status-texto]");

    if (texto) {
        texto.textContent = mensagem;
    }
}

function iniciarAnimacaoConsulta(container, totalTfms = 1) {
    const etapas = [...ETAPAS_CONSULTA_TFM];

    if (totalTfms > 1) {
        etapas[0] = `Procurando ${totalTfms} TFMs...`;
    }

    let etapaAtual = 0;
    clearInterval(consultaTfmIntervalo);
    atualizarMensagemConsulta(container, etapas[etapaAtual]);

    consultaTfmIntervalo = setInterval(() => {
        etapaAtual = Math.min(etapaAtual + 1, etapas.length - 1);
        atualizarMensagemConsulta(container, etapas[etapaAtual]);
    }, 1400);
}

function pararAnimacaoConsulta() {
    clearInterval(consultaTfmIntervalo);
    consultaTfmIntervalo = null;
}

function mostrarCarregamentoBusca(totalTfms) {
    resultadoBusca.hidden = false;
    resultadoBuscaBackdrop.hidden = false;
    resultadoBusca.className = "resultado-busca resultado-busca-carregando";
    resultadoBusca.closest(".card-busca").classList.add("tem-resultado-busca");
    document.body.classList.add("resultado-busca-aberto");
    resultadoBusca.innerHTML = "";
    resultadoBusca.appendChild(criarCarregamentoConsulta("Procurando TFM..."));
    iniciarAnimacaoConsulta(resultadoBusca, totalTfms);
}

function mostrarCarregamentoBuscaLogin(totalTfms) {
    loginResultadoBusca.hidden = false;
    loginResultadoBusca.className = "resultado-busca login-resultado-busca resultado-busca-carregando";
    loginResultadoBusca.innerHTML = "";
    loginResultadoBusca.appendChild(criarCarregamentoConsulta("Procurando TFM..."));
    iniciarAnimacaoConsulta(loginResultadoBusca, totalTfms);
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

function atividadeEstaNaLista(atividade) {
    const atividadeNormalizada = normalizarTexto(String(atividade || "").trim());

    return atividadesDisponiveis.some((opcao) => normalizarTexto(opcao) === atividadeNormalizada);
}

function redirecionarParaSugestaoAtividade(atividade = "") {
    fecharModalAtividade();
    sugestaoAtividadeInput.value = atividade.trim();
    sugestaoObservacaoInput.value = "";
    abrirModalSugestao();
}

function mostrarAvisoAtividadeNaoCadastrada(atividade = "") {
    mostrarFeedback("Essa atividade não está cadastrada. Para usar uma nova atividade, envie uma sugestão para avaliação.", "erro");
    redirecionarParaSugestaoAtividade(atividade);
}

function validarAtividadeCadastrada(input, redirecionar = false) {
    const atividade = input.value.trim();
    const invalida = Boolean(atividade) && !atividadeEstaNaLista(atividade);

    marcarCampo(input, invalida, "Selecione uma atividade já cadastrada na lista.");

    if (invalida && redirecionar) {
        mostrarAvisoAtividadeNaoCadastrada(atividade);
    }

    return !invalida;
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

function criarDatasUteisPeriodo(dataInicio, dataFim) {
    return criarDatasPeriodo(dataInicio, dataFim).filter((data) => {
        const diaSemana = criarDataLocal(data).getDay();

        return diaSemana >= 1 && diaSemana <= 6;
    });
}

function distribuirHorasNoPeriodo(horas, dataInicio, dataFim) {
    const datas = criarDatasUteisPeriodo(dataInicio, dataFim);
    const totalCentavosHora = Math.round(Number(horas || 0) * 100);
    const base = Math.floor(totalCentavosHora / datas.length);
    const resto = totalCentavosHora % datas.length;

    return datas.map((data, index) => ({
        data,
        horas: Number(((base + (index < resto ? 1 : 0)) / 100).toFixed(2))
    }));
}

function obterDataInicioTfmInput() {
    return document.getElementById("data-inicio-tfm");
}

function obterDataFimTfmInput() {
    return document.getElementById("data-fim-tfm");
}

function somarHorasAtividadesFormulario() {
    return Array.from(document.querySelectorAll(".detalhes-item .horas-input")).reduce((total, input) => {
        return total + converterHorasNumero(input.value);
    }, 0);
}

function atualizarResumoDistribuicaoManual() {
    if (!distribuicaoManualResumo) {
        return;
    }

    const totalManual = Array.from(document.querySelectorAll(".distribuicao-manual-horas")).reduce((total, input) => {
        return total + converterHorasNumero(input.value);
    }, 0);
    const totalAtividades = somarHorasAtividadesFormulario();

    distribuicaoManualResumo.textContent = `Total por dia: ${formatarHoras(totalManual)} de ${formatarHoras(totalAtividades)} informadas nas atividades.`;
}

function renderizarCamposDistribuicaoManual() {
    if (!distribuicaoManualLista || !distribuicaoManualToggle?.checked) {
        atualizarResumoDistribuicaoManual();
        return;
    }

    const dataInicio = obterDataInicioTfmInput()?.value;
    const dataFim = obterDataFimTfmInput()?.value;
    const valoresAtuais = new Map(Array.from(document.querySelectorAll(".distribuicao-manual-horas")).map((input) => [input.dataset.data, input.value]));

    distribuicaoManualLista.innerHTML = "";

    if (!dataInicio || !dataFim || dataFim < dataInicio) {
        distribuicaoManualResumo.textContent = "Informe um período válido para preencher as horas por dia.";
        return;
    }

    criarDatasUteisPeriodo(dataInicio, dataFim).forEach((data) => {
        const item = document.createElement("div");
        item.className = "distribuicao-manual-item";
        item.innerHTML = `
            <label for="horas-dia-${data}">${formatarData(data)}</label>
            <div class="input-icon">
                <i class="bi bi-clock-history"></i>
                <input id="horas-dia-${data}" type="text" class="distribuicao-manual-horas" data-data="${data}" placeholder="0" inputmode="decimal" pattern="[0-9]+(\.[0-9]+)?">
            </div>
        `;
        item.querySelector("input").value = valoresAtuais.get(data) || "";
        distribuicaoManualLista.appendChild(item);
    });

    atualizarResumoDistribuicaoManual();
}

function alternarDistribuicaoManual() {
    if (!distribuicaoManualPainel || !distribuicaoManualToggle) {
        return;
    }

    distribuicaoManualPainel.hidden = !distribuicaoManualToggle.checked;

    if (!distribuicaoManualToggle.checked) {
        if (distribuicaoManualLista) {
            distribuicaoManualLista.innerHTML = "";
        }

        if (distribuicaoManualResumo) {
            distribuicaoManualResumo.textContent = "Informe as horas de cada dia.";
        }

        return;
    }

    renderizarCamposDistribuicaoManual();
}

function coletarDistribuicaoManualDiaria() {
    if (!distribuicaoManualToggle?.checked) {
        return [];
    }

    return Array.from(document.querySelectorAll(".distribuicao-manual-horas")).map((input) => ({
        data: input.dataset.data,
        horas: Number(converterHorasNumero(input.value).toFixed(2)),
        input
    }));
}

function consolidarRegistrosParaEdicao(registros) {
    const atividades = new Map();
    const horasPorDia = new Map();

    registros.forEach((registro) => {
        const atividade = String(registro.atividade || "").trim();
        const observacao = String(registro.observacao || "").trim();
        const horas = converterHorasNumero(registro.horas);
        const chaveAtividade = `${atividade}\u0000${observacao}`;
        const data = normalizarDataInput(registro.data);

        if (!atividades.has(chaveAtividade)) {
            atividades.set(chaveAtividade, { atividade, observacao, horas: 0 });
        }

        atividades.get(chaveAtividade).horas += horas;

        if (registro.data) {
            horasPorDia.set(data, (horasPorDia.get(data) || 0) + horas);
        }
    });

    return {
        atividades: Array.from(atividades.values()).map((atividade) => ({
            ...atividade,
            horas: Number(atividade.horas.toFixed(2))
        })),
        horasPorDia
    };
}

function preencherDistribuicaoManual(horasPorDia) {
    if (!distribuicaoManualToggle || !horasPorDia.size) {
        return;
    }

    distribuicaoManualToggle.checked = true;
    alternarDistribuicaoManual();

    document.querySelectorAll(".distribuicao-manual-horas").forEach((input) => {
        const horas = horasPorDia.get(input.dataset.data) || 0;
        input.value = Number(horas.toFixed(2)).toString();
    });

    atualizarResumoDistribuicaoManual();
}

function distribuirCentavosPorPeso(totalCentavos, pesosCentavos) {
    const totalPesos = pesosCentavos.reduce((total, peso) => total + peso, 0);

    if (!totalCentavos || !totalPesos) {
        return pesosCentavos.map(() => 0);
    }

    const distribuicao = pesosCentavos.map((peso, index) => {
        const bruto = (totalCentavos * peso) / totalPesos;
        return {
            index,
            valor: Math.floor(bruto),
            resto: bruto - Math.floor(bruto)
        };
    });
    let restante = totalCentavos - distribuicao.reduce((total, item) => total + item.valor, 0);

    distribuicao.sort((primeiro, segundo) => segundo.resto - primeiro.resto).forEach((item) => {
        if (restante > 0) {
            item.valor += 1;
            restante -= 1;
        }
    });

    return distribuicao.sort((primeiro, segundo) => primeiro.index - segundo.index).map((item) => item.valor);
}

function distribuirHorasManuaisPorAtividade(atividade, atividades, distribuicaoManual) {
    const pesosAtividades = atividades.map((item) => Math.round(converterHorasNumero(item.horas) * 100));
    const indiceAtividade = atividades.indexOf(atividade);

    return distribuicaoManual.map((dia) => {
        const totalDiaCentavos = Math.round(converterHorasNumero(dia.horas) * 100);
        const horasAtividadeCentavos = distribuirCentavosPorPeso(totalDiaCentavos, pesosAtividades)[indiceAtividade] || 0;

        return {
            data: dia.data,
            horas: Number((horasAtividadeCentavos / 100).toFixed(2))
        };
    });
}

function atualizarResumo() {
    const historico = historicoAtual.length ? historicoAtual : obterHistorico();
    const ultimoTfm = historico.find((item) => item.tfm)?.tfm;

    atualizarDesempenho();
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

    historicoAtual.slice(0, LIMITE_HISTORICO_VISIVEL).forEach((item) => {
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
        const resposta = await fetch(`${SCRIPT_URL}?acao=historicoRecentes&limite=${LIMITE_HISTORICO_VISIVEL}`);

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
    notificacoesDisponibilidade.hidden = false;
    usuarioLogadoNome.textContent = colaborador.cadastroPendente ? `${colaborador.nome} (cadastro pendente)` : colaborador.nome;
    document.getElementById("nome").value = colaborador.nome;
    matriculaInput.value = colaborador.matricula;
    limparFeedbackLogin();
    carregarDesempenhoColaborador();
    consultarAlertasDisponibilidade(colaborador, true);
}

function obterTipoAlertaDisponibilidade(alerta) {
    if (alerta.tipo) return alerta.tipo;
    const situacao = normalizarTexto(alerta.situacao);
    if (/ferias|afastado|afastamento|atestado|falta/.test(situacao)) return "ausencia";
    if (/sem horas|nao informad|nao preenchid|pendente/.test(situacao)) return "nao-informada";
    return "excesso";
}

function obterChaveAlertaDisponibilidade(alerta) {
    return [alerta.data, obterTipoAlertaDisponibilidade(alerta), alerta.situacao, alerta.total, alerta.horasDisponiveis].join("|");
}

function obterAlertasDisponibilidadeFiltrados() {
    return alertasDisponibilidadeAtuais.filter((alerta) => {
        const correspondeTipo = !filtroNotificacoesTipo.value || obterTipoAlertaDisponibilidade(alerta) === filtroNotificacoesTipo.value;
        const correspondeMes = !filtroNotificacoesMes.value || String(alerta.data || "").slice(0, 7) === filtroNotificacoesMes.value;
        return correspondeTipo && correspondeMes;
    });
}

function atualizarFiltroMesNotificacoes() {
    const valorAtual = filtroNotificacoesMes.value;
    const meses = [...new Set(alertasDisponibilidadeAtuais.map((alerta) => String(alerta.data || "").slice(0, 7)).filter(Boolean))].sort().reverse();
    filtroNotificacoesMes.innerHTML = '<option value="">Todos</option>';
    meses.forEach((mes) => {
        const opcao = document.createElement("option");
        const dataMes = new Date(`${mes}-01T00:00:00Z`);
        opcao.value = mes;
        opcao.textContent = dataMes.toLocaleDateString("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" });
        filtroNotificacoesMes.appendChild(opcao);
    });
    filtroNotificacoesMes.value = meses.includes(valorAtual) ? valorAtual : "";
}

function atualizarAtualidadeNotificacoes() {
    const atualizacoes = alertasDisponibilidadeAtuais
        .map((alerta) => new Date(alerta.atualizadoEm))
        .filter((data) => !Number.isNaN(data.getTime()));
    const ultimaAtualizacao = atualizacoes.sort((primeira, segunda) => segunda - primeira)[0];

    if (!ultimaAtualizacao) {
        ultimaAtualizacaoNotificacoes.textContent = "Atualização da disponibilidade não informada";
        dadosAtrasadosNotificacoes.hidden = alertasDisponibilidadeAtuais.length === 0;
        return;
    }

    ultimaAtualizacaoNotificacoes.textContent = `Disponibilidade atualizada em ${ultimaAtualizacao.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}`;
    dadosAtrasadosNotificacoes.hidden = Date.now() - ultimaAtualizacao.getTime() <= 72 * 60 * 60 * 1000;
}

function renderizarNotificacoesDisponibilidade(alertas = alertasDisponibilidadeAtuais, mensagem = "") {
    alertasDisponibilidadeAtuais = Array.isArray(alertas) ? alertas : [];
    listaNotificacoesDisponibilidade.innerHTML = "";
    contadorNotificacoesDisponibilidade.textContent = String(alertasDisponibilidadeAtuais.length);
    contadorNotificacoesDisponibilidade.hidden = alertasDisponibilidadeAtuais.length === 0;
    const quantidadeNovas = alertasDisponibilidadeAtuais.filter((alerta) => chavesAlertasNovos.has(obterChaveAlertaDisponibilidade(alerta))).length;
    resumoNotificacoesDisponibilidade.textContent = alertasDisponibilidadeAtuais.length === 1
        ? "1 revisão pendente"
        : `${alertasDisponibilidadeAtuais.length} revisões pendentes`;
    if (quantidadeNovas) resumoNotificacoesDisponibilidade.textContent += ` · ${quantidadeNovas} nova${quantidadeNovas === 1 ? "" : "s"}`;
    rodapeNotificacoesDisponibilidade.hidden = alertasDisponibilidadeAtuais.length === 0;
    atualizarFiltroMesNotificacoes();
    atualizarAtualidadeNotificacoes();

    if (!alertasDisponibilidadeAtuais.length) {
        const vazio = document.createElement("p");
        vazio.className = "notificacoes-disponibilidade-vazio";
        vazio.textContent = mensagem || "Nenhuma divergência encontrada nos seus lançamentos.";
        listaNotificacoesDisponibilidade.appendChild(vazio);
        return;
    }

    const alertasFiltrados = obterAlertasDisponibilidadeFiltrados();
    if (!alertasFiltrados.length) {
        const vazio = document.createElement("p");
        vazio.className = "notificacoes-disponibilidade-vazio";
        vazio.textContent = "Nenhuma revisão corresponde aos filtros selecionados.";
        listaNotificacoesDisponibilidade.appendChild(vazio);
        btnVerTodasNotificacoes.hidden = true;
        return;
    }

    const ordemTipos = { excesso: 0, ausencia: 1, "nao-informada": 2 };
    const alertasOrdenados = [...alertasFiltrados].sort((primeiro, segundo) => {
        const diferencaTipo = ordemTipos[obterTipoAlertaDisponibilidade(primeiro)] - ordemTipos[obterTipoAlertaDisponibilidade(segundo)];
        return diferencaTipo || String(segundo.data).localeCompare(String(primeiro.data));
    });
    const alertasVisiveis = exibirTodasNotificacoes ? alertasOrdenados : alertasOrdenados.slice(0, 5);
    const rotulosTipo = {
        excesso: "Horas excedidas",
        ausencia: "Ausências registradas",
        "nao-informada": "Disponibilidade não informada"
    };
    let ultimoTipo = "";

    alertasVisiveis.forEach((alerta) => {
        const tipo = obterTipoAlertaDisponibilidade(alerta);
        if (tipo !== ultimoTipo) {
            const grupo = document.createElement("h3");
            grupo.className = "notificacoes-disponibilidade-grupo";
            grupo.textContent = rotulosTipo[tipo] || "Outras revisões";
            listaNotificacoesDisponibilidade.appendChild(grupo);
            ultimoTipo = tipo;
        }

        const item = document.createElement("article");
        const titulo = document.createElement("strong");
        const descricao = document.createElement("p");
        item.className = `notificacao-disponibilidade-item notificacao-tipo-${tipo}`;
        if (chavesAlertasNovos.has(obterChaveAlertaDisponibilidade(alerta))) {
            item.classList.add("notificacao-disponibilidade-nova");
            const marcador = document.createElement("span");
            marcador.className = "notificacao-disponibilidade-marcador";
            marcador.textContent = "Novo";
            item.appendChild(marcador);
        }
        titulo.textContent = `Divergência em ${formatarData(alerta.data)}`;
        descricao.textContent = criarDescricaoAlertaDisponibilidade(alerta, true);
        item.append(titulo, descricao);
        listaNotificacoesDisponibilidade.appendChild(item);
    });

    btnVerTodasNotificacoes.hidden = alertasFiltrados.length <= 5;
    btnVerTodasNotificacoes.textContent = exibirTodasNotificacoes ? "Mostrar menos" : `Ver todas (${alertasFiltrados.length})`;
}

function fecharPainelNotificacoes() {
    painelNotificacoesDisponibilidade.hidden = true;
    btnNotificacoesDisponibilidade.setAttribute("aria-expanded", "false");
}

function alternarPainelNotificacoes() {
    const abrir = painelNotificacoesDisponibilidade.hidden;
    painelNotificacoesDisponibilidade.hidden = !abrir;
    btnNotificacoesDisponibilidade.setAttribute("aria-expanded", String(abrir));
}

function mostrarAvisoRevisoesDisponibilidade() {
    avisoRevisoesDisponibilidade.hidden = false;
}

async function consultarAlertasDisponibilidade(colaborador, exibirAviso = false) {
    renderizarNotificacoesDisponibilidade([], "Verificando seus lançamentos...");
    btnAtualizarNotificacoes.disabled = true;
    try {
        const parametros = new URLSearchParams({
            acao: "alertasDisponibilidade",
            matricula: colaborador.matricula,
            _: Date.now().toString()
        });
        const resposta = await fetch(`${SCRIPT_URL}?${parametros}`);
        const dados = await resposta.json();

        if (!resposta.ok || !dados.sucesso) throw new Error(dados.erro || "Falha ao consultar notificações.");
        if (usuarioAtual?.matricula !== colaborador.matricula) return;

        const alertas = Array.isArray(dados.alertas) ? dados.alertas : [];
        const chaveHistorico = `alertas-disponibilidade-anteriores:${colaborador.matricula}`;
        const chavesAnteriores = new Set(JSON.parse(localStorage.getItem(chaveHistorico) || "[]"));
        chavesAlertasNovos = new Set(alertas.map(obterChaveAlertaDisponibilidade).filter((chave) => !chavesAnteriores.has(chave)));
        localStorage.setItem(chaveHistorico, JSON.stringify(alertas.map(obterChaveAlertaDisponibilidade)));
        ultimaConsultaAlertasEm = Date.now();
        renderizarNotificacoesDisponibilidade(alertas);
        if (!alertas.length) return;
        if (exibirAviso) mostrarAvisoRevisoesDisponibilidade();
    } catch (erro) {
        renderizarNotificacoesDisponibilidade([], "Não foi possível atualizar as notificações. Tente novamente.");
        console.error("Não foi possível verificar a disponibilidade diária.", erro);
    } finally {
        btnAtualizarNotificacoes.disabled = false;
    }
}

function fecharAlertasDisponibilidade() {
    modalAlertasDisponibilidade.hidden = true;
    document.body.classList.remove("modal-limite-horas-aberto");
}

modalAlertasDisponibilidade.querySelectorAll("[data-fechar-alertas-disponibilidade]").forEach((elemento) => {
    elemento.addEventListener("click", fecharAlertasDisponibilidade);
});
btnNotificacoesDisponibilidade.addEventListener("click", alternarPainelNotificacoes);
btnAtualizarNotificacoes.addEventListener("click", () => {
    if (usuarioAtual) consultarAlertasDisponibilidade(usuarioAtual);
});
filtroNotificacoesTipo.addEventListener("change", () => {
    exibirTodasNotificacoes = false;
    renderizarNotificacoesDisponibilidade();
});
filtroNotificacoesMes.addEventListener("change", () => {
    exibirTodasNotificacoes = false;
    renderizarNotificacoesDisponibilidade();
});
btnVerTodasNotificacoes.addEventListener("click", () => {
    exibirTodasNotificacoes = !exibirTodasNotificacoes;
    renderizarNotificacoesDisponibilidade();
});
btnExportarNotificacoes.addEventListener("click", () => {
    const linhas = obterAlertasDisponibilidadeFiltrados().map((alerta) => [
        alerta.data,
        obterTipoAlertaDisponibilidade(alerta),
        alerta.situacao || "",
        alerta.total,
        alerta.horasDisponiveis,
        alerta.atualizadoEm || ""
    ]);
    const escaparCsv = (valor) => `"${String(valor ?? "").replace(/"/g, '""')}"`;
    const csv = [["Data", "Tipo", "Situação", "Horas lançadas", "Horas disponíveis", "Atualizado em"], ...linhas]
        .map((linha) => linha.map(escaparCsv).join(";"))
        .join("\r\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" }));
    link.download = `revisoes-disponibilidade-${usuarioAtual?.matricula || "colaborador"}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
});
btnEntendiRevisoes.addEventListener("click", () => {
    avisoRevisoesDisponibilidade.hidden = true;
    if (usuarioAtual) {
        localStorage.setItem(`ciencia-revisoes:${usuarioAtual.matricula}`, new Date().toISOString());
    }
    chavesAlertasNovos.clear();
    renderizarNotificacoesDisponibilidade();
    btnNotificacoesDisponibilidade.focus();
});
document.addEventListener("click", (event) => {
    if (!notificacoesDisponibilidade.contains(event.target) && !avisoRevisoesDisponibilidade.contains(event.target)) {
        fecharPainelNotificacoes();
    }
});
window.addEventListener("focus", () => {
    if (usuarioAtual && Date.now() - ultimaConsultaAlertasEm > 60000) {
        consultarAlertasDisponibilidade(usuarioAtual);
    }
});

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
    carregarDesempenhoColaborador();
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
    btnBuscarLogin.classList.add("salvando");
    icone.className = "bi bi-gear-fill";
    texto.textContent = "Buscando...";

    try {
        mostrarCarregamentoBuscaLogin(tfms.length);
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
        pararAnimacaoConsulta();
        btnBuscarLogin.disabled = false;
        btnBuscarLogin.classList.remove("salvando");
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
    alertasDisponibilidadeAtuais = [];
    chavesAlertasNovos = new Set();
    exibirTodasNotificacoes = false;
    notificacoesDisponibilidade.hidden = true;
    avisoRevisoesDisponibilidade.hidden = true;
    fecharPainelNotificacoes();
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

function obterChaveArquivo(arquivo) {
    return `${arquivo.name}-${arquivo.size}-${arquivo.lastModified}`;
}

function sincronizarArquivosDocumento(input, arquivos) {
    const transferencia = new DataTransfer();
    arquivos.forEach((arquivo) => transferencia.items.add(arquivo));
    input.files = transferencia.files;
}

function criarDocumentoPreviewItem(input, arquivos, arquivo, index) {
    const item = document.createElement("div");
    item.className = "documento-preview-item";

    if (arquivo.type.startsWith("image/")) {
        const imagem = document.createElement("img");
        imagem.src = URL.createObjectURL(arquivo);
        imagem.alt = arquivo.name;
        imagem.addEventListener("load", () => URL.revokeObjectURL(imagem.src), { once: true });
        item.appendChild(imagem);
    } else {
        const icone = document.createElement("i");
        icone.className = "bi bi-file-earmark-pdf";
        item.appendChild(icone);
    }

    const nome = document.createElement("span");
    nome.textContent = arquivo.name;
    nome.title = arquivo.name;

    const remover = document.createElement("button");
    remover.type = "button";
    remover.className = "documento-preview-remover";
    remover.setAttribute("aria-label", `Remover ${arquivo.name}`);
    remover.innerHTML = `<i class="bi bi-x-lg"></i>`;
    remover.addEventListener("click", () => {
        arquivos.splice(index, 1);
        sincronizarArquivosDocumento(input, arquivos);
        atualizarPreviewDocumento(input, arquivos);

        if (!modalDocumentos.hidden) {
            atualizarModalDocumentos();
        }
    });

    item.append(nome, remover);
    return item;
}

function atualizarPreviewDocumento(input, arquivos) {
    const campoDocumento = input.closest(".documento");
    const nomeArquivo = campoDocumento.querySelector(".arquivo-nome");
    const preview = campoDocumento.querySelector(".documento-preview");

    nomeArquivo.textContent = arquivos.length
        ? `${arquivos.length} arquivo${arquivos.length > 1 ? "s" : ""} selecionado${arquivos.length > 1 ? "s" : ""}`
        : "Nenhum arquivo selecionado";

    preview.innerHTML = "";

    arquivos.slice(0, LIMITE_PREVIEW_DOCUMENTOS).forEach((arquivo, index) => {
        preview.appendChild(criarDocumentoPreviewItem(input, arquivos, arquivo, index));
    });

    if (arquivos.length > LIMITE_PREVIEW_DOCUMENTOS) {
        const botaoVerificar = document.createElement("button");
        botaoVerificar.type = "button";
        botaoVerificar.className = "btn-verificar-documentos";
        botaoVerificar.innerHTML = `<i class="bi bi-images"></i><span>Verificar imagens (${arquivos.length})</span>`;
        botaoVerificar.addEventListener("click", () => abrirModalDocumentos(input, arquivos));
        preview.appendChild(botaoVerificar);
    }
}

function atualizarModalDocumentos() {
    if (!documentosEmVerificacao) {
        return;
    }

    const { input, arquivos } = documentosEmVerificacao;
    modalDocumentosConteudo.innerHTML = "";

    if (!arquivos.length) {
        const vazio = document.createElement("p");
        vazio.className = "modal-documentos-vazio";
        vazio.textContent = "Nenhuma imagem selecionada.";
        modalDocumentosConteudo.appendChild(vazio);
        return;
    }

    arquivos.forEach((arquivo, index) => {
        modalDocumentosConteudo.appendChild(criarDocumentoPreviewItem(input, arquivos, arquivo, index));
    });
}

function abrirModalDocumentos(input, arquivos) {
    documentosEmVerificacao = { input, arquivos };
    atualizarModalDocumentos();
    modalDocumentos.hidden = false;
    document.body.classList.add("modal-aberto");
}

function fecharModalDocumentos() {
    modalDocumentos.hidden = true;
    modalDocumentosConteudo.innerHTML = "";
    documentosEmVerificacao = null;
    document.body.classList.remove("modal-aberto");
}

function configurarDocumento(input) {
    const arquivosSelecionados = [];

    input.limparDocumentos = () => {
        arquivosSelecionados.length = 0;
        sincronizarArquivosDocumento(input, arquivosSelecionados);
        atualizarPreviewDocumento(input, arquivosSelecionados);
    };

    input.addEventListener("change", () => {
        const arquivosNovos = Array.from(input.files || []);
        const chavesSelecionadas = new Set(arquivosSelecionados.map(obterChaveArquivo));

        arquivosNovos.forEach((arquivo) => {
            const chave = obterChaveArquivo(arquivo);

            if (!chavesSelecionadas.has(chave)) {
                arquivosSelecionados.push(arquivo);
                chavesSelecionadas.add(chave);
            }
        });

        sincronizarArquivosDocumento(input, arquivosSelecionados);
        atualizarPreviewDocumento(input, arquivosSelecionados);
    });
}

function criarColaboradorAdicionalItem(dados = {}) {
    const lancamentos = Array.isArray(dados.lancamentos)
        ? dados.lancamentos.map((lancamento) => ({
            data: normalizarDataInput(lancamento.data),
            horas: Number(converterHorasNumero(lancamento.horas).toFixed(2))
        })).filter((lancamento) => lancamento.data && lancamento.horas > 0)
        : [];
    const item = document.createElement("div");
    item.className = "colaborador-adicional-item bloco-item detalhes-item-compacto";
    item.innerHTML = `
        <div class="bloco-cabecalho">
            <span class="bloco-numero" aria-label="Colaborador adicional"><i class="bi bi-person"></i></span>
            <div class="colaborador-adicional-resumo">
                <strong>Colaborador adicional</strong>
                <span>Sem lançamentos</span>
            </div>
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
        <input type="hidden" class="colaborador-adicional-lancamentos">
    `;

    item.querySelector(".colaborador-adicional-nome").value = dados.nome || "";
    item.querySelector(".colaborador-adicional-matricula").value = dados.matricula || "";
    item.querySelector(".colaborador-adicional-lancamentos").value = JSON.stringify(lancamentos);
    item.querySelector(".colaborador-adicional-horas").value = lancamentos.reduce((total, lancamento) => total + converterHorasNumero(lancamento.horas), 0).toFixed(2);
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
    const lancamentos = obterLancamentosColaboradorItem(item);
    const horas = lancamentos.reduce((total, lancamento) => total + converterHorasNumero(lancamento.horas), 0);
    const icone = item.querySelector(".bloco-numero");
    const resumoNome = item.querySelector(".colaborador-adicional-resumo strong");
    const resumoDados = item.querySelector(".colaborador-adicional-resumo span");

    if (resumoNome) resumoNome.textContent = nome;
    if (resumoDados) resumoDados.textContent = `${matricula || "Sem matrícula"} · ${lancamentos.length} dia(s) · ${formatarHoras(horas)}`;

    if (icone) {
        icone.title = `${nome}${matricula ? ` - ${matricula}` : ""}${lancamentos.length ? ` - ${lancamentos.length} dia(s) - ${formatarHoras(horas)}` : ""}`;
    }
}

function obterLancamentosColaboradorItem(item) {
    try {
        const lancamentos = JSON.parse(item?.querySelector(".colaborador-adicional-lancamentos")?.value || "[]");
        return Array.isArray(lancamentos) ? lancamentos : [];
    } catch (erro) {
        return [];
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
            <input id="observacao-${indice}" name="observacao[]" type="hidden" class="observacao-input" required>
        `;

        return novoDetalhe;
    }

    novoDetalhe.innerHTML = `
        <div class="bloco-cabecalho">
            <span class="bloco-numero">${numeroFormatado}</span>
            <div class="bloco-cabecalho-titulo">
                <strong>Atividade realizada ${indice}</strong>
                <span class="tempo-padrao-resumo">Tempo padrão: selecione uma atividade</span>
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
                    <textarea id="observacao-${indice}" name="observacao[]" rows="3" class="observacao-input" placeholder="Digite alguma observação sobre a atividade" required></textarea>
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
    atualizarTempoPadraoInput(item.querySelector(".atividade-input"));
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
        lancamentos: obterLancamentosColaboradorItem(item)
    })).filter(({ nome, matricula, lancamentos }) => nome || matricula || lancamentos.length);
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
    texto.textContent = estaSalvando ? mensagem : "Salvar Registro";
}

function alterarEstadoConfirmacaoSalvamento(estaSalvando, mensagem = "Salvando...") {
    const icone = btnConfirmarSalvamento?.querySelector("i");
    const texto = btnConfirmarSalvamento?.querySelector("span");

    if (!btnConfirmarSalvamento || !icone || !texto) {
        return;
    }

    btnConfirmarSalvamento.disabled = estaSalvando;
    btnConfirmarSalvamento.classList.toggle("salvando", estaSalvando);
    icone.className = estaSalvando ? "bi bi-arrow-repeat" : "bi bi-check2-circle";
    texto.textContent = estaSalvando ? mensagem : "Confirmar e salvar";
}

function mostrarErroSalvamento(mensagem) {
    if (revisaoSalvamentoStatus && modalRevisao && !modalRevisao.hidden) {
        revisaoSalvamentoStatus.hidden = false;
        revisaoSalvamentoStatus.className = "revisao-salvamento-status erro";
        revisaoSalvamentoStatus.textContent = mensagem;
        return;
    }

    mostrarFeedback(mensagem, "erro");
}

function atualizarEtapaSalvamento(mensagem) {
    alterarEstadoSalvando(true, mensagem);
    alterarEstadoConfirmacaoSalvamento(true, mensagem);

    if (revisaoSalvamentoStatus && modalRevisao && !modalRevisao.hidden) {
        revisaoSalvamentoStatus.hidden = false;
        revisaoSalvamentoStatus.className = "revisao-salvamento-status salvando";
        revisaoSalvamentoStatus.textContent = mensagem;
        return;
    }

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
    alternarAppTab("sugestao");
    sugestaoAtividadeInput?.focus();
}

function fecharModalSugestao() {
    if (modalSugestao) {
        modalSugestao.hidden = true;
        document.body.classList.remove("modal-aberto");
    }
}

function abrirModalFeedback() {
    alternarAppTab("feedback");
    feedbackTextoInput?.focus();
}

function fecharModalFeedback() {
    if (modalFeedback) {
        modalFeedback.hidden = true;
        document.body.classList.remove("modal-aberto");
    }
}

function abrirModalAtividade(item = null) {
    atividadeEmEdicao = item;
    modalAtividadeInput.value = item?.querySelector(".atividade-input")?.value || "";
    modalObservacaoInput.value = item?.querySelector(".observacao-input")?.value || "";
    modalHorasInput.value = item?.querySelector(".horas-input")?.value || "";
    atualizarTempoPadraoInput(modalAtividadeInput, modalTempoPadrao);
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
    atualizarTempoPadraoInput(modalAtividadeInput, modalTempoPadrao);
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
    modalColaboradorDataInput.value = "";
    modalColaboradorHorasInput.value = "";
    lancamentosColaboradorModal = item ? obterLancamentosColaboradorItem(item).map((lancamento) => ({ ...lancamento })) : [];
    renderizarLancamentosColaboradorModal();
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
    modalColaboradorDataInput.value = "";
    modalColaboradorHorasInput.value = "";
    lancamentosColaboradorModal = [];
    modalColaboradorLancamentos.innerHTML = "";
    document.getElementById("modal-colaborador-titulo").textContent = "Adicionar colaborador";
    btnConfirmarColaborador.querySelector("span").textContent = "Adicionar colaborador";
    marcarCampo(modalColaboradorNomeInput, false);
    marcarCampo(modalColaboradorDataInput, false);
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
    if (salvamentoIntervalo) {
        return;
    }

    modalRevisao.hidden = true;
    apontamentoPendente = null;
    revisaoConteudo.innerHTML = "";
    if (revisaoSalvamentoStatus) {
        revisaoSalvamentoStatus.hidden = true;
        revisaoSalvamentoStatus.textContent = "";
        revisaoSalvamentoStatus.className = "revisao-salvamento-status";
    }
    document.body.classList.remove("modal-aberto");
}

function adicionarAtividadeDoModal() {
    const atividade = modalAtividadeInput.value.trim();
    const horas = normalizarHoras(modalHorasInput.value);
    const horasNumero = Number(horas);
    const observacao = modalObservacaoInput.value.trim();

    marcarCampo(modalAtividadeInput, !atividade);
    marcarCampo(modalHorasInput, !horasNumero || horasNumero <= 0, "Informe as horas da atividade.");
    marcarCampo(modalObservacaoInput, !observacao, "Informe uma observação sobre a atividade.");

    if (!atividade || !horasNumero || horasNumero <= 0 || !observacao) {
        mostrarFeedback("Informe atividade, horas e observação antes de adicionar.", "erro");
        return;
    }

    if (!validarAtividadeCadastrada(modalAtividadeInput, true)) {
        return;
    }

    const item = atividadeEmEdicao || criarDetalhesItem(document.querySelectorAll(".detalhes-item").length + 1);

    item.querySelector(".atividade-input").value = atividade;
    item.querySelector(".observacao-input").value = observacao;
    item.querySelector(".horas-input").value = horas;

    if (!atividadeEmEdicao) {
        detalhesContainer.appendChild(item);
    }

    atualizarResumoAtividadeItem(item);
    atualizarResumoDistribuicaoManual();
    fecharModalAtividade();
    limparFeedback();
    atualizarResumo();
}

function renderizarLancamentosColaboradorModal() {
    modalColaboradorLancamentos.innerHTML = "";

    lancamentosColaboradorModal.forEach((lancamento, indice) => {
        const item = document.createElement("div");
        item.className = "modal-colaborador-lancamento-item";
        item.innerHTML = `
            <div><strong>${formatarData(lancamento.data)}</strong><span>${formatarHoras(lancamento.horas)}</span></div>
            <button type="button" data-remover-lancamento-colaborador="${indice}" aria-label="Remover lançamento de ${formatarData(lancamento.data)}"><i class="bi bi-trash3"></i></button>
        `;
        modalColaboradorLancamentos.appendChild(item);
    });
}

function adicionarLancamentoColaboradorDoModal() {
    const data = modalColaboradorDataInput.value;
    const horas = converterHorasNumero(modalColaboradorHorasInput.value);
    const dataInicio = obterDataInicioTfmInput()?.value;
    const dataFim = obterDataFimTfmInput()?.value;
    const dataInvalida = !data || (dataInicio && data < dataInicio) || (dataFim && data > dataFim);

    marcarCampo(modalColaboradorDataInput, dataInvalida, "Escolha uma data dentro do período do TFM.");
    marcarCampo(modalColaboradorHorasInput, !horas || horas <= 0, "Informe as horas trabalhadas nessa data.");

    if (dataInvalida || horas <= 0) {
        mostrarFeedback("Informe uma data do período e as horas trabalhadas.", "erro");
        return;
    }

    const existente = lancamentosColaboradorModal.find((lancamento) => lancamento.data === data);
    if (existente) {
        existente.horas = Number(horas.toFixed(2));
    } else {
        lancamentosColaboradorModal.push({ data, horas: Number(horas.toFixed(2)) });
        lancamentosColaboradorModal.sort((primeiro, segundo) => primeiro.data.localeCompare(segundo.data));
    }

    modalColaboradorDataInput.value = "";
    modalColaboradorHorasInput.value = "";
    renderizarLancamentosColaboradorModal();
    limparFeedback();
}

function adicionarColaboradorDoModal() {
    const nome = modalColaboradorNomeInput.value.trim();
    const matricula = modalColaboradorMatriculaInput.value.trim();

    marcarCampo(modalColaboradorNomeInput, !nome, "Informe o nome do colaborador.");

    if (!nome || !matricula || !lancamentosColaboradorModal.length) {
        mostrarFeedback("Selecione o colaborador e adicione pelo menos uma data com horas.", "erro");
        return;
    }

    const item = colaboradorEmEdicao || criarColaboradorAdicionalItem();
    item.querySelector(".colaborador-adicional-nome").value = nome;
    item.querySelector(".colaborador-adicional-matricula").value = matricula;
    item.querySelector(".colaborador-adicional-lancamentos").value = JSON.stringify(lancamentosColaboradorModal);
    item.querySelector(".colaborador-adicional-horas").value = lancamentosColaboradorModal.reduce((total, lancamento) => total + converterHorasNumero(lancamento.horas), 0).toFixed(2);

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

function converterHorasNumero(valor) {
    const horas = Number(String(valor || "0").replace(",", "."));
    return Number.isFinite(horas) ? horas : 0;
}

function formatarHoras(valor) {
    return `${Number(valor || 0).toLocaleString("pt-BR", { maximumFractionDigits: 2 })}h`;
}

function criarDescricaoAlertaDisponibilidade(alerta, lancamentoExistente = false) {
    const data = formatarData(alerta.data);
    const total = formatarHoras(alerta.total);
    const introducao = lancamentoExistente ? `Foram lançadas ${total}` : `O total será ${total}`;
    const situacao = normalizarTexto(alerta.situacao);

    if (situacao.includes("ferias")) return `No dia ${data}, você estava de férias. Não é possível lançar TFMs nessa data. Contate seu líder em caso de divergência.`;
    if (situacao.includes("afastamento")) return `No dia ${data}, você estava afastado. Não é possível lançar TFMs nessa data. Contate seu líder em caso de divergência.`;
    if (situacao.includes("atestado")) return `No dia ${data}, você estava de atestado. Não é possível lançar TFMs nessa data. Contate seu líder em caso de divergência.`;
    if (situacao.includes("falta")) return `No dia ${data}, consta uma falta para você. Não é possível lançar TFMs nessa data. Contate seu líder em caso de divergência.`;
    if (situacao.includes("sem horas")) {
        const ehSabado = new Date(`${alerta.data}T00:00:00Z`).getUTCDay() === 6;
        return ehSabado
            ? `Você não possui presença registrada no sábado, dia ${data}. Não é possível lançar TFMs nesse dia. Contate seu líder em caso de divergência.`
            : `Você não possui horas disponíveis no dia ${data}. Não é possível lançar TFMs nessa data. Contate seu líder em caso de divergência.`;
    }

    if (alerta.situacao) {
        return `${introducao} no dia ${data}, mas essa data está registrada como ${alerta.situacao}.`;
    }

    return `${introducao} no dia ${data}, acima das ${formatarHoras(alerta.horasDisponiveis)} disponíveis.`;
}

function criarLancamentosVerificacaoApontamento(dados) {
    const lancamentos = (dados.distribuicaoDiaria || []).map((item) => ({
        nome: dados.nome,
        matricula: dados.matricula,
        data: item.data,
        horas: item.horas
    }));

    (dados.colaboradoresAdicionais || []).forEach((colaborador) => {
        const distribuicao = colaborador.lancamentos?.length
            ? colaborador.lancamentos
            : [{ data: dados.data, horas: colaborador.horas }];

        distribuicao.forEach((item) => lancamentos.push({
            nome: colaborador.nome,
            matricula: colaborador.matricula,
            data: item.data,
            horas: item.horas
        }));
    });

    return lancamentos;
}

function fecharConfirmacaoLimiteHoras(confirmado) {
    if (!resolverConfirmacaoLimiteHoras) {
        return;
    }

    const resolver = resolverConfirmacaoLimiteHoras;
    resolverConfirmacaoLimiteHoras = null;
    modalLimiteHoras.hidden = true;
    document.body.classList.remove("modal-limite-horas-aberto");
    focoAntesConfirmacaoLimite?.focus();
    focoAntesConfirmacaoLimite = null;
    resolver(confirmado);
}

function abrirConfirmacaoLimiteHoras(alertas = []) {
    const bloqueado = alertas.some((alerta) => converterHorasNumero(alerta.horasDisponiveis) <= 0 || String(alerta.situacao || "").trim());
    if (alertas.length) {
        textoLimiteHoras.textContent = `${alertas.map((alerta) => criarDescricaoAlertaDisponibilidade(alerta)).join(" ")} ${bloqueado ? "O lançamento foi bloqueado." : "Deseja continuar mesmo assim?"}`;
    } else {
        textoLimiteHoras.textContent = "Este lançamento ultrapassará as horas disponíveis do colaborador. Deseja continuar mesmo assim?";
    }

    tituloLimiteHoras.textContent = bloqueado ? "Lançamento não permitido" : "Horas disponíveis serão ultrapassadas";
    btnContinuarLimiteHoras.hidden = bloqueado;
    btnCancelarLimiteHoras.textContent = bloqueado ? "Entendi" : "Cancelar";

    focoAntesConfirmacaoLimite = document.activeElement;
    modalLimiteHoras.hidden = false;
    document.body.classList.add("modal-limite-horas-aberto");
    (bloqueado ? btnCancelarLimiteHoras : btnContinuarLimiteHoras).focus();

    return new Promise((resolver) => {
        resolverConfirmacaoLimiteHoras = resolver;
    });
}

modalLimiteHoras.querySelectorAll("[data-cancelar-limite-horas]").forEach((elemento) => {
    elemento.addEventListener("click", () => fecharConfirmacaoLimiteHoras(false));
});
btnContinuarLimiteHoras.addEventListener("click", () => fecharConfirmacaoLimiteHoras(true));
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modalLimiteHoras.hidden) {
        fecharConfirmacaoLimiteHoras(false);
    }
});

async function confirmarLimiteDiario(lancamentos, opcoes = {}) {
    const resposta = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
            acao: "verificarLimiteHoras",
            lancamentos,
            tfmIgnorado: opcoes.tfmIgnorado || ""
        })
    });
    const resultado = await resposta.json();

    if (!resposta.ok || !resultado.sucesso) {
        throw new Error(resultado.erro || "Não foi possível verificar as horas disponíveis.");
    }

    if (!resultado.alertas?.length) {
        return true;
    }

    return abrirConfirmacaoLimiteHoras(resultado.alertas);
}

function mostrarFeedbackPainel(elemento, mensagem, tipo = "sucesso") {
    elemento.hidden = false;
    elemento.className = `feedback-global ${tipo}`;
    elemento.textContent = mensagem;
}

async function enviarAcaoTfmAberto(dados) {
    const resposta = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(dados)
    });
    const resultado = await resposta.json();

    if (!resposta.ok || !resultado.sucesso) {
        throw new Error(resultado.erro || "Não foi possível concluir a operação.");
    }

    return resultado;
}

async function abrirNovoTfm(event) {
    event.preventDefault();
    const tfm = abertoTfm.value.trim();

    if (!/^\d{6}$/.test(tfm) || !abertoDataInicial.value || !abertoTurno.value) {
        mostrarFeedbackPainel(abertoFeedback, "Preencha data inicial, turno e um TFM com 6 números.", "erro");
        return;
    }

    const botao = formAbrirTfm.querySelector("button[type='submit']");
    botao.disabled = true;

    try {
        await enviarAcaoTfmAberto({
            acao: "abrirTfm",
            tfm,
            dataInicial: abertoDataInicial.value,
            turno: abertoTurno.value,
            projeto: abertoProjeto.value.trim(),
            nomeHost: usuarioAtual.nome,
            matriculaHost: usuarioAtual.matricula
        });
        formAbrirTfm.reset();
        abertoDataInicial.value = new Date().toISOString().slice(0, 10);
        mostrarFeedbackPainel(abertoFeedback, `TFM ${tfm} aberto com sucesso.`, "sucesso");
        await carregarTfmsAbertos();
        alternarAppTab("abrir-tfm");
        alternarTfmAbertoView("andamento");
    } catch (erro) {
        mostrarFeedbackPainel(abertoFeedback, erro.message, "erro");
    } finally {
        botao.disabled = false;
    }
}

function abrirFormularioHoras(tfm) {
    formHorasTfmAberto.hidden = false;
    horasTfmId.value = tfm;
    horasTfmNumero.textContent = tfm;
    horasTfmData.value = new Date().toISOString().slice(0, 10);
    horasTfmQuantidade.value = "";
    horasTfmAtividade.value = "";
    horasTfmObservacao.value = "";
    horasTfmFeedback.hidden = true;
    formHorasTfmAberto.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderizarTfmsAbertos(tfms) {
    tfmsAbertosLista.innerHTML = "";
    tfmsAbertosStatus.hidden = tfms.length > 0;
    tfmsAbertosStatus.textContent = "Nenhum TFM em andamento no momento.";

    tfms.forEach((item) => {
        const hostAtual = String(item.matriculaHost) === String(usuarioAtual?.matricula);
        const card = document.createElement("article");
        card.className = "tfm-aberto-card";
        card.innerHTML = `
            <div class="tfm-aberto-card-topo">
                <div>
                    <span class="tfm-aberto-status"><i class="bi bi-hourglass-split"></i> Em andamento</span>
                    <h2>TFM ${item.tfm}</h2>
                    <p>${formatarValor(item.projeto)} · Host: ${formatarValor(item.nomeHost)}</p>
                </div>
                <div class="tfm-aberto-total"><span>Horas acumuladas</span><strong>${formatarHoras(item.horasTotal)}</strong></div>
            </div>
            <div class="tfm-aberto-metricas">
                <div><span>Início</span><strong>${formatarData(item.dataInicial)}</strong></div>
                <div><span>Minhas horas</span><strong>${formatarHoras(item.minhasHoras)}</strong></div>
                <div><span>Lançamentos</span><strong>${item.lancamentos}</strong></div>
                <div><span>Último dia</span><strong>${item.ultimoLancamento ? formatarData(item.ultimoLancamento) : "Sem lançamento"}</strong></div>
            </div>
            <div class="tfm-aberto-acoes">
                <button type="button" class="btn-adicionar-horas" data-adicionar-horas="${item.tfm}">
                    <i class="bi bi-plus-circle"></i><span>Adicionar minhas horas</span>
                </button>
                ${hostAtual ? `<button type="button" class="btn-finalizar-tfm" data-finalizar-tfm="${item.tfm}"><i class="bi bi-check2-circle"></i><span>Finalizar TFM</span></button>` : ""}
            </div>
        `;
        tfmsAbertosLista.appendChild(card);
    });
}

async function carregarTfmsAbertos() {
    if (!usuarioAtual?.matricula) return;

    tfmsAbertosStatus.hidden = false;
    tfmsAbertosStatus.textContent = "Carregando TFMs em andamento...";
    tfmsAbertosLista.innerHTML = "";

    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=listarTfmsAbertos&matricula=${encodeURIComponent(usuarioAtual.matricula)}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso) throw new Error(dados.erro || "Erro ao carregar TFMs em andamento.");
        tfmsAbertosCarregados = Array.isArray(dados.tfms) ? dados.tfms : [];
        renderizarTfmsAbertos(tfmsAbertosCarregados);
    } catch (erro) {
        tfmsAbertosStatus.hidden = false;
        tfmsAbertosStatus.textContent = erro.message;
    }
}

async function adicionarHorasAoTfm(event) {
    event.preventDefault();
    const horas = converterHorasNumero(horasTfmQuantidade.value);
    const observacao = horasTfmObservacao.value.trim();

    if (!horasTfmData.value || !horasTfmAtividade.value.trim() || horas <= 0 || !observacao) {
        mostrarFeedbackPainel(horasTfmFeedback, "Preencha o dia, a atividade, as horas trabalhadas e a observação.", "erro");
        return;
    }

    const botao = formHorasTfmAberto.querySelector("button[type='submit']");
    botao.disabled = true;
    try {
        const continuar = await confirmarLimiteDiario([{
            nome: usuarioAtual.nome,
            matricula: usuarioAtual.matricula,
            data: horasTfmData.value,
            horas
        }]);
        if (!continuar) {
            return;
        }

        await enviarAcaoTfmAberto({
            acao: "adicionarHorasTfmAberto",
            tfm: horasTfmId.value,
            dataTrabalhada: horasTfmData.value,
            atividade: horasTfmAtividade.value.trim(),
            horas,
            observacao,
            nomeColaborador: usuarioAtual.nome,
            matriculaColaborador: usuarioAtual.matricula
        });
        await carregarTfmsAbertos();
        formHorasTfmAberto.hidden = true;
        mostrarFeedback("Horas adicionadas ao TFM em andamento.", "sucesso");
        await consultarAlertasDisponibilidade(usuarioAtual);
    } catch (erro) {
        mostrarFeedbackPainel(horasTfmFeedback, erro.message, "erro");
    } finally {
        botao.disabled = false;
    }
}

async function finalizarTfmAberto(tfm) {
    if (!window.confirm(`Finalizar o TFM ${tfm} e enviar todos os lançamentos para a planilha do BI? Esta ação é definitiva.`)) return;

    try {
        const respostaDetalhes = await fetch(`${SCRIPT_URL}?acao=detalharTfmAberto&tfm=${encodeURIComponent(tfm)}&matriculaHost=${encodeURIComponent(usuarioAtual.matricula)}`);
        const detalhes = await respostaDetalhes.json();
        if (!respostaDetalhes.ok || !detalhes.sucesso) {
            throw new Error(detalhes.erro || "Não foi possível verificar os lançamentos do TFM.");
        }

        const lancamentos = detalhes.registros.map((registro) => ({
            nome: registro.nome,
            matricula: registro.matricula,
            data: normalizarDataInput(registro.data),
            horas: registro.horas || registro.horasAdicionais
        }));
        const continuar = await confirmarLimiteDiario(lancamentos, {
            tfmIgnorado: tfm,
            mostrarDatas: true
        });
        if (!continuar) {
            return;
        }

        const resultado = await enviarAcaoTfmAberto({
            acao: "fecharTfmAberto",
            tfm,
            dataFinal: new Date().toISOString().slice(0, 10),
            matriculaHost: usuarioAtual.matricula
        });
        mostrarFeedback(`TFM ${tfm} finalizado. ${resultado.linhasTransferidas} lançamento(s) enviado(s) ao BI.`, "sucesso");
        await carregarTfmsAbertos();
        await carregarDesempenhoColaborador();
        await consultarAlertasDisponibilidade(usuarioAtual);
    } catch (erro) {
        mostrarFeedback(erro.message, "erro");
    }
}

function obterMatriculaDesempenho() {
    return String(usuarioAtual?.matricula || matriculaInput?.value || "").trim();
}

function obterHistoricoUsuarioAtual() {
    const matricula = obterMatriculaDesempenho();

    if (!matricula) {
        return [];
    }

    return obterHistorico().filter((item) => String(item.matricula || "").trim() === matricula);
}

function obterRegistrosDesempenho() {
    const matricula = obterMatriculaDesempenho();

    if (Array.isArray(desempenhoRegistrosPlanilha) && desempenhoPlanilhaMatricula === matricula) {
        return desempenhoRegistrosPlanilha.filter((item) => String(item.matricula || "").trim() === matricula);
    }

    return [];
}

function obterDataRegistroDesempenho(registro) {
    return normalizarDataInput(registro.data);
}

function obterPeriodoDesempenho() {
    return {
        inicio: desempenhoPeriodoInicio?.value || "",
        fim: desempenhoPeriodoFim?.value || ""
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

function atualizarInfoPeriodoDesempenho(totalBanco, totalFiltrado) {
    if (!desempenhoPeriodoInfo) {
        return;
    }

    const { inicio, fim } = obterPeriodoDesempenho();

    if (inicio || fim) {
        const inicioTexto = inicio ? formatarData(inicio) : "início";
        const fimTexto = fim ? formatarData(fim) : "hoje";
        desempenhoPeriodoInfo.textContent = `${totalFiltrado} de ${totalBanco} registro(s) no período de ${inicioTexto} a ${fimTexto}.`;
        return;
    }

    desempenhoPeriodoInfo.textContent = `${totalBanco} registro(s) carregado(s) do banco de dados.`;
}

async function carregarDesempenhoColaborador() {
    const matricula = obterMatriculaDesempenho();
    const requisicao = desempenhoRequisicaoAtual + 1;
    desempenhoRequisicaoAtual = requisicao;

    if (!matricula) {
        desempenhoRegistrosPlanilha = null;
        desempenhoPlanilhaMatricula = "";
        desempenhoCarregando = false;
        desempenhoErro = "Entre com sua matrícula para carregar seu desempenho do banco de dados.";
        atualizarDesempenho();
        return;
    }

    if (desempenhoPlanilhaMatricula !== matricula) {
        desempenhoRegistrosPlanilha = null;
        desempenhoPlanilhaMatricula = "";
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

        if (requisicao !== desempenhoRequisicaoAtual || matricula !== obterMatriculaDesempenho()) {
            return;
        }

        desempenhoRegistrosPlanilha = dados.registros;
        desempenhoPlanilhaMatricula = matricula;
        desempenhoErro = "";
    } catch (erro) {
        if (requisicao === desempenhoRequisicaoAtual) {
            desempenhoRegistrosPlanilha = null;
            desempenhoPlanilhaMatricula = "";
            desempenhoErro = erro.name === "AbortError"
                ? "A consulta ao banco demorou mais que o esperado. Tente abrir Meu Desempenho novamente."
                : "Não foi possível carregar o desempenho do banco de dados. Publique a versão atualizada do Apps Script e tente novamente.";
            console.error(erro);
        }
    } finally {
        if (requisicao === desempenhoRequisicaoAtual) {
            desempenhoCarregando = false;
            atualizarDesempenho();
        }

        clearTimeout(timeoutConsulta);
    }
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
        const acumulado = atividades.get(atividade) || { atividade, horas: 0, registros: 0 };
        acumulado.horas += horas;
        acumulado.registros += 1;
        atividades.set(atividade, acumulado);

        if (data) {
            const dia = dias.get(data) || { data, horas: 0, registros: 0 };
            dia.horas += horas;
            dia.registros += 1;
            dias.set(data, dia);
        }
    });

    const ranking = [...atividades.values()].sort((primeira, segunda) => segunda.horas - primeira.horas || segunda.registros - primeira.registros);
    const timeline = [...dias.values()].sort((primeiro, segundo) => primeiro.data.localeCompare(segundo.data));
    const diasApontados = timeline.length;

    return {
        totalHoras,
        totalAtividades: registros.length,
        totalTfms: tfms.size,
        diasApontados,
        mediaDia: diasApontados ? totalHoras / diasApontados : 0,
        mediaAtividade: registros.length ? totalHoras / registros.length : 0,
        timeline,
        ranking
    };
}

function criarLinhaDesempenho(item, maiorHoras) {
    const linha = document.createElement("div");
    const topo = document.createElement("div");
    const nome = document.createElement("span");
    const horas = document.createElement("strong");
    const trilho = document.createElement("div");
    const barra = document.createElement("span");
    const detalhe = document.createElement("small");
    const largura = maiorHoras ? Math.max(8, (item.horas / maiorHoras) * 100) : 0;

    linha.className = "desempenho-barra-item";
    topo.className = "desempenho-barra-topo";
    trilho.className = "desempenho-barra-trilho";
    barra.className = "desempenho-barra-preenchimento";

    nome.textContent = item.atividade;
    horas.textContent = formatarHoras(item.horas);
    detalhe.textContent = `${item.registros} registro(s)`;
    barra.style.setProperty("--largura", `${largura}%`);

    topo.appendChild(nome);
    topo.appendChild(horas);
    trilho.appendChild(barra);
    linha.appendChild(topo);
    linha.appendChild(trilho);
    linha.appendChild(detalhe);

    return linha;
}

function renderizarCalendarioDesempenho(timeline) {
    if (!desempenhoCalendario) {
        return;
    }

    desempenhoCalendario.innerHTML = "";
    const maiorHoras = Math.max(...timeline.map((item) => item.horas), 0);

    if (!timeline.length) {
        const vazio = document.createElement("p");
        vazio.className = "desempenho-mini-vazio";
        vazio.textContent = "Sem datas para exibir no calendário.";
        desempenhoCalendario.appendChild(vazio);
        return;
    }

    timeline.slice(-35).forEach((item) => {
        const dia = document.createElement("div");
        const intensidade = maiorHoras ? item.horas / maiorHoras : 0;
        const opacidade = 0.08 + (intensidade * 0.34);

        dia.className = "desempenho-calendario-dia";
        dia.style.setProperty("--intensidade", intensidade.toFixed(2));
        dia.style.setProperty("--opacidade", opacidade.toFixed(2));
        dia.style.setProperty("--opacidade-suave", (opacidade * 0.72).toFixed(2));
        dia.innerHTML = `<span>${formatarData(item.data).slice(0, 5)}</span><strong>${formatarHoras(item.horas)}</strong>`;
        desempenhoCalendario.appendChild(dia);
    });
}

function atualizarDesempenho() {
    if (!desempenhoRanking) {
        return;
    }

    const registrosBanco = obterRegistrosDesempenho();
    const registrosFiltrados = filtrarRegistrosDesempenho(registrosBanco);
    const desempenho = consolidarDesempenho(registrosFiltrados);
    atualizarInfoPeriodoDesempenho(registrosBanco.length, registrosFiltrados.length);

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

    const maiorHoras = desempenho.ranking[0]?.horas || 0;
    desempenho.ranking.slice(0, 6).forEach((item) => {
        desempenhoRanking.appendChild(criarLinhaDesempenho(item, maiorHoras));
    });
    renderizarCalendarioDesempenho(desempenho.timeline);
}

function criarColunaOficinaGeral(item, maiorHoras) {
    const coluna = document.createElement("article");
    const topo = document.createElement("div");
    const barraArea = document.createElement("div");
    const barra = document.createElement("span");
    const rodape = document.createElement("div");
    const altura = maiorHoras ? Math.max(10, (item.horas / maiorHoras) * 100) : 0;

    coluna.className = "oficina-coluna";
    topo.className = "oficina-coluna-topo";
    barraArea.className = "oficina-coluna-area";
    barra.className = "oficina-coluna-barra";
    rodape.className = "oficina-coluna-rodape";

    barra.style.setProperty("--altura", `${altura}%`);
    topo.innerHTML = `<strong>${formatarHoras(item.horas)}</strong><span>${Number(item.tfms || 0).toLocaleString("pt-BR")} TFM(s)</span>`;
    rodape.textContent = item.atividade || "Atividade sem nome";

    barraArea.appendChild(barra);
    coluna.appendChild(topo);
    coluna.appendChild(barraArea);
    coluna.appendChild(rodape);
    return coluna;
}

function renderizarGeralOficina(atividades) {
    if (!oficinaGeralGrafico || !oficinaGeralStatus) {
        return;
    }

    oficinaGeralGrafico.innerHTML = "";
    const itens = Array.isArray(atividades) ? atividades : [];

    if (!itens.length) {
        oficinaGeralStatus.hidden = false;
        oficinaGeralStatus.textContent = "Nenhum dado geral encontrado no banco de dados.";
        return;
    }

    oficinaGeralStatus.hidden = true;
    const maiorHoras = Math.max(...itens.map((item) => Number(item.horas || 0)), 0);
    itens.forEach((item) => oficinaGeralGrafico.appendChild(criarColunaOficinaGeral(item, maiorHoras)));
}

async function carregarGeralOficina(forcarAtualizacao = false) {
    if (!oficinaGeralGrafico || !oficinaGeralStatus) {
        return;
    }

    if (oficinaGeralCarregada && !forcarAtualizacao) {
        return;
    }

    const requisicao = oficinaGeralRequisicaoAtual + 1;
    oficinaGeralRequisicaoAtual = requisicao;
    oficinaGeralStatus.hidden = false;
    oficinaGeralStatus.textContent = "Carregando dados gerais da oficina...";
    oficinaGeralGrafico.innerHTML = "";

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

        if (requisicao !== oficinaGeralRequisicaoAtual) {
            return;
        }

        oficinaGeralCarregada = true;
        renderizarGeralOficina(dados.atividades);
    } catch (erro) {
        if (requisicao === oficinaGeralRequisicaoAtual) {
            oficinaGeralCarregada = false;
            oficinaGeralStatus.hidden = false;
            oficinaGeralStatus.textContent = erro.name === "AbortError"
                ? "A consulta geral da oficina demorou mais que o esperado. Tente abrir a aba novamente."
                : "Não foi possível carregar o geral da oficina. Publique a versão atualizada do Apps Script e tente novamente.";
            console.error(erro);
        }
    } finally {
        clearTimeout(timeoutConsulta);
    }
}

function obterPeriodoRegistros(dados, registros) {
    const datas = [dados.dataInicioTfm, dados.dataFimTfm, dados.data, ...registros.map((registro) => registro.data)]
        .map(normalizarDataInput)
        .filter(Boolean)
        .sort();
    const datasUnicas = [...new Set(datas)];

    return {
        inicio: datasUnicas[0] || "",
        fim: datasUnicas[datasUnicas.length - 1] || "",
        variosDias: datasUnicas.length > 1
    };
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
                <span>Comprovante de registro</span>
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
                        <div><span>Dias e horas</span><strong>${(colaborador.lancamentos || []).map((lancamento) => `${formatarData(lancamento.data)}: ${formatarHoras(lancamento.horas)}`).join(" · ") || "-"}</strong></div>
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
    const totalHoras = registros.reduce((total, registro) => total + converterHorasNumero(registro.horas), 0);
    const periodo = obterPeriodoRegistros(dados, registros);

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
            link.innerHTML = `<i class="bi bi-box-arrow-up-right"></i> ${linksDocumento.length > 1 ? `Anexo ${index + 1}` : "Abrir anexos"}`;
            linksContainer.appendChild(link);
        });

        cabecalho.appendChild(linksContainer);
    }

    const matriculaHost = String(dados.matricula || "").trim();
    const matriculaLogada = String(usuarioAtual?.matricula || "").trim();

    if (matriculaLogada && matriculaLogada === matriculaHost) {
        const botaoEditar = document.createElement("button");
        botaoEditar.type = "button";
        botaoEditar.className = "btn-carregar-tfm";
        botaoEditar.innerHTML = `<i class="bi bi-pencil-square"></i> Editar no formulário`;
        botaoEditar.addEventListener("click", () => carregarTfmNoFormulario(dados));
        cabecalho.appendChild(botaoEditar);
    } else if (usuarioAtual && matriculaHost) {
        const avisoEdicao = document.createElement("div");
        avisoEdicao.className = "aviso-edicao-host";
        avisoEdicao.innerHTML = `
            <i class="bi bi-lock"></i>
            <span>Entre na conta do responsável por este TFM para editá-lo.</span>
        `;
        cabecalho.appendChild(avisoEdicao);
    }

    const resumo = document.createElement("div");
    resumo.className = "resultado-info-grid";
    if (periodo.variosDias) {
        resumo.appendChild(criarLinhaResumo("Início do TFM", formatarData(periodo.inicio)));
        resumo.appendChild(criarLinhaResumo("Fim do TFM", formatarData(periodo.fim)));
    } else {
        resumo.appendChild(criarLinhaResumo("Data", formatarData(periodo.inicio || dados.data)));
    }
    resumo.appendChild(criarLinhaResumo("Horas totais", formatarHoras(totalHoras)));
    resumo.appendChild(criarLinhaResumo("Atividades", registros.length || "-"));
    resumo.appendChild(criarLinhaResumo("Matrícula", dados.matricula));
    resumo.appendChild(criarLinhaResumo("Turno", dados.turno));
    resumo.appendChild(criarLinhaResumo("Projeto", dados.projeto));
    resumo.appendChild(criarLinhaResumo("Documento", dados.nomeDocumento || "Sem documento anexado"));

    const colaboradoresAdicionais = Array.isArray(dados.colaboradoresAdicionais) ? dados.colaboradoresAdicionais : [];

    const atividades = document.createElement("div");
    atividades.className = "resultado-atividades";

    const tituloAtividades = document.createElement("strong");
    tituloAtividades.textContent = `Atividades registradas${registros.length ? ` (${registros.length})` : ""}`;
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
                <div><span>Dias e horas</span><strong>${(colaborador.lancamentos || []).map((lancamento) => `${formatarData(lancamento.data)}: ${formatarHoras(lancamento.horas)}`).join(" · ") || "-"}</strong></div>
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
        mostrarCarregamentoBusca(tfms.length);
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
        pararAnimacaoConsulta();
        alterarEstadoBuscando(false);
    }
}

async function enviarSugestaoAtividade() {
    const atividade = sugestaoAtividadeInput.value.trim();
    const observacao = sugestaoObservacaoInput.value.trim();
    const nomeColaborador = (usuarioAtual?.nome || document.getElementById("nome").value).trim();
    const matriculaColaborador = (usuarioAtual?.matricula || matriculaInput.value).trim();

    if (atividade.length < 3 || !observacao) {
        mostrarFeedback("Digite a atividade sugerida e uma observação antes de enviar.", "erro");
        (atividade.length < 3 ? sugestaoAtividadeInput : sugestaoObservacaoInput).focus();
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

    if (feedback.length < 3 || !observacao) {
        mostrarFeedback("Digite o feedback e uma observação antes de enviar.", "erro");
        (feedback.length < 3 ? feedbackTextoInput : feedbackObservacaoInput).focus();
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
    const matriculaHost = String(dados.matricula || "").trim();
    const matriculaLogada = String(usuarioAtual?.matricula || "").trim();

    if (!matriculaLogada || matriculaLogada !== matriculaHost) {
        mostrarFeedback("Entre na conta do responsável por este TFM para editá-lo.", "erro");
        return;
    }

    const dataInicio = normalizarDataInput(dados.dataInicioTfm || dados.data);
    const dataFim = normalizarDataInput(dados.dataFimTfm || dados.dataInicioTfm || dados.data);

    // Armazenar qual linha está sendo editada
    linhaEditando = dados.linhaEditando || null;

    document.getElementById("data-inicio-tfm").value = dataInicio;
    document.getElementById("data-fim-tfm").value = dataFim;
    document.getElementById("nome").value = dados.nome || "";
    document.getElementById("matricula").value = dados.matricula || "";
    document.getElementById("turno").value = dados.turno || "";
    document.getElementById("tfm").value = dados.tfm || "";
    document.getElementById("projeto").value = dados.projeto || "";
    renderizarColaboradoresAdicionais(Array.isArray(dados.colaboradoresAdicionais) ? dados.colaboradoresAdicionais : []);

    const registros = Array.isArray(dados.registros) ? dados.registros : [];
    const dadosEdicao = consolidarRegistrosParaEdicao(registros);
    document.querySelectorAll(".detalhes-item").forEach((item, index) => {
        if (index > 0) {
            item.remove();
        }
    });

    const primeiroItem = document.querySelector(".detalhes-item");
    const itens = dadosEdicao.atividades.length ? dadosEdicao.atividades : [{ atividade: "", observacao: "", horas: "" }];
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
    preencherDistribuicaoManual(dadosEdicao.horasPorDia);
    fecharModalTfm();
    alternarAppTab("registro"); // Redireciona para a aba de dados
    mostrarFeedback("Dados carregados no formulário. Confira antes de salvar novamente.", "aviso");
}

function validarFormulario() {
    const tfmInput = document.getElementById("tfm");
    const dataInicioInput = document.getElementById("data-inicio-tfm");
    const dataFimInput = document.getElementById("data-fim-tfm");
    let valido = form.checkValidity();

    for (const atividadeInput of document.querySelectorAll(".detalhes-item .atividade-input")) {
        if (!validarAtividadeCadastrada(atividadeInput)) {
            mostrarAvisoAtividadeNaoCadastrada(atividadeInput.value);
            return false;
        }

        const observacaoInput = atividadeInput.closest(".detalhes-item")?.querySelector(".observacao-input");
        if (!observacaoInput?.value.trim()) {
            marcarCampo(observacaoInput, true, "Informe uma observação sobre a atividade.");
            mostrarFeedback("Todas as atividades precisam de observação.", "erro");
            if (observacaoInput.type === "hidden") {
                abrirModalAtividade(atividadeInput.closest(".detalhes-item"));
            } else {
                observacaoInput.focus();
            }
            return false;
        }
    }

    marcarCampo(tfmInput, !/^[0-9]{6}$/.test(tfmInput.value.trim()), "O TFM precisa ter exatamente 6 números.");
    marcarCampo(dataInicioInput, !dataInicioInput.value, "Informe a data inicial do TFM.");
    marcarCampo(dataFimInput, !dataFimInput.value || dataFimInput.value < dataInicioInput.value, "Informe uma data final igual ou posterior ao início.");

    for (const item of document.querySelectorAll(".colaborador-adicional-item")) {
        const nomeInput = item.querySelector(".colaborador-adicional-nome");
        const nome = nomeInput.value.trim();
        const lancamentos = obterLancamentosColaboradorItem(item);
        const lancamentoForaPeriodo = lancamentos.find((lancamento) => (
            !lancamento.data
            || lancamento.data < dataInicioInput.value
            || lancamento.data > dataFimInput.value
            || converterHorasNumero(lancamento.horas) <= 0
        ));

        marcarCampo(nomeInput, !nome, "Informe o nome do colaborador.");

        if (!nome || !lancamentos.length || lancamentoForaPeriodo) {
            mostrarFeedback("Cada colaborador adicional precisa ter datas válidas dentro do período e horas maiores que zero.", "erro");
            nomeInput.focus();
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

    if (criarDatasUteisPeriodo(dataInicioInput.value, dataFimInput.value).length === 0) {
        valido = false;
        mostrarFeedback("O período do TFM precisa ter pelo menos um dia de segunda a sábado.", "erro");
        dataInicioInput.focus();
        return false;
    }

    if (distribuicaoManualToggle?.checked) {
        const distribuicaoManual = coletarDistribuicaoManualDiaria();
        const totalManual = distribuicaoManual.reduce((total, dia) => total + converterHorasNumero(dia.horas), 0);
        const totalAtividades = somarHorasAtividadesFormulario();
        const campoIncompleto = distribuicaoManual.find((dia) => !dia.input.value.trim());

        distribuicaoManual.forEach((dia) => {
            marcarCampo(dia.input, !dia.input.value.trim(), "Informe as horas desse dia ou desative a distribuição manual.");
        });

        if (campoIncompleto) {
            mostrarFeedback("Preencha as horas de todos os dias ou desative a distribuição manual.", "erro");
            campoIncompleto.input.focus();
            return false;
        }

        if (Math.abs(totalManual - totalAtividades) > 0.01) {
            mostrarFeedback(`A soma das horas por dia precisa ser igual ao total das atividades (${formatarHoras(totalAtividades)}).`, "erro");
            distribuicaoManual[0]?.input.focus();
            return false;
        }
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
    const distribuicaoManual = coletarDistribuicaoManualDiaria();
    const usarDistribuicaoManual = distribuicaoManual.length > 0;
    const atividadesDistribuidas = atividades.map((atividade) => ({
        ...atividade,
        distribuicaoDiaria: usarDistribuicaoManual
            ? distribuirHorasManuaisPorAtividade(atividade, atividades, distribuicaoManual)
            : distribuirHorasNoPeriodo(atividade.horas, dataInicioTfm, dataFimTfm)
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
        distribuicaoManualAtiva: usarDistribuicaoManual,
        atividades: atividadesDistribuidas,
        distribuicaoDiaria: atividadesDistribuidas.flatMap((atividade) => (
            atividade.distribuicaoDiaria.map((dia) => ({
                data: dia.data,
                horas: dia.horas,
                atividade: atividade.atividade,
                observacao: atividade.observacao
            }))
        )),
        linhaEditando: linhaEditando,
        matriculaUsuarioEditor: String(usuarioAtual?.matricula || "").trim()
    };
}

async function salvarApontamentoConfirmado() {
    if (!apontamentoPendente || btnSalvar.disabled) {
        return;
    }

    const dados = apontamentoPendente;

    // Enviar informação sobre qual linha está sendo editada
    if (linhaEditando) {
        dados.linhaEditando = linhaEditando;
    }

    try {
        if (!linhaEditando) {
            alterarEstadoConfirmacaoSalvamento(true, "Verificando horas...");
            const continuar = await confirmarLimiteDiario(criarLancamentosVerificacaoApontamento(dados));
            alterarEstadoConfirmacaoSalvamento(false);
            if (!continuar) {
                return;
            }
        }

        iniciarAnimacaoSalvamento();

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
            throw new Error(resultado.erro || "Erro ao salvar registro.");
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
        await carregarDesempenhoColaborador();

        pararAnimacaoSalvamento();
        fecharModalRevisao();
        mostrarFeedback("Dados enviados com sucesso!", "sucesso");
        form.reset();
        configurarDataAtual();
        alternarDistribuicaoManual();
        if (usuarioAtual) {
            document.getElementById("nome").value = usuarioAtual.nome;
            matriculaInput.value = usuarioAtual.matricula;
        }
        document.querySelectorAll(".documento-input").forEach((inputDocumento) => {
            if (inputDocumento.limparDocumentos) {
                inputDocumento.limparDocumentos();
            }
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
        linhaEditando = null; // Limpar a informação de edição
        await carregarHistoricoPlanilha();
        if (usuarioAtual) {
            await consultarAlertasDisponibilidade(usuarioAtual);
        }
    } catch (erro) {
        pararAnimacaoSalvamento();
        mostrarErroSalvamento(erro.message || "Erro ao salvar!");
        console.error(erro);
    } finally {
        pararAnimacaoSalvamento();
        alterarEstadoSalvando(false);
        alterarEstadoConfirmacaoSalvamento(false);
        atualizarResumo();
    }
}

document.querySelectorAll(".atividade-input").forEach((input) => configurarAutocomplete(input, atividadesDisponiveis, () => atualizarTempoPadraoInput(input), () => atualizarTempoPadraoInput(input)));
configurarAutocomplete(modalAtividadeInput, atividadesDisponiveis, () => atualizarTempoPadraoInput(modalAtividadeInput, modalTempoPadrao), () => atualizarTempoPadraoInput(modalAtividadeInput, modalTempoPadrao));
configurarAutocomplete(modalColaboradorNomeInput, colaboradoresDisponiveis, atualizarMatriculaModalColaborador, atualizarMatriculaModalColaborador);
document.querySelectorAll(".colaborador-input").forEach((input) => configurarAutocomplete(input, colaboradoresDisponiveis, atualizarMatriculaPorNome, atualizarMatriculaPorNome));
configurarAutocomplete(loginNomeInput, colaboradoresDisponiveis, atualizarMatriculaLoginPorNome, atualizarMatriculaLoginPorNome);
configurarAutocomplete(horasTfmAtividade, atividadesDisponiveis);
document.querySelectorAll(".documento-input").forEach(configurarDocumento);

function alternarTfmAbertoView(view) {
    document.querySelectorAll("[data-tfm-aberto-view]").forEach((botao) => {
        botao.classList.toggle("tfm-aberto-nav-btn-ativo", botao.dataset.tfmAbertoView === view);
    });

    document.querySelectorAll("[data-tfm-aberto-panel]").forEach((painel) => {
        painel.hidden = painel.dataset.tfmAbertoPanel !== view;
    });

    if (view === "andamento") {
        carregarTfmsAbertos();
    }
}

function alternarAppTab(aba) {
    document.querySelectorAll(".app-nav-btn").forEach((item) => {
        item.classList.toggle("app-nav-btn-ativo", item.dataset.appTab === aba);
    });

    document.querySelectorAll(".app-tab-panel").forEach((painel) => {
        const ativo = painel.dataset.appPanel === aba;
        painel.hidden = !ativo;
        painel.classList.toggle("app-tab-panel-ativo", ativo);
    });

    if (aba === "desempenho") {
        carregarDesempenhoColaborador();
    }

    if (aba === "geral-oficina") {
        carregarGeralOficina();
    }

    if (aba === "abrir-tfm" && abertoDataInicial && !abertoDataInicial.value) {
        abertoDataInicial.value = new Date().toISOString().slice(0, 10);
    }

    if (aba === "abrir-tfm") {
        alternarTfmAbertoView("dados");
    }
}

function aplicarAtalhoPeriodoDesempenho(periodo) {
    if (!desempenhoPeriodoInicio || !desempenhoPeriodoFim) {
        return;
    }

    if (periodo === "todos") {
        desempenhoPeriodoInicio.value = "";
        desempenhoPeriodoFim.value = "";
        atualizarDesempenho();
        return;
    }

    const dias = Number(periodo);
    const extremos = obterDatasExtremasDesempenho(obterRegistrosDesempenho());
    const dataFim = extremos.fim || new Date().toISOString().slice(0, 10);
    const dataInicio = criarDataLocal(dataFim);
    dataInicio.setDate(dataInicio.getDate() - Math.max(dias - 1, 0));

    desempenhoPeriodoInicio.value = dataInicio.toISOString().slice(0, 10);
    desempenhoPeriodoFim.value = dataFim;
    atualizarDesempenho();
}

document.querySelectorAll(".app-nav-btn[data-app-tab]").forEach((botao) => {
    botao.addEventListener("click", () => {
        alternarAppTab(botao.dataset.appTab);
    });
});

document.getElementById("btn-bi-oficina")?.addEventListener("click", () => {
    avisoBiOficina.hidden = false;
});

btnFecharAvisoBiOficina?.addEventListener("click", () => {
    avisoBiOficina.hidden = true;
});

avisoBiOficina?.addEventListener("click", (event) => {
    if (event.target === avisoBiOficina) {
        avisoBiOficina.hidden = true;
    }
});

temposPadraoBusca?.addEventListener("input", renderizarTemposPadrao);
window.addEventListener("focus", () => carregarTemposPadrao(true));

document.querySelectorAll("[data-tfm-aberto-view]").forEach((botao) => {
    botao.addEventListener("click", () => alternarTfmAbertoView(botao.dataset.tfmAbertoView));
});

[desempenhoPeriodoInicio, desempenhoPeriodoFim].forEach((input) => {
    input?.addEventListener("input", atualizarDesempenho);
    input?.addEventListener("change", atualizarDesempenho);
});

document.querySelectorAll("[data-desempenho-periodo]").forEach((botao) => {
    botao.addEventListener("click", () => aplicarAtalhoPeriodoDesempenho(botao.dataset.desempenhoPeriodo));
});

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

detalhesContainer.addEventListener("input", (event) => {
    if (!event.target.matches(".horas-input")) {
        return;
    }

    aplicarSeparadorDecimalPonto(event.target);
    atualizarResumoDistribuicaoManual();
});

distribuicaoManualToggle?.addEventListener("change", alternarDistribuicaoManual);
distribuicaoManualLista?.addEventListener("input", (event) => {
    if (!event.target.matches(".distribuicao-manual-horas")) {
        return;
    }

    aplicarSeparadorDecimalPonto(event.target);
    marcarCampo(event.target, false);
    atualizarResumoDistribuicaoManual();
});

[obterDataInicioTfmInput(), obterDataFimTfmInput()].forEach((input) => {
    input?.addEventListener("input", renderizarCamposDistribuicaoManual);
    input?.addEventListener("change", renderizarCamposDistribuicaoManual);
});

modalHorasInput.addEventListener("input", () => {
    aplicarSeparadorDecimalPonto(modalHorasInput);
});

btnBuscar.addEventListener("click", buscarDocumentoTfm);
formAbrirTfm?.addEventListener("submit", abrirNovoTfm);
formHorasTfmAberto?.addEventListener("submit", adicionarHorasAoTfm);
btnAtualizarTfmsAbertos?.addEventListener("click", carregarTfmsAbertos);
btnFecharFormHoras?.addEventListener("click", () => {
    formHorasTfmAberto.hidden = true;
});
tfmsAbertosLista?.addEventListener("click", (event) => {
    const botaoHoras = event.target.closest("[data-adicionar-horas]");
    const botaoFinalizar = event.target.closest("[data-finalizar-tfm]");

    if (botaoHoras) {
        abrirFormularioHoras(botaoHoras.dataset.adicionarHoras);
    }

    if (botaoFinalizar) {
        finalizarTfmAberto(botaoFinalizar.dataset.finalizarTfm);
    }
});
resultadoBuscaBackdrop.addEventListener("click", limparResultadoBusca);
btnAbrirSugestao?.addEventListener("click", abrirModalSugestao);
btnAbrirFeedback?.addEventListener("click", abrirModalFeedback);
btnSugerirAtividade.addEventListener("click", enviarSugestaoAtividade);
btnEnviarFeedback.addEventListener("click", enviarFeedbackColaborador);
btnConfirmarAtividade.addEventListener("click", adicionarAtividadeDoModal);
btnConfirmarColaborador.addEventListener("click", adicionarColaboradorDoModal);
btnAdicionarDiaColaborador.addEventListener("click", adicionarLancamentoColaboradorDoModal);
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
modalColaboradorLancamentos.addEventListener("click", (event) => {
    const botao = event.target.closest("[data-remover-lancamento-colaborador]");
    if (!botao) return;
    lancamentosColaboradorModal.splice(Number(botao.dataset.removerLancamentoColaborador), 1);
    renderizarLancamentosColaboradorModal();
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

document.querySelectorAll("[data-fechar-documentos]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalDocumentos);
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
botoesHelpSugestao.forEach((botao) => {
    botao.addEventListener("click", () => {
        fecharModalHelp();
        abrirModalSugestao();
    });
});
botoesHelpFeedback.forEach((botao) => {
    botao.addEventListener("click", () => {
        fecharModalHelp();
        abrirModalFeedback();
    });
});
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

    if (event.target.matches("#aberto-tfm")) {
        limitarParaNumeros(event.target, 6);
    }

    if (event.target.matches("#horas-tfm-quantidade")) {
        aplicarSeparadorDecimalPonto(event.target);
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

    if (event.key === "Escape" && modalSugestao && !modalSugestao.hidden) {
        fecharModalSugestao();
    }

    if (event.key === "Escape" && modalFeedback && !modalFeedback.hidden) {
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
        mostrarFeedback(erro.message || "Erro ao preparar revisão do registro.", "erro");
        console.error(erro);
    }
});

configurarDataAtual();
carregarTemposPadrao();
renderizarHistorico();
carregarResumoPlanilha();
carregarHistoricoPlanilha();
exigirLogin();
