(() => {
    const helpPages = {
        "registrar-tfm.html": {
            title: "Como registrar e acompanhar um TFM em andamento",
            intro: "Use esta área para registrar um TFM que exige acompanhamento e ainda não foi concluído. Ele permanece em andamento até que o host ou um colaborador autorizado o finalize; as horas registradas aparecem no desempenho como <strong>Em andamento</strong>.",
            content: `
        <div class="site-help-steps">
            <article class="site-help-step"><span>1</span><div><strong>Acesse Registrar TFM em andamento</strong><p>Entre com sua matrícula e escolha <em>Registrar TFM em andamento</em> no menu. Use essa área quando o trabalho exigir acompanhamento antes de ser finalizado. Somente um colaborador será o host, responsável por registrar, acompanhar e finalizar o TFM.</p></div></article>
            <article class="site-help-step"><span>2</span><div><strong>Informe os dados iniciais</strong><p>Preencha data inicial, turno, número do TFM com 6 dígitos, projeto quando houver, atividade inicial e as horas já trabalhadas. Nome e matrícula são preenchidos pelo acesso e não devem ser alterados.</p></div></article>
            <article class="site-help-step"><span>3</span><div><strong>Registre o TFM</strong><p>Clique em <em>Registrar TFM em andamento</em>. O trabalho ficará na lista de TFMs em andamento e ainda não será enviado ao banco principal nem ao BI.</p></div></article>
            <article class="site-help-step"><span>4</span><div><strong>Registre horas a cada dia</strong><p>Na aba <em>TFMs em andamento</em>, o host abre o TFM e usa <em>Editar calendário</em> para incluir a data, a atividade, as horas e a observação. Inclua colaboradores adicionais somente quando eles também participaram daquele lançamento.</p></div></article>
            <article class="site-help-step"><span>5</span><div><strong>Confira os indicadores</strong><p>As horas de um TFM aberto aparecem nos calendários e no Geral da Oficina identificadas como horas em andamento. Elas não substituem nem duplicam as horas de TFMs já finalizados.</p></div></article>
            <article class="site-help-step"><span>6</span><div><strong>Finalize somente quando concluir</strong><p>Quando todo o trabalho estiver encerrado, o host seleciona <em>Finalizar TFM</em>, revisa os lançamentos e confirma. Nesse momento as horas deixam de estar em andamento e passam para os registros concluídos do banco de dados.</p></div></article>
            <article class="site-help-step"><span>7</span><div><strong>Evite problemas no lançamento</strong><p>Use ponto nas horas decimais, por exemplo 7.5. Não abra o mesmo número de TFM duas vezes. Se houver erro, informe o número do TFM, a data e a matrícula ao responsável antes de finalizar.</p></div></article>
        </div>
        <p class="site-help-note"><strong>Importante:</strong> o host pode autorizar colaboradores a editar, finalizar ou cancelar o TFM sem lançar horas para eles. Colaboradores que trabalharam na atividade devem ser incluídos separadamente no lançamento diário, com suas próprias horas.</p>`
        },
        "meu-desempenho.html": {
            title: "Como consultar meu desempenho",
            intro: "Use esta área para acompanhar seus próprios registros, horas e TFMs no período selecionado.",
            content: `
                <div class="site-help-steps">
                    <article class="site-help-step"><span>1</span><div><strong>Confira sua identificação</strong><p>O painel usa o nome e a matrícula informados no acesso. Caso estejam incorretos, volte à página principal e entre novamente.</p></div></article>
                    <article class="site-help-step"><span>2</span><div><strong>Defina o período</strong><p>Escolha a data inicial e final ou use os atalhos de 30 dias, 90 dias ou Tudo para filtrar seus indicadores.</p></div></article>
                    <article class="site-help-step"><span>3</span><div><strong>Alterne o indicador</strong><p>Use Horas ou TFM para mudar a forma de visualização dos gráficos e dos rankings.</p></div></article>
                    <article class="site-help-step"><span>4</span><div><strong>Veja o calendário</strong><p>Na aba Calendário, selecione um mês e um dia para consultar os registros daquele período.</p></div></article>
                    <article class="site-help-step"><span>5</span><div><strong>Detalhe TFMs e atividades</strong><p>Use as abas TFMs e Atividades para pesquisar seus lançamentos e entender como as horas foram distribuídas.</p></div></article>
                    <article class="site-help-step"><span>6</span><div><strong>Identifique trabalhos em andamento</strong><p>As horas de TFMs ainda abertos aparecem separadas como Em andamento e só passam ao banco de dados quando o host finaliza o TFM.</p></div></article>
                </div>
                <p class="site-help-note"><strong>Importante:</strong> clique em Atualizar dados após alterar o período ou quando precisar carregar registros recentes.</p>`
        },
        "geral-oficina.html": {
            title: "Como consultar o Geral da Oficina",
            intro: "Esta página reúne os indicadores da Oficina Motores e permite analisar as atividades registradas por toda a equipe.",
            content: `
                <div class="site-help-steps">
                    <article class="site-help-step"><span>1</span><div><strong>Leia o resumo geral</strong><p>Os indicadores mostram o total de horas, TFMs, atividades e a atividade com maior volume registrado.</p></div></article>
                    <article class="site-help-step"><span>2</span><div><strong>Alterne o indicador</strong><p>Use Horas ou TFM para comparar as atividades pelo tempo trabalhado ou pela quantidade de TFMs.</p></div></article>
                    <article class="site-help-step"><span>3</span><div><strong>Consulte o calendário</strong><p>Na aba Calendário, escolha o mês para visualizar a distribuição dos registros por data.</p></div></article>
                    <article class="site-help-step"><span>4</span><div><strong>Analise as atividades</strong><p>A aba Atividades apresenta as atividades com maior volume no indicador selecionado.</p></div></article>
                    <article class="site-help-step"><span>5</span><div><strong>Filtre a distribuição</strong><p>Na aba Distribuição, pesquise uma atividade para destacar sua participação no total.</p></div></article>
                    <article class="site-help-step"><span>6</span><div><strong>Atualize os dados</strong><p>Use Atualizar dados para buscar os registros mais recentes antes de analisar os indicadores.</p></div></article>
                </div>
                <p class="site-help-note"><strong>Importante:</strong> as horas de TFMs em andamento são exibidas separadamente das horas já enviadas ao banco de dados.</p>`
        },
        principal: {
            title: "Como usar o Registro de TFM",
            intro: "Nesta página você registra TFMs finalizados, consulta registros e acessa a área destinada aos TFMs que permanecem em andamento.",
            content: `
                <div class="site-help-steps">
                    <article class="site-help-step"><span>1</span><div><strong>Acesse o sistema</strong><p>Informe seu nome e matrícula. Caso seu nome não esteja na lista, use a opção de cadastro pendente.</p></div></article>
                    <article class="site-help-step"><span>2</span><div><strong>Registre um TFM finalizado</strong><p>Use <em>Registrar TFM finalizado</em> quando o trabalho já estiver concluído. Preencha as datas, turno, número do TFM, atividades, horas e colaboradores adicionais antes de salvar.</p></div></article>
                    <article class="site-help-step"><span>3</span><div><strong>Consulte um TFM</strong><p>Abra a aba Consultar TFM para localizar registros e documentos associados.</p></div></article>
                    <article class="site-help-step"><span>4</span><div><strong>Use Registrar TFM em andamento para trabalhos contínuos</strong><p>Essa área é destinada a TFMs que exigem acompanhamento e permanecem em andamento. O host ou um colaborador autorizado registra as horas e finaliza o TFM quando todo o trabalho estiver concluído.</p></div></article>
                    <article class="site-help-step"><span>5</span><div><strong>Acompanhe os indicadores</strong><p>Meu Desempenho mostra seus registros individuais, enquanto Geral da Oficina apresenta os dados consolidados da equipe.</p></div></article>
                    <article class="site-help-step"><span>6</span><div><strong>Envie sugestões e feedback</strong><p>Use as opções do menu para sugerir atividades ou informar dúvidas, melhorias e erros do sistema.</p></div></article>
                </div>
                <p class="site-help-note"><strong>Importante:</strong> use ponto para informar horas decimais, por exemplo 7.5, e confira os dados antes de salvar.</p>`
        }
    };

    const pageName = window.location.pathname.split("/").pop().toLowerCase();
    const helpPage = helpPages[pageName] || helpPages.principal;

    function criarWidget() {
        let button = document.querySelector(".site-help-button, .btn-help-global");
        if (!button) {
            button = document.createElement("button");
            button.type = "button";
            button.className = "site-help-button";
            button.setAttribute("aria-label", "Abrir ajuda");
            button.innerHTML = '<i class="bi bi-question-lg"></i>';
            document.body.appendChild(button);
        }

        let modal = document.getElementById("modal-help");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "modal-help";
            modal.className = "site-help-modal";
            modal.hidden = true;
            document.body.appendChild(modal);
        }

        modal.className = "site-help-modal";
        modal.innerHTML = `
            <div class="site-help-backdrop" data-site-help-close></div>
            <section class="site-help-panel" role="dialog" aria-modal="true" aria-labelledby="site-help-title">
                <header class="site-help-header"><div><span>Ajuda</span><h2 id="site-help-title">${helpPage.title}</h2></div><button type="button" class="site-help-close" aria-label="Fechar ajuda" data-site-help-close><i class="bi bi-x-lg"></i></button></header>
                <div class="site-help-content"><p class="site-help-intro">${helpPage.intro}</p>${helpPage.content}</div>
            </section>`;

        const open = () => {
            modal.hidden = false;
            document.body.classList.add("site-help-open");
        };
        const close = () => {
            modal.hidden = true;
            document.body.classList.remove("site-help-open");
            button.focus();
        };

        button.addEventListener("click", open);
        modal.querySelectorAll("[data-site-help-close]").forEach((element) => element.addEventListener("click", close));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !modal.hidden) close();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", criarWidget);
    } else {
        criarWidget();
    }
})();