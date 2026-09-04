const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";
const LOGIN_CHAVE = "stellantisUsuarioLogado";

const usuarioAtual = obterLoginSalvo();
const usuarioContainer = document.getElementById("usuario-tfm-aberto");
const usuarioNome = document.getElementById("usuario-tfm-aberto-nome");
const formAbrirTfm = document.getElementById("form-abrir-tfm");
const abertoDataInicial = document.getElementById("aberto-data-inicial");
const abertoTurno = document.getElementById("aberto-turno");
const abertoTfm = document.getElementById("aberto-tfm");
const abertoProjeto = document.getElementById("aberto-projeto");
const abertoNomeHost = document.getElementById("aberto-nome-host");
const abertoMatriculaHost = document.getElementById("aberto-matricula-host");
const abertoAutorizado = document.getElementById("aberto-autorizado");
const abertoAutorizadoOpcoes = document.getElementById("aberto-autorizado-opcoes");
const abertoAutorizadosLista = document.getElementById("aberto-autorizados-lista");
const abertoAtividade = document.getElementById("aberto-atividade");
const abertoAtividadeOpcoes = document.getElementById("aberto-atividade-opcoes");
const abertoHoras = document.getElementById("aberto-horas");
const abertoObservacao = document.getElementById("aberto-observacao");
const abertoDocumentos = document.getElementById("aberto-documentos");
const abertoDocumentosNome = document.getElementById("aberto-documentos-nome");
const abertoDocumentosPreview = document.getElementById("aberto-documentos-preview");
const abertoFeedback = document.getElementById("aberto-feedback");
const tfmsAbertosStatus = document.getElementById("tfms-abertos-status");
const tfmsAbertosLista = document.getElementById("tfms-abertos-lista");
const buscaTfmsAbertos = document.getElementById("busca-tfms-abertos");
const btnLimparBuscaTfms = document.getElementById("btn-limpar-busca-tfms");
const tfmsAbertosContagem = document.getElementById("tfms-abertos-contagem");
const btnAtualizarTfmsAbertos = document.getElementById("btn-atualizar-tfms-abertos");
const formHorasTfmAberto = document.getElementById("form-horas-tfm-aberto");
const modalHorasTfmAberto = document.getElementById("modal-horas-tfm-aberto");
const modalAtividadeHoras = document.getElementById("modal-atividade-horas");
const formAtividadeHoras = document.getElementById("form-atividade-horas");
const modalColaboradorHoras = document.getElementById("modal-colaborador-horas");
const formColaboradorHoras = document.getElementById("form-colaborador-horas");
const modalFinalizarTfm = document.getElementById("modal-finalizar-tfm");
const horasTfmNumero = document.getElementById("horas-tfm-numero");
const horasTfmId = document.getElementById("horas-tfm-id");
const horasTfmData = document.getElementById("horas-tfm-data");
const horasTfmQuantidade = document.getElementById("horas-tfm-quantidade");
const horasColaboradorNome = document.getElementById("horas-colaborador-nome");
const horasColaboradorMatricula = document.getElementById("horas-colaborador-matricula");
const horasColaboradorOpcoes = document.getElementById("horas-colaborador-opcoes");
const horasColaboradorQuantidade = document.getElementById("horas-colaborador-quantidade");
const colaboradoresLancamentoLista = document.getElementById("horas-tfm-colaboradores");
const btnAdicionarColaboradorHoras = document.getElementById("btn-adicionar-colaborador-horas");
const btnFecharColaboradorHoras = document.getElementById("btn-fechar-colaborador-horas");
const colaboradorHorasFeedback = document.getElementById("colaborador-horas-feedback");
const finalizarTfmNumero = document.getElementById("finalizar-tfm-numero");
const finalizarTfmResumo = document.getElementById("finalizar-tfm-resumo");
const finalizarTfmLancamentos = document.getElementById("finalizar-tfm-lancamentos");
const finalizarTfmFeedback = document.getElementById("finalizar-tfm-feedback");
const btnFecharFinalizarTfm = document.getElementById("btn-fechar-finalizar-tfm");
const btnCancelarFinalizarTfm = document.getElementById("btn-cancelar-finalizar-tfm");
const btnConfirmarFinalizarTfm = document.getElementById("btn-confirmar-finalizar-tfm");
const modalEditarLancamentos = document.getElementById("modal-editar-lancamentos");
const editarLancamentosNumero = document.getElementById("editar-lancamentos-numero");
const editarLancamentosLista = document.getElementById("editar-lancamentos-lista");
const editarLancamentosFeedback = document.getElementById("editar-lancamentos-feedback");
const btnFecharEditarLancamentos = document.getElementById("btn-fechar-editar-lancamentos");
const btnCancelarEditarLancamentos = document.getElementById("btn-cancelar-editar-lancamentos");
const btnSalvarEditarLancamentos = document.getElementById("btn-salvar-editar-lancamentos");
const modalCancelarTfm = document.getElementById("modal-cancelar-tfm");
const modalLimiteHoras = document.getElementById("modal-limite-horas");
const btnContinuarLimiteHoras = document.getElementById("btn-continuar-limite-horas");
const btnCancelarLimiteHoras = modalLimiteHoras.querySelector(".modal-limite-horas-cancelar");
const tituloLimiteHoras = document.getElementById("modal-limite-horas-titulo");
const textoLimiteHoras = document.getElementById("modal-limite-horas-texto");
const cancelarTfmNumero = document.getElementById("cancelar-tfm-numero");
const cancelarTfmConfirmacao = document.getElementById("cancelar-tfm-confirmacao");
const cancelarTfmFeedback = document.getElementById("cancelar-tfm-feedback");
const btnFecharCancelarTfm = document.getElementById("btn-fechar-cancelar-tfm");
const btnVoltarCancelarTfm = document.getElementById("btn-voltar-cancelar-tfm");
const btnConfirmarCancelarTfm = document.getElementById("btn-confirmar-cancelar-tfm");
const horasTfmObservacao = document.getElementById("horas-tfm-observacao");
const horasTfmFeedback = document.getElementById("horas-tfm-feedback");
const btnFecharFormHoras = document.getElementById("btn-fechar-form-horas");
const atividadesExtrasLista = document.getElementById("horas-tfm-atividades-extras");
const btnAdicionarAtividadeHoras = document.getElementById("btn-adicionar-atividade-horas");
const btnFecharAtividadeHoras = document.getElementById("btn-fechar-atividade-horas");
const atividadeHorasNome = document.getElementById("atividade-horas-nome");
const atividadeHorasOpcoes = document.getElementById("atividade-horas-opcoes");
const atividadeHorasQuantidade = document.getElementById("atividade-horas-quantidade");
const atividadeHorasObservacao = document.getElementById("atividade-horas-observacao");
const atividadeHorasFeedback = document.getElementById("atividade-horas-feedback");
const atividadesDisponiveis = Array.isArray(window.ATIVIDADES_DISPONIVEIS) ? window.ATIVIDADES_DISPONIVEIS : [];
const tiposDocumentoPermitidos = ["application/pdf", "image/png", "image/jpeg"];
const arquivosAbertura = [];
let tfmsAbertosCarregados = [];
let atividadesExtrasLancamento = [];
let colaboradoresExtrasLancamento = [];
let tfmPendenteFinalizacao = "";
let tfmPendenteEdicao = "";
let tfmPendenteCancelamento = "";
let lancamentosPendenteFinalizacao = [];
let resolverConfirmacaoLimiteHoras = null;
let focoAntesConfirmacaoLimite = null;
let colaboradoresAutorizados = [];
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

function obterLoginSalvo() {
    try {
        return JSON.parse(localStorage.getItem(LOGIN_CHAVE));
    } catch (erro) {
        return null;
    }
}

function aplicarLogin() {
    if (!usuarioAtual?.nome || !usuarioAtual?.matricula) {
        window.location.href = "index.html";
        return false;
    }

    usuarioNome.textContent = usuarioAtual.nome;
    abertoNomeHost.value = usuarioAtual.nome;
    abertoMatriculaHost.value = usuarioAtual.matricula;
    usuarioContainer.hidden = false;
    return true;
}

function normalizarTexto(valor) {
    return String(valor || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function atividadeValida(valor) {
    const normalizado = normalizarTexto(valor.trim());
    return atividadesDisponiveis.some((atividade) => normalizarTexto(atividade) === normalizado);
}

async function carregarAtividadesDisponiveis() {
    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=listarTemposPadrao&_=${Date.now()}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso || !Array.isArray(dados.atividades)) return;

        dados.atividades.forEach((item) => {
            const atividade = String(item.atividade || "").trim();
            if (atividade && !atividadeValida(atividade)) atividadesDisponiveis.push(atividade);
        });
        atividadesDisponiveis.sort((primeira, segunda) => primeira.localeCompare(segunda, "pt-BR"));
    } catch (erro) {
        console.error("Não foi possível atualizar a lista de atividades.", erro);
    }
}

function configurarBuscaAtividade(input, lista) {
    let indiceAtivo = -1;

    function fechar() {
        lista.hidden = true;
        input.setAttribute("aria-expanded", "false");
        input.removeAttribute("aria-activedescendant");
        indiceAtivo = -1;
    }

    function selecionar(atividade) {
        input.value = atividade;
        input.setCustomValidity("");
        fechar();
    }

    function destacar(indice) {
        const opcoes = Array.from(lista.querySelectorAll("button"));
        if (!opcoes.length) return;
        indiceAtivo = Math.max(0, Math.min(indice, opcoes.length - 1));
        opcoes.forEach((opcao, indiceOpcao) => opcao.setAttribute("aria-selected", String(indiceOpcao === indiceAtivo)));
        input.setAttribute("aria-activedescendant", opcoes[indiceAtivo].id);
        opcoes[indiceAtivo].scrollIntoView({ block: "nearest" });
    }

    function renderizar() {
        const termos = normalizarTexto(input.value).split(/\s+/).filter(Boolean);
        const filtradas = atividadesDisponiveis.filter((atividade) => {
            const texto = normalizarTexto(atividade);
            return termos.every((termo) => texto.includes(termo));
        });
        lista.innerHTML = "";
        indiceAtivo = -1;

        filtradas.forEach((atividade, indice) => {
            const opcao = document.createElement("button");
            opcao.type = "button";
            opcao.id = `${lista.id}-opcao-${indice}`;
            opcao.setAttribute("role", "option");
            opcao.setAttribute("aria-selected", "false");
            opcao.textContent = atividade;
            opcao.addEventListener("mousedown", (event) => event.preventDefault());
            opcao.addEventListener("click", () => selecionar(atividade));
            lista.appendChild(opcao);
        });

        if (!filtradas.length) {
            const vazio = document.createElement("p");
            vazio.textContent = "Nenhuma atividade encontrada.";
            lista.appendChild(vazio);
        }

        lista.hidden = false;
        input.setAttribute("aria-expanded", "true");
    }

    input.addEventListener("focus", renderizar);
    input.addEventListener("input", () => {
        input.setCustomValidity("");
        renderizar();
    });
    input.addEventListener("blur", () => {
        if (input.value && !atividadeValida(input.value)) {
            input.setCustomValidity("Selecione uma atividade disponível na lista.");
        }
        fechar();
    });
    input.addEventListener("keydown", (event) => {
        const opcoes = Array.from(lista.querySelectorAll("button"));
        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (lista.hidden) renderizar();
            destacar(indiceAtivo + 1);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            destacar(indiceAtivo <= 0 ? opcoes.length - 1 : indiceAtivo - 1);
        } else if (event.key === "Enter" && indiceAtivo >= 0) {
            event.preventDefault();
            selecionar(opcoes[indiceAtivo].textContent);
        } else if (event.key === "Escape") {
            fechar();
        }
    });
}

function sincronizarArquivos() {
    const transferencia = new DataTransfer();
    arquivosAbertura.forEach((arquivo) => transferencia.items.add(arquivo));
    abertoDocumentos.files = transferencia.files;
}

function renderizarDocumentos() {
    abertoDocumentosNome.textContent = arquivosAbertura.length
        ? `${arquivosAbertura.length} arquivo${arquivosAbertura.length > 1 ? "s" : ""} selecionado${arquivosAbertura.length > 1 ? "s" : ""}`
        : "Nenhum arquivo selecionado";
    abertoDocumentosPreview.innerHTML = "";

    arquivosAbertura.forEach((arquivo, indice) => {
        const item = document.createElement("div");
        item.className = "tfm-documento-item";

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
        const remover = document.createElement("button");
        remover.type = "button";
        remover.setAttribute("aria-label", `Remover ${arquivo.name}`);
        remover.innerHTML = `<i class="bi bi-x-lg"></i>`;
        remover.addEventListener("click", () => {
            arquivosAbertura.splice(indice, 1);
            sincronizarArquivos();
            renderizarDocumentos();
        });
        item.append(nome, remover);
        abertoDocumentosPreview.appendChild(item);
    });
}

function validarArquivosSelecionados(arquivos) {
    arquivos.forEach((arquivo) => {
        if (!tiposDocumentoPermitidos.includes(arquivo.type)) {
            throw new Error("Anexe apenas arquivos PDF, PNG, JPG ou JPEG.");
        }
        if (arquivo.size > 5 * 1024 * 1024) {
            throw new Error("Cada arquivo deve ter no máximo 5 MB.");
        }
    });
}

function arquivoParaBase64(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => resolve(leitor.result.split(",")[1]);
        leitor.onerror = () => reject(leitor.error);
        leitor.readAsDataURL(arquivo);
    });
}

async function prepararDocumentos() {
    validarArquivosSelecionados(arquivosAbertura);
    return Promise.all(arquivosAbertura.map(async (arquivo) => ({
        nome: arquivo.name,
        tipo: arquivo.type,
        tamanho: arquivo.size,
        conteudoBase64: await arquivoParaBase64(arquivo)
    })));
}

function formatarData(valor) {
    if (!valor) return "-";
    const data = new Date(valor);
    return Number.isNaN(data.getTime()) ? valor : data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

function normalizarDataInput(valor) {
    if (!valor) return new Date().toISOString().slice(0, 10);
    const texto = String(valor);
    if (/^\d{4}-\d{2}-\d{2}/.test(texto)) return texto.slice(0, 10);
    const data = new Date(valor);
    return Number.isNaN(data.getTime()) ? new Date().toISOString().slice(0, 10) : data.toISOString().slice(0, 10);
}

function converterHorasNumero(valor) {
    const horas = Number(String(valor || "0").replace(",", "."));
    return Number.isFinite(horas) ? horas : 0;
}

function formatarHoras(valor) {
    return `${Number(valor || 0).toLocaleString("pt-BR", { maximumFractionDigits: 2 })}h`;
}

function criarDescricaoAlertaDisponibilidade(alerta) {
    const data = formatarData(alerta.data);
    const total = formatarHoras(alerta.total);
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
        return `O total será ${total} no dia ${data}, mas essa data está registrada como ${alerta.situacao}.`;
    }

    return `O total será ${total} no dia ${data}, acima das ${formatarHoras(alerta.horasDisponiveis)} disponíveis.`;
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

function mostrarFeedback(elemento, mensagem, tipo = "sucesso") {
    elemento.hidden = false;
    elemento.className = `tfm-feedback ${tipo}`;
    elemento.textContent = mensagem;
}

function alterarEstadoBotao(botao, carregando, textoPadrao, textoCarregando) {
    const icone = botao.querySelector("i");
    const texto = botao.querySelector("span");
    if (!botao.dataset.iconePadrao && icone) botao.dataset.iconePadrao = icone.className;
    botao.disabled = carregando;
    botao.classList.toggle("salvando", carregando);
    if (icone) icone.className = carregando ? "bi bi-arrow-repeat" : botao.dataset.iconePadrao;
    if (texto) texto.textContent = carregando ? textoCarregando : textoPadrao;
}

function configurarBuscaColaborador() {
    function fechar() {
        horasColaboradorOpcoes.hidden = true;
        horasColaboradorNome.setAttribute("aria-expanded", "false");
    }

    function selecionar(colaborador) {
        horasColaboradorNome.value = colaborador.nome;
        horasColaboradorMatricula.value = colaborador.matricula;
        fechar();
    }

    function renderizar() {
        const termos = normalizarTexto(horasColaboradorNome.value).split(/\s+/).filter(Boolean);
        const filtrados = colaboradores.filter((colaborador) => {
            const texto = `${normalizarTexto(colaborador.nome)} ${colaborador.matricula}`;
            return termos.every((termo) => texto.includes(termo));
        });
        horasColaboradorOpcoes.innerHTML = "";
        filtrados.forEach((colaborador) => {
            const opcao = document.createElement("button");
            opcao.type = "button";
            opcao.setAttribute("role", "option");
            opcao.textContent = `${colaborador.nome} - ${colaborador.matricula}`;
            opcao.addEventListener("mousedown", (event) => event.preventDefault());
            opcao.addEventListener("click", () => selecionar(colaborador));
            horasColaboradorOpcoes.appendChild(opcao);
        });
        if (!filtrados.length) horasColaboradorOpcoes.innerHTML = "<p>Nenhum colaborador encontrado.</p>";
        horasColaboradorOpcoes.hidden = false;
        horasColaboradorNome.setAttribute("aria-expanded", "true");
    }

    horasColaboradorNome.addEventListener("focus", renderizar);
    horasColaboradorNome.addEventListener("input", () => {
        horasColaboradorMatricula.value = "";
        renderizar();
    });
    horasColaboradorNome.addEventListener("blur", () => window.setTimeout(fechar, 150));
}

function renderizarColaboradoresAutorizados() {
    abertoAutorizadosLista.innerHTML = "";

    colaboradoresAutorizados.forEach((colaborador) => {
        const item = document.createElement("div");
        item.className = "tfm-autorizado-item";

        const identificacao = document.createElement("div");
        const nome = document.createElement("strong");
        const matricula = document.createElement("span");
        nome.textContent = colaborador.nome;
        matricula.textContent = colaborador.matricula;
        identificacao.append(nome, matricula);

        const remover = document.createElement("button");
        remover.type = "button";
        remover.title = "Remover autorização";
        remover.setAttribute("aria-label", `Remover autorização de ${colaborador.nome}`);
        remover.innerHTML = '<i class="bi bi-x-lg"></i>';
        remover.addEventListener("click", () => {
            colaboradoresAutorizados = colaboradoresAutorizados.filter((itemAutorizado) => itemAutorizado.matricula !== colaborador.matricula);
            renderizarColaboradoresAutorizados();
        });

        item.append(identificacao, remover);
        abertoAutorizadosLista.appendChild(item);
    });
}

function configurarBuscaAutorizados() {
    function fechar() {
        abertoAutorizadoOpcoes.hidden = true;
        abertoAutorizado.setAttribute("aria-expanded", "false");
    }

    function selecionar(colaborador) {
        colaboradoresAutorizados.push({ nome: colaborador.nome, matricula: colaborador.matricula });
        abertoAutorizado.value = "";
        renderizarColaboradoresAutorizados();
        fechar();
    }

    function renderizar() {
        const termos = normalizarTexto(abertoAutorizado.value).split(/\s+/).filter(Boolean);
        const matriculasSelecionadas = new Set([
            String(usuarioAtual.matricula),
            ...colaboradoresAutorizados.map((colaborador) => colaborador.matricula)
        ]);
        const filtrados = colaboradores.filter((colaborador) => {
            const texto = `${normalizarTexto(colaborador.nome)} ${colaborador.matricula}`;
            return !matriculasSelecionadas.has(colaborador.matricula) && termos.every((termo) => texto.includes(termo));
        });

        abertoAutorizadoOpcoes.innerHTML = "";
        filtrados.forEach((colaborador) => {
            const opcao = document.createElement("button");
            opcao.type = "button";
            opcao.setAttribute("role", "option");
            opcao.textContent = `${colaborador.nome} - ${colaborador.matricula}`;
            opcao.addEventListener("mousedown", (event) => event.preventDefault());
            opcao.addEventListener("click", () => selecionar(colaborador));
            abertoAutorizadoOpcoes.appendChild(opcao);
        });

        if (!filtrados.length) abertoAutorizadoOpcoes.innerHTML = "<p>Nenhum colaborador disponível.</p>";
        abertoAutorizadoOpcoes.hidden = false;
        abertoAutorizado.setAttribute("aria-expanded", "true");
    }

    abertoAutorizado.addEventListener("focus", renderizar);
    abertoAutorizado.addEventListener("input", renderizar);
    abertoAutorizado.addEventListener("blur", () => window.setTimeout(fechar, 150));
}

async function enviarAcao(dados) {
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

function alternarView(view) {
    document.querySelectorAll("[data-tfm-view]").forEach((botao) => {
        botao.classList.toggle("geral-nav-ativo", botao.dataset.tfmView === view);
    });
    document.querySelectorAll("[data-tfm-view-content]").forEach((painel) => {
        painel.hidden = painel.dataset.tfmViewContent !== view;
    });

    if (view === "andamento") carregarTfmsAbertos();
}

async function abrirNovoTfm(event) {
    event.preventDefault();
    const tfm = abertoTfm.value.trim();
    const atividade = abertoAtividade.value.trim();
    const horas = converterHorasNumero(abertoHoras.value);
    const observacao = abertoObservacao.value.trim();

    if (!atividadeValida(atividade)) {
        mostrarFeedback(abertoFeedback, "Esta atividade não consta na lista cadastrada e não pode ser salva. Caso seja necessária, registre uma sugestão em Sugerir atividade.", "erro");
        abertoAtividade.focus();
        return;
    }

    if (!/^\d{6}$/.test(tfm) || !abertoDataInicial.value || !abertoTurno.value || horas <= 0 || !observacao) {
        mostrarFeedback(abertoFeedback, "Preencha data inicial, turno, TFM, atividade, horas trabalhadas e observação.", "erro");
        return;
    }

    const botao = formAbrirTfm.querySelector("button[type='submit']");
    alterarEstadoBotao(botao, true, "Abrir TFM em andamento", "Abrindo TFM...");
    try {
        const continuar = await confirmarLimiteDiario([{
            nome: usuarioAtual.nome,
            matricula: usuarioAtual.matricula,
            data: abertoDataInicial.value,
            horas
        }]);
        if (!continuar) {
            return;
        }

        await enviarAcao({
            acao: "abrirTfm",
            tfm,
            dataInicial: abertoDataInicial.value,
            turno: abertoTurno.value,
            projeto: abertoProjeto.value.trim(),
            nomeHost: usuarioAtual.nome,
            matriculaHost: usuarioAtual.matricula,
            colaboradoresAutorizados,
            atividade,
            horas,
            observacao,
            documentos: await prepararDocumentos()
        });
        formAbrirTfm.reset();
        abertoDataInicial.value = new Date().toISOString().slice(0, 10);
        abertoNomeHost.value = usuarioAtual.nome;
        abertoMatriculaHost.value = usuarioAtual.matricula;
        colaboradoresAutorizados = [];
        renderizarColaboradoresAutorizados();
        arquivosAbertura.length = 0;
        sincronizarArquivos();
        renderizarDocumentos();
        alternarView("andamento");
    } catch (erro) {
        mostrarFeedback(abertoFeedback, erro.message, "erro");
    } finally {
        alterarEstadoBotao(botao, false, "Abrir TFM em andamento", "Abrindo TFM...");
    }
}

function abrirFormularioHoras(tfm, card) {
    const registro = tfmsAbertosCarregados.find((item) => item.tfm === tfm);
    horasTfmId.value = tfm;
    horasTfmNumero.textContent = tfm;
    horasTfmData.value = normalizarDataInput(registro?.ultimoLancamento);
    horasTfmQuantidade.value = "";
    horasTfmObservacao.value = "";
    horasColaboradorNome.value = "";
    horasColaboradorMatricula.value = "";
    colaboradoresExtrasLancamento = [];
    renderizarColaboradoresExtras();
    atividadesExtrasLancamento = [];
    renderizarAtividadesExtras();
    horasTfmFeedback.hidden = true;
    modalHorasTfmAberto.hidden = false;
    document.body.classList.add("tfm-modal-aberto");
    horasTfmData.focus();
}

function fecharFormularioHoras() {
    modalHorasTfmAberto.hidden = true;
    document.body.classList.remove("tfm-modal-aberto");
}

function renderizarAtividadesExtras() {
    atividadesExtrasLista.innerHTML = "";
    atividadesExtrasLancamento.forEach((atividade, indice) => {
        const item = document.createElement("div");
        item.className = "tfm-atividade-extra-item";
        item.innerHTML = `
            <div><strong>${atividade.atividade}</strong><span>${formatarHoras(atividade.horas)}${atividade.observacao ? ` · ${atividade.observacao}` : ""}</span></div>
            <button type="button" aria-label="Remover atividade ${indice + 1}" data-remover-atividade-extra="${indice}"><i class="bi bi-trash3"></i></button>
        `;
        atividadesExtrasLista.appendChild(item);
    });
}

function abrirModalAtividadeHoras() {
    atividadeHorasNome.value = "";
    atividadeHorasQuantidade.value = "";
    atividadeHorasObservacao.value = "";
    atividadeHorasFeedback.hidden = true;
    modalAtividadeHoras.hidden = false;
    atividadeHorasNome.focus();
}

function fecharModalAtividadeHoras() {
    modalAtividadeHoras.hidden = true;
}

function renderizarColaboradoresExtras() {
    colaboradoresLancamentoLista.innerHTML = "";
    colaboradoresExtrasLancamento.forEach((colaborador, indice) => {
        const item = document.createElement("div");
        item.className = "tfm-atividade-extra-item";
        item.innerHTML = `
            <div><strong>${colaborador.nome}</strong><span>${colaborador.matricula} · ${formatarHoras(colaborador.horas)}</span></div>
            <button type="button" aria-label="Remover colaborador ${indice + 1}" data-remover-colaborador-extra="${indice}"><i class="bi bi-trash3"></i></button>
        `;
        colaboradoresLancamentoLista.appendChild(item);
    });
}

function abrirModalColaboradorHoras() {
    horasColaboradorNome.value = "";
    horasColaboradorMatricula.value = "";
    horasColaboradorQuantidade.value = "";
    colaboradorHorasFeedback.hidden = true;
    modalColaboradorHoras.hidden = false;
    horasColaboradorNome.focus();
}

function fecharModalColaboradorHoras() {
    modalColaboradorHoras.hidden = true;
}

function adicionarColaboradorExtra(event) {
    event.preventDefault();
    const nome = horasColaboradorNome.value.trim();
    const matricula = horasColaboradorMatricula.value.trim();
    const horas = converterHorasNumero(horasColaboradorQuantidade.value);
    const jaAdicionado = colaboradoresExtrasLancamento.some((colaborador) => colaborador.matricula === matricula);

    if (!nome || !/^\d{4,6}$/.test(matricula) || horas <= 0) {
        mostrarFeedback(colaboradorHorasFeedback, "Selecione um colaborador na lista e informe as horas trabalhadas.", "erro");
        return;
    }

    if (matricula === String(usuarioAtual.matricula) || jaAdicionado) {
        mostrarFeedback(colaboradorHorasFeedback, "Este colaborador já está incluído no lançamento.", "erro");
        return;
    }

    colaboradoresExtrasLancamento.push({ nome, matricula, horas });
    renderizarColaboradoresExtras();
    fecharModalColaboradorHoras();
}

function adicionarAtividadeExtra(event) {
    event.preventDefault();
    const atividade = atividadeHorasNome.value.trim();
    const horas = converterHorasNumero(atividadeHorasQuantidade.value);
    const observacao = atividadeHorasObservacao.value.trim();

    if (!atividadeValida(atividade) || horas <= 0 || !observacao) {
        mostrarFeedback(atividadeHorasFeedback, "Selecione uma atividade e informe as horas trabalhadas e a observação.", "erro");
        return;
    }

    atividadesExtrasLancamento.push({
        atividade,
        horas,
        observacao
    });
    renderizarAtividadesExtras();
    fecharModalAtividadeHoras();
}

function renderizarTfms(tfms) {
    tfmsAbertosLista.innerHTML = "";
    tfmsAbertosStatus.hidden = tfms.length > 0;
    tfmsAbertosStatus.textContent = tfmsAbertosCarregados.length
        ? "Nenhum TFM corresponde à pesquisa informada."
        : "Nenhum TFM em andamento no momento.";

    tfms.forEach((item) => {
        const podeGerenciar = Boolean(item.podeGerenciar);
        const card = document.createElement("article");
        card.className = "tfm-aberto-card";
        card.innerHTML = `
            <div class="tfm-aberto-card-topo">
                <div>
                    <span class="tfm-aberto-status"><i class="bi bi-hourglass-split"></i> Em andamento</span>
                    <h2>TFM ${item.tfm}</h2>
                    <p>${item.projeto || "Sem projeto"} · Host: ${item.nomeHost || "-"}</p>
                    <p class="tfm-aberto-atividade"><i class="bi bi-list-task"></i> ${item.atividade || "Atividade não informada"}</p>
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
                ${podeGerenciar ? `<button type="button" class="btn-adicionar-horas" data-adicionar-horas="${item.tfm}"><i class="bi bi-calendar-plus"></i><span>Editar calendário</span></button>` : ""}
                ${podeGerenciar ? `<button type="button" class="btn-editar-lancamentos" data-editar-lancamentos="${item.tfm}"><i class="bi bi-pencil-square"></i><span>Editar lançamentos</span></button>` : ""}
                ${podeGerenciar ? `<button type="button" class="btn-finalizar-tfm" data-finalizar-tfm="${item.tfm}"><i class="bi bi-check2-circle"></i><span>Finalizar TFM</span></button>` : ""}
                ${podeGerenciar ? `<button type="button" class="btn-cancelar-tfm" data-cancelar-tfm="${item.tfm}"><i class="bi bi-trash3"></i><span>Cancelar TFM</span></button>` : ""}
            </div>
        `;
        tfmsAbertosLista.appendChild(card);
    });
}

function filtrarTfmsAbertos() {
    const busca = buscaTfmsAbertos.value.replace(/\D/g, "").slice(0, 6);
    buscaTfmsAbertos.value = busca;
    btnLimparBuscaTfms.hidden = !busca;

    const tfmsFiltrados = busca
        ? tfmsAbertosCarregados.filter((item) => String(item.tfm || "").includes(busca))
        : tfmsAbertosCarregados;

    tfmsAbertosContagem.textContent = busca
        ? `${tfmsFiltrados.length} de ${tfmsAbertosCarregados.length} TFM(s)`
        : `${tfmsAbertosCarregados.length} TFM(s) em andamento`;
    renderizarTfms(tfmsFiltrados);
}

async function carregarTfmsAbertos() {
    tfmsAbertosStatus.hidden = false;
    tfmsAbertosStatus.textContent = "Carregando TFMs em andamento...";
    tfmsAbertosLista.innerHTML = "";
    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=listarTfmsAbertos&matricula=${encodeURIComponent(usuarioAtual.matricula)}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso) throw new Error(dados.erro || "Erro ao carregar TFMs em andamento.");
        tfmsAbertosCarregados = Array.isArray(dados.tfms) ? dados.tfms : [];
        filtrarTfmsAbertos();
    } catch (erro) {
        tfmsAbertosStatus.hidden = false;
        tfmsAbertosStatus.textContent = erro.message;
        tfmsAbertosContagem.textContent = "";
    }
}

async function adicionarHoras(event) {
    event.preventDefault();
    const horas = converterHorasNumero(horasTfmQuantidade.value);
    const observacao = horasTfmObservacao.value.trim();
    const registro = tfmsAbertosCarregados.find((item) => item.tfm === horasTfmId.value);
    const atividades = [{
        atividade: registro?.atividade || "",
        horas,
        observacao
    }, ...atividadesExtrasLancamento];

    if (!horasTfmData.value || horas <= 0 || !registro?.atividade || !observacao) {
        mostrarFeedback(horasTfmFeedback, "Preencha a data, as horas trabalhadas e a observação.", "erro");
        return;
    }

    const botao = formHorasTfmAberto.querySelector("button[type='submit']");
    alterarEstadoBotao(botao, true, "Adicionar lançamento diário", "Adicionando lançamento...");
    try {
        const lancamentos = [{
            nome: usuarioAtual.nome,
            matricula: usuarioAtual.matricula,
            data: horasTfmData.value,
            horas: atividades.reduce((total, atividade) => total + converterHorasNumero(atividade.horas), 0)
        }, ...colaboradoresExtrasLancamento.map((colaborador) => ({
            nome: colaborador.nome,
            matricula: colaborador.matricula,
            data: horasTfmData.value,
            horas: colaborador.horas
        }))];
        const continuar = await confirmarLimiteDiario(lancamentos);
        if (!continuar) {
            return;
        }

        await enviarAcao({
            acao: "adicionarHorasTfmAberto",
            tfm: horasTfmId.value,
            dataTrabalhada: horasTfmData.value,
            atividades,
            nomeColaborador: usuarioAtual.nome,
            matriculaColaborador: usuarioAtual.matricula,
            colaboradoresAdicionais: colaboradoresExtrasLancamento,
            matriculaHostEditor: usuarioAtual.matricula
        });
        fecharFormularioHoras();
        await carregarTfmsAbertos();
    } catch (erro) {
        mostrarFeedback(horasTfmFeedback, erro.message, "erro");
    } finally {
        alterarEstadoBotao(botao, false, "Adicionar lançamento diário", "Adicionando lançamento...");
    }
}

function fecharModalFinalizarTfm() {
    modalFinalizarTfm.hidden = true;
    document.body.classList.remove("tfm-modal-aberto");
    tfmPendenteFinalizacao = "";
    lancamentosPendenteFinalizacao = [];
}

function renderizarRevisaoFinal(dados) {
    finalizarTfmNumero.textContent = dados.tfm;
    const horasTotais = dados.registros.reduce((total, registro) => (
        total + converterHorasNumero(registro.horas || registro.horasAdicionais)
    ), 0);
    finalizarTfmResumo.innerHTML = `
        <div><span>Data inicial</span><strong>${formatarData(dados.dataInicial)}</strong></div>
        <div><span>Projeto</span><strong>${dados.projeto || "Sem projeto"}</strong></div>
        <div><span>Lançamentos</span><strong>${dados.registros.length}</strong></div>
        <div class="tfm-finalizar-horas"><span>Horas totais</span><strong>${formatarHoras(horasTotais)}</strong></div>
    `;
    finalizarTfmLancamentos.innerHTML = "";

    dados.registros.forEach((registro) => {
        const item = document.createElement("article");
        item.className = "tfm-finalizar-item";
        const atividade = registro.atividade || registro.atividadeAdicional || "Atividade não informada";
        const horas = registro.horas || registro.horasAdicionais || 0;
        item.innerHTML = `
            <div class="tfm-finalizar-item-topo"><strong>${formatarData(registro.data)}</strong><span>${formatarHoras(horas)}</span></div>
            <strong>${atividade}</strong>
            <p>${registro.nome || "-"}${registro.matricula ? ` · ${registro.matricula}` : ""}</p>
            ${registro.observacao ? `<p class="tfm-finalizar-observacao">${registro.observacao}</p>` : ""}
        `;
        finalizarTfmLancamentos.appendChild(item);
    });
}

async function finalizarTfm(tfm) {
    tfmPendenteFinalizacao = tfm;
    lancamentosPendenteFinalizacao = [];
    finalizarTfmFeedback.hidden = true;
    finalizarTfmResumo.innerHTML = "";
    finalizarTfmLancamentos.innerHTML = "<p class=\"oficina-status\">Carregando dados do TFM...</p>";
    modalFinalizarTfm.hidden = false;
    document.body.classList.add("tfm-modal-aberto");

    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=detalharTfmAberto&tfm=${encodeURIComponent(tfm)}&matriculaHost=${encodeURIComponent(usuarioAtual.matricula)}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso) throw new Error(dados.erro || "Erro ao carregar os dados do TFM.");
        lancamentosPendenteFinalizacao = dados.registros.map((registro) => ({
            nome: registro.nome,
            matricula: registro.matricula,
            data: normalizarDataInput(registro.data),
            horas: registro.horas || registro.horasAdicionais
        }));
        renderizarRevisaoFinal(dados);
    } catch (erro) {
        mostrarFeedback(finalizarTfmFeedback, erro.message, "erro");
    }
}

function fecharCancelamentoTfm() {
    modalCancelarTfm.hidden = true;
    document.body.classList.remove("tfm-modal-aberto");
    tfmPendenteCancelamento = "";
}

function abrirCancelamentoTfm(tfm) {
    tfmPendenteCancelamento = tfm;
    cancelarTfmNumero.textContent = tfm;
    cancelarTfmConfirmacao.checked = false;
    btnConfirmarCancelarTfm.disabled = true;
    cancelarTfmFeedback.hidden = true;
    modalCancelarTfm.hidden = false;
    document.body.classList.add("tfm-modal-aberto");
    cancelarTfmConfirmacao.focus();
}

async function confirmarCancelamentoTfm() {
    if (!tfmPendenteCancelamento || !cancelarTfmConfirmacao.checked) {
        mostrarFeedback(cancelarTfmFeedback, "Marque a confirmação para cancelar o TFM.", "erro");
        return;
    }

    alterarEstadoBotao(btnConfirmarCancelarTfm, true, "Cancelar TFM definitivamente", "Cancelando TFM...");
    try {
        await enviarAcao({
            acao: "cancelarTfmAberto",
            tfm: tfmPendenteCancelamento,
            matriculaHost: usuarioAtual.matricula
        });
        fecharCancelamentoTfm();
        await carregarTfmsAbertos();
    } catch (erro) {
        mostrarFeedback(cancelarTfmFeedback, erro.message, "erro");
    } finally {
        alterarEstadoBotao(btnConfirmarCancelarTfm, false, "Cancelar TFM definitivamente", "Cancelando TFM...");
        btnConfirmarCancelarTfm.disabled = !cancelarTfmConfirmacao.checked;
    }
}

function fecharEdicaoLancamentos() {
    modalEditarLancamentos.hidden = true;
    document.body.classList.remove("tfm-modal-aberto");
    tfmPendenteEdicao = "";
}

function renderizarEdicaoLancamentos(dados) {
    editarLancamentosNumero.textContent = dados.tfm;
    editarLancamentosLista.innerHTML = "";

    dados.registros.forEach((registro) => {
        const item = document.createElement("article");
        item.className = "tfm-editar-lancamento-item";
        item.dataset.linha = registro.linha;
        item.dataset.colunaHoras = registro.colunaHoras;
        const atividade = registro.atividade || registro.atividadeAdicional || "Atividade não informada";
        const horas = registro.horas || registro.horasAdicionais || 0;
        item.innerHTML = `
            <div class="tfm-editar-lancamento-resumo">
                <div><strong>${atividade}</strong><span>${registro.nome || "-"}${registro.matricula ? ` · ${registro.matricula}` : ""}</span></div>
                <div class="tfm-editar-lancamento-dados"><span><i class="bi bi-calendar3"></i>${formatarData(registro.data)}</span><span><i class="bi bi-clock"></i>${formatarHoras(horas)}</span></div>
                <div class="tfm-editar-lancamento-acoes">
                    <button type="button" class="tfm-editar-lancamento-abrir" data-abrir-edicao-lancamento aria-label="Editar lançamento de ${atividade}" title="Editar lançamento"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="tfm-editar-lancamento-excluir" data-excluir-lancamento aria-label="Excluir lançamento de ${atividade}" title="Excluir lançamento"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
            <div class="tfm-editar-lancamento-campos">
                <label><span>Data trabalhada</span><input type="date" data-editar-data value="${normalizarDataInput(registro.data)}" readonly></label>
                <label><span>Horas</span><input type="text" inputmode="decimal" data-editar-horas value="${horas}" readonly></label>
                <label><span>Observação</span><textarea rows="2" data-editar-observacao readonly>${registro.observacao || ""}</textarea></label>
            </div>
        `;
        editarLancamentosLista.appendChild(item);
    });
}

async function abrirEdicaoLancamentos(tfm) {
    tfmPendenteEdicao = tfm;
    editarLancamentosFeedback.hidden = true;
    editarLancamentosLista.innerHTML = "<p class=\"oficina-status\">Carregando lançamentos do TFM...</p>";
    modalEditarLancamentos.hidden = false;
    document.body.classList.add("tfm-modal-aberto");

    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=detalharTfmAberto&tfm=${encodeURIComponent(tfm)}&matriculaHost=${encodeURIComponent(usuarioAtual.matricula)}`);
        const dados = await resposta.json();
        if (!resposta.ok || !dados.sucesso) throw new Error(dados.erro || "Erro ao carregar os lançamentos do TFM.");
        renderizarEdicaoLancamentos(dados);
    } catch (erro) {
        mostrarFeedback(editarLancamentosFeedback, erro.message, "erro");
    }
}

async function excluirLancamento(item) {
    if (!tfmPendenteEdicao) return;
    const atividade = item.querySelector(".tfm-editar-lancamento-resumo strong")?.textContent || "este lançamento";
    const data = item.querySelector("[data-editar-data]")?.value || "";
    if (!window.confirm(`Excluir ${atividade} de ${formatarData(data)}? Esta ação também apagará o lançamento do banco de dados.`)) return;

    editarLancamentosFeedback.hidden = true;
    const botoes = Array.from(item.querySelectorAll("button"));
    botoes.forEach((botao) => { botao.disabled = true; });
    try {
        await enviarAcao({
            acao: "excluirLancamentoTfmAberto",
            tfm: tfmPendenteEdicao,
            matriculaHost: usuarioAtual.matricula,
            linha: Number(item.dataset.linha)
        });
        await abrirEdicaoLancamentos(tfmPendenteEdicao);
        await carregarTfmsAbertos();
    } catch (erro) {
        mostrarFeedback(editarLancamentosFeedback, erro.message, "erro");
        botoes.forEach((botao) => { botao.disabled = false; });
    }
}

async function salvarEdicaoLancamentos() {
    if (!tfmPendenteEdicao) return;
    const itensEditando = Array.from(editarLancamentosLista.querySelectorAll(".tfm-editar-lancamento-item-editando"));
    const registros = itensEditando.map((item) => ({
        linha: Number(item.dataset.linha),
        colunaHoras: Number(item.dataset.colunaHoras),
        data: item.querySelector("[data-editar-data]").value,
        horas: converterHorasNumero(item.querySelector("[data-editar-horas]").value),
        observacao: item.querySelector("[data-editar-observacao]").value.trim()
    }));

    if (!registros.length) {
        mostrarFeedback(editarLancamentosFeedback, "Selecione o lápis de um lançamento antes de salvar.", "erro");
        return;
    }

    if (registros.some((registro) => !registro.linha || !registro.data || registro.horas <= 0)) {
        mostrarFeedback(editarLancamentosFeedback, "Preencha uma data e horas maiores que zero.", "erro");
        return;
    }

    alterarEstadoBotao(btnSalvarEditarLancamentos, true, "Salvar alterações", "Salvando alterações...");
    try {
        await enviarAcao({
            acao: "editarLancamentosTfmAberto",
            tfm: tfmPendenteEdicao,
            matriculaHost: usuarioAtual.matricula,
            registros
        });
        fecharEdicaoLancamentos();
        await carregarTfmsAbertos();
    } catch (erro) {
        mostrarFeedback(editarLancamentosFeedback, erro.message, "erro");
    } finally {
        alterarEstadoBotao(btnSalvarEditarLancamentos, false, "Salvar alterações", "Salvando alterações...");
    }
}

async function confirmarFinalizacaoTfm() {
    if (!tfmPendenteFinalizacao) return;
    alterarEstadoBotao(btnConfirmarFinalizarTfm, true, "Confirmar finalização", "Finalizando TFM...");
    try {
        const continuar = await confirmarLimiteDiario(lancamentosPendenteFinalizacao, {
            tfmIgnorado: tfmPendenteFinalizacao,
            mostrarDatas: true
        });
        if (!continuar) {
            return;
        }

        await enviarAcao({
            acao: "fecharTfmAberto",
            tfm: tfmPendenteFinalizacao,
            dataFinal: new Date().toISOString().slice(0, 10),
            matriculaHost: usuarioAtual.matricula
        });
        fecharModalFinalizarTfm();
        await carregarTfmsAbertos();
    } catch (erro) {
        mostrarFeedback(finalizarTfmFeedback, erro.message, "erro");
    } finally {
        alterarEstadoBotao(btnConfirmarFinalizarTfm, false, "Confirmar finalização", "Finalizando TFM...");
    }
}

if (aplicarLogin()) {
    abertoDataInicial.value = new Date().toISOString().slice(0, 10);
    carregarAtividadesDisponiveis();
    configurarBuscaAtividade(abertoAtividade, abertoAtividadeOpcoes);
    configurarBuscaAtividade(atividadeHorasNome, atividadeHorasOpcoes);
    configurarBuscaColaborador();
    configurarBuscaAutorizados();
}

window.addEventListener("focus", carregarAtividadesDisponiveis);

document.querySelectorAll("[data-tfm-view]").forEach((botao) => {
    botao.addEventListener("click", () => alternarView(botao.dataset.tfmView));
});
formAbrirTfm.addEventListener("submit", abrirNovoTfm);
formHorasTfmAberto.addEventListener("submit", adicionarHoras);
formAtividadeHoras.addEventListener("submit", adicionarAtividadeExtra);
formColaboradorHoras.addEventListener("submit", adicionarColaboradorExtra);
btnAtualizarTfmsAbertos.addEventListener("click", carregarTfmsAbertos);
buscaTfmsAbertos.addEventListener("input", filtrarTfmsAbertos);
btnLimparBuscaTfms.addEventListener("click", () => {
    buscaTfmsAbertos.value = "";
    filtrarTfmsAbertos();
    buscaTfmsAbertos.focus();
});
btnAdicionarAtividadeHoras.addEventListener("click", abrirModalAtividadeHoras);
btnFecharAtividadeHoras.addEventListener("click", fecharModalAtividadeHoras);
btnAdicionarColaboradorHoras.addEventListener("click", abrirModalColaboradorHoras);
btnFecharColaboradorHoras.addEventListener("click", fecharModalColaboradorHoras);
btnFecharFinalizarTfm.addEventListener("click", fecharModalFinalizarTfm);
btnCancelarFinalizarTfm.addEventListener("click", fecharModalFinalizarTfm);
btnConfirmarFinalizarTfm.addEventListener("click", confirmarFinalizacaoTfm);
btnFecharEditarLancamentos.addEventListener("click", fecharEdicaoLancamentos);
btnCancelarEditarLancamentos.addEventListener("click", fecharEdicaoLancamentos);
btnSalvarEditarLancamentos.addEventListener("click", salvarEdicaoLancamentos);
btnFecharCancelarTfm.addEventListener("click", fecharCancelamentoTfm);
btnVoltarCancelarTfm.addEventListener("click", fecharCancelamentoTfm);
btnConfirmarCancelarTfm.addEventListener("click", confirmarCancelamentoTfm);
cancelarTfmConfirmacao.addEventListener("change", () => {
    btnConfirmarCancelarTfm.disabled = !cancelarTfmConfirmacao.checked;
    cancelarTfmFeedback.hidden = true;
});
colaboradoresLancamentoLista.addEventListener("click", (event) => {
    const botao = event.target.closest("[data-remover-colaborador-extra]");
    if (!botao) return;
    colaboradoresExtrasLancamento.splice(Number(botao.dataset.removerColaboradorExtra), 1);
    renderizarColaboradoresExtras();
});
atividadesExtrasLista.addEventListener("click", (event) => {
    const botao = event.target.closest("[data-remover-atividade-extra]");
    if (!botao) return;
    atividadesExtrasLancamento.splice(Number(botao.dataset.removerAtividadeExtra), 1);
    renderizarAtividadesExtras();
});
btnFecharFormHoras.addEventListener("click", () => {
    fecharFormularioHoras();
});
modalHorasTfmAberto.addEventListener("click", (event) => {
    if (event.target.matches("[data-fechar-modal-horas]")) fecharFormularioHoras();
});
modalAtividadeHoras.addEventListener("click", (event) => {
    if (event.target.matches("[data-fechar-modal-atividade-horas]")) fecharModalAtividadeHoras();
});
modalColaboradorHoras.addEventListener("click", (event) => {
    if (event.target.matches("[data-fechar-modal-colaborador-horas]")) fecharModalColaboradorHoras();
});
modalFinalizarTfm.addEventListener("click", (event) => {
    if (event.target.matches("[data-fechar-modal-finalizar]")) fecharModalFinalizarTfm();
});
modalEditarLancamentos.addEventListener("click", (event) => {
    if (event.target.matches("[data-fechar-modal-editar-lancamentos]")) fecharEdicaoLancamentos();
});
modalCancelarTfm.addEventListener("click", (event) => {
    if (event.target.matches("[data-fechar-modal-cancelar-tfm]")) fecharCancelamentoTfm();
});
editarLancamentosLista.addEventListener("click", (event) => {
    const botaoExcluir = event.target.closest("[data-excluir-lancamento]");
    if (botaoExcluir) {
        excluirLancamento(botaoExcluir.closest(".tfm-editar-lancamento-item"));
        return;
    }

    const botao = event.target.closest("[data-abrir-edicao-lancamento]");
    if (!botao) return;

    const item = botao.closest(".tfm-editar-lancamento-item");
    const jaEditando = item.classList.contains("tfm-editar-lancamento-item-editando");
    editarLancamentosLista.querySelectorAll(".tfm-editar-lancamento-item-editando").forEach((outroItem) => {
        outroItem.classList.remove("tfm-editar-lancamento-item-editando");
        outroItem.querySelectorAll("[data-editar-data], [data-editar-horas], [data-editar-observacao]").forEach((campo) => {
            campo.readOnly = true;
        });
    });
    if (!jaEditando) {
        item.classList.add("tfm-editar-lancamento-item-editando");
        item.querySelectorAll("[data-editar-data], [data-editar-horas], [data-editar-observacao]").forEach((campo) => {
            campo.readOnly = false;
        });
        item.querySelector("[data-editar-data]").focus();
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modalHorasTfmAberto.hidden) fecharFormularioHoras();
    if (event.key === "Escape" && !modalAtividadeHoras.hidden) fecharModalAtividadeHoras();
    if (event.key === "Escape" && !modalColaboradorHoras.hidden) fecharModalColaboradorHoras();
    if (event.key === "Escape" && !modalFinalizarTfm.hidden) fecharModalFinalizarTfm();
    if (event.key === "Escape" && !modalEditarLancamentos.hidden) fecharEdicaoLancamentos();
    if (event.key === "Escape" && !modalCancelarTfm.hidden) fecharCancelamentoTfm();
});
tfmsAbertosLista.addEventListener("click", (event) => {
    const botaoHoras = event.target.closest("[data-adicionar-horas]");
    const botaoEditar = event.target.closest("[data-editar-lancamentos]");
    const botaoFinalizar = event.target.closest("[data-finalizar-tfm]");
    const botaoCancelar = event.target.closest("[data-cancelar-tfm]");
    if (botaoHoras) abrirFormularioHoras(botaoHoras.dataset.adicionarHoras, botaoHoras.closest(".tfm-aberto-card"));
    if (botaoEditar) abrirEdicaoLancamentos(botaoEditar.dataset.editarLancamentos);
    if (botaoFinalizar) finalizarTfm(botaoFinalizar.dataset.finalizarTfm);
    if (botaoCancelar) abrirCancelamentoTfm(botaoCancelar.dataset.cancelarTfm);
});
abertoTfm.addEventListener("input", () => {
    abertoTfm.value = abertoTfm.value.replace(/\D/g, "").slice(0, 6);
});
horasTfmQuantidade.addEventListener("input", () => {
    horasTfmQuantidade.value = horasTfmQuantidade.value.replace(",", ".");
});
atividadeHorasQuantidade.addEventListener("input", () => {
    atividadeHorasQuantidade.value = atividadeHorasQuantidade.value.replace(",", ".");
});
horasColaboradorQuantidade.addEventListener("input", () => {
    horasColaboradorQuantidade.value = horasColaboradorQuantidade.value.replace(",", ".");
});
abertoHoras.addEventListener("input", () => {
    abertoHoras.value = abertoHoras.value.replace(",", ".");
});
abertoDocumentos.addEventListener("change", () => {
    try {
        const novos = Array.from(abertoDocumentos.files || []);
        validarArquivosSelecionados(novos);
        const chaves = new Set(arquivosAbertura.map((arquivo) => `${arquivo.name}-${arquivo.size}-${arquivo.lastModified}`));
        novos.forEach((arquivo) => {
            const chave = `${arquivo.name}-${arquivo.size}-${arquivo.lastModified}`;
            if (!chaves.has(chave)) arquivosAbertura.push(arquivo);
        });
        sincronizarArquivos();
        renderizarDocumentos();
    } catch (erro) {
        mostrarFeedback(abertoFeedback, erro.message, "erro");
        sincronizarArquivos();
    }
});
