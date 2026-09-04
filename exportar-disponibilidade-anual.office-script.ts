interface RegistroDisponibilidade {
    data: string;
    nome: string;
    matricula: string;
    horasDisponiveis: number;
    situacao: string;
    atualizadoEm: string;
}

const MESES_EXPORTACAO: Record<string, number> = {
    janeiro: 1,
    fevereiro: 2,
    marco: 3,
    abril: 4,
    maio: 5,
    junho: 6,
    julho: 7,
    agosto: 8,
    setembro: 9,
    outubro: 10,
    novembro: 11,
    dezembro: 12
};

function main(workbook: ExcelScript.Workbook, ano: number): number {
    if (!Number.isInteger(ano) || ano < 2020 || ano > 2100) {
        throw new Error("Informe o ano da planilha, por exemplo 2026.");
    }

    const atualizadoEm = new Date().toISOString();
    const hoje = new Date();
    const dataInicial = `${ano}-09-01`;
    const dataFinal = `${hoje.getUTCFullYear()}-${String(hoje.getUTCMonth() + 1).padStart(2, "0")}-${String(hoje.getUTCDate()).padStart(2, "0")}`;
    const registros: RegistroDisponibilidade[] = [];

    workbook.getWorksheets().forEach((aba) => {
        const mes = MESES_EXPORTACAO[normalizarTextoExportacao(aba.getName())];
        if (!mes || mes < 9) return;

        const intervalo = aba.getRange("A1:AG200");
        const textos = intervalo.getTexts();
        const valores = intervalo.getValues();
        const linhaCabecalho = 1;
        const colunaMatricula = 0;
        const colunaNome = 1;
        const colunasData: { coluna: number; dia: number }[] = [];

        textos[linhaCabecalho].forEach((cabecalho, coluna) => {
            if (coluna === colunaNome || coluna === colunaMatricula) return;
            const dia = extrairDiaExportacao(cabecalho, valores[linhaCabecalho][coluna]);
            if (dia !== null) colunasData.push({ coluna, dia });
        });

        for (let linha = linhaCabecalho + 1; linha < textos.length; linha += 1) {
            const nome = String(textos[linha][colunaNome] || "").trim();
            const matricula = String(textos[linha][colunaMatricula] || "").trim();
            if (!nome || !matricula) continue;

            colunasData.forEach(({ coluna, dia }) => {
                const data = `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
                if (data < dataInicial || data > dataFinal) return;

                const disponibilidade = interpretarDisponibilidadeExportacao(textos[linha][coluna], valores[linha][coluna]);
                registros.push({
                    data,
                    nome,
                    matricula,
                    horasDisponiveis: disponibilidade.horas,
                    situacao: disponibilidade.situacao,
                    atualizadoEm
                });
            });
        }
    });

    if (!registros.length) {
        throw new Error("Nenhum registro foi encontrado. Confirme que as abas Setembro em diante possuem datas na linha 2, matrículas na coluna A e nomes na coluna B.");
    }

    const nomeAbaDestino = "Disponibilidade Site";
    const abaExistente = workbook.getWorksheet(nomeAbaDestino);
    const abaDestino = abaExistente || workbook.addWorksheet(nomeAbaDestino);
    abaDestino.getUsedRange()?.clear(ExcelScript.ClearApplyTo.all);

    const linhas: (string | number)[][] = [[
        "DATA",
        "NOME",
        "MATRÍCULA",
        "HORAS DISPONÍVEIS",
        "SITUAÇÃO",
        "ATUALIZADO EM"
    ]];

    registros.forEach((registro) => {
        linhas.push([
            registro.data,
            registro.nome,
            registro.matricula,
            registro.horasDisponiveis,
            registro.situacao,
            registro.atualizadoEm
        ]);
    });

    abaDestino.getRangeByIndexes(0, 0, linhas.length, linhas[0].length).setValues(linhas);
    abaDestino.getRange("A1:F1").getFormat().getFont().setBold(true);
    abaDestino.getUsedRange()?.getFormat().autofitColumns();
    abaDestino.activate();

    return registros.length;
}

function extrairDiaExportacao(texto: string, valor: string | number | boolean): number | null {
    if (typeof valor === "number" && valor > 1) {
        const data = new Date(Math.round((valor - 25569) * 86400 * 1000));
        const dia = data.getUTCDate();
        return dia >= 1 && dia <= 31 ? dia : null;
    }

    const encontrado = String(texto || "").trim().match(/^(\d{1,2})(?:\D|$)/);
    const dia = encontrado ? Number(encontrado[1]) : 0;
    return dia >= 1 && dia <= 31 ? dia : null;
}

function interpretarDisponibilidadeExportacao(texto: string, valor: string | number | boolean): { horas: number; situacao: string } {
    if (typeof valor === "number" && Number.isFinite(valor)) {
        return { horas: Math.max(0, Number(valor.toFixed(2))), situacao: "" };
    }

    const textoLimpo = String(texto || "").trim();
    const numero = Number(textoLimpo.replace(",", "."));
    if (textoLimpo && Number.isFinite(numero)) {
        return { horas: Math.max(0, Number(numero.toFixed(2))), situacao: "" };
    }

    const normalizado = normalizarTextoExportacao(textoLimpo);
    if (!normalizado) return { horas: 0, situacao: "Sem horas disponíveis" };
    if (normalizado.includes("ferias")) return { horas: 0, situacao: "Férias" };
    if (normalizado.includes("afast")) return { horas: 0, situacao: "Afastamento" };
    if (normalizado.includes("atestad")) return { horas: 0, situacao: "Atestado" };
    if (normalizado.includes("falta")) return { horas: 0, situacao: "Falta" };
    return { horas: 0, situacao: textoLimpo };
}

function normalizarTextoExportacao(valor: string): string {
    return String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();
}