interface DisponibilidadeDiaria {
    data: string;
    nome: string;
    matricula: string;
    horasDisponiveis: number;
    situacao: string;
    atualizadoEm: string;
}

const MESES: Record<string, number> = {
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

function main(workbook: ExcelScript.Workbook, dataReferencia: string): DisponibilidadeDiaria[] {
    const partesData = String(dataReferencia || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!partesData) {
        throw new Error("Informe a data no formato AAAA-MM-DD, por exemplo 2026-08-15.");
    }

    const ano = Number(partesData[1]);
    const mes = Number(partesData[2]);
    const dia = Number(partesData[3]);
    const dataValidada = new Date(Date.UTC(ano, mes - 1, dia));
    if (dataValidada.getUTCFullYear() !== ano || dataValidada.getUTCMonth() + 1 !== mes || dataValidada.getUTCDate() !== dia) {
        throw new Error("A data informada não é válida.");
    }

    const nomeMes = Object.keys(MESES).find((nome) => MESES[nome] === mes);
    const aba = workbook.getWorksheets().find((planilha) => normalizarTexto(planilha.getName()) === nomeMes);
    if (!aba) {
        throw new Error(`A aba referente ao mês ${String(mes).padStart(2, "0")} não foi encontrada.`);
    }

    const intervalo = aba.getUsedRange();
    if (!intervalo) return [];

    const textos = intervalo.getTexts();
    const valores = intervalo.getValues();
    const localizacao = localizarCabecalhos(textos);
    if (!localizacao) {
        throw new Error(`O cabeçalho Colaborador não foi encontrado na aba ${aba.getName()}.`);
    }

    const { linhaCabecalho, colunaNome, colunaMatricula } = localizacao;
    const colunaData = textos[linhaCabecalho].findIndex((cabecalho, coluna) => {
        return coluna !== colunaNome
            && coluna !== colunaMatricula
            && extrairDia(cabecalho, valores[linhaCabecalho][coluna]) === dia;
    });
    if (colunaData < 0) {
        return [];
    }

    const atualizadoEm = new Date().toISOString();
    const disponibilidades: DisponibilidadeDiaria[] = [];

    for (let linha = linhaCabecalho + 1; linha < textos.length; linha += 1) {
        const nome = String(textos[linha][colunaNome] || "").trim();
        const matricula = String(textos[linha][colunaMatricula] || "").trim();
        if (!nome || !matricula) continue;

        const disponibilidade = interpretarDisponibilidade(textos[linha][colunaData], valores[linha][colunaData]);
        disponibilidades.push({
            data: dataReferencia,
            nome,
            matricula,
            horasDisponiveis: disponibilidade.horas,
            situacao: disponibilidade.situacao,
            atualizadoEm
        });
    }

    return disponibilidades;
}

function localizarCabecalhos(textos: string[][]): { linhaCabecalho: number; colunaNome: number; colunaMatricula: number } | null {
    for (let linha = 0; linha < Math.min(textos.length, 10); linha += 1) {
        const cabecalhos = textos[linha].map((valor) => normalizarTexto(valor));
        const colunaCabecalhoNome = cabecalhos.findIndex((valor) => valor.includes("colaborador") || valor === "nome");
        const colunaMatriculaComCabecalho = cabecalhos.findIndex((valor) => valor.includes("matricula"));
        if (colunaCabecalhoNome < 0) continue;

        const cabecalhoMescladoNasPrimeirasColunas = colunaCabecalhoNome === 0 && colunaMatriculaComCabecalho < 0;
        const colunaNome = cabecalhoMescladoNasPrimeirasColunas ? 1 : colunaCabecalhoNome;
        const colunaMatricula = colunaMatriculaComCabecalho >= 0
            ? colunaMatriculaComCabecalho
            : cabecalhoMescladoNasPrimeirasColunas ? 0 : colunaNome - 1;

        if (colunaNome >= 0 && colunaMatricula >= 0) {
            return { linhaCabecalho: linha, colunaNome, colunaMatricula };
        }
    }

    return null;
}

function extrairDia(texto: string, valor: string | number | boolean): number | null {
    if (typeof valor === "number" && valor > 1) {
        const data = new Date(Math.round((valor - 25569) * 86400 * 1000));
        const dia = data.getUTCDate();
        return dia >= 1 && dia <= 31 ? dia : null;
    }

    const encontrado = String(texto || "").trim().match(/^(\d{1,2})(?:\D|$)/);
    const dia = encontrado ? Number(encontrado[1]) : 0;
    return dia >= 1 && dia <= 31 ? dia : null;
}

function interpretarDisponibilidade(texto: string, valor: string | number | boolean): { horas: number; situacao: string } {
    if (typeof valor === "number" && Number.isFinite(valor)) {
        return { horas: Math.max(0, Number(valor.toFixed(2))), situacao: "" };
    }

    const textoLimpo = String(texto || "").trim();
    const numero = Number(textoLimpo.replace(",", "."));
    if (textoLimpo && Number.isFinite(numero)) {
        return { horas: Math.max(0, Number(numero.toFixed(2))), situacao: "" };
    }

    const normalizado = normalizarTexto(textoLimpo);
    if (!normalizado) return { horas: 0, situacao: "Sem horas disponíveis" };
    if (normalizado.includes("ferias")) return { horas: 0, situacao: "Férias" };
    if (normalizado.includes("afast")) return { horas: 0, situacao: "Afastamento" };
    if (normalizado.includes("atestad")) return { horas: 0, situacao: "Atestado" };
    if (normalizado.includes("falta")) return { horas: 0, situacao: "Falta" };
    return { horas: 0, situacao: textoLimpo };
}

function normalizarTexto(valor: string): string {
    return String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();
}