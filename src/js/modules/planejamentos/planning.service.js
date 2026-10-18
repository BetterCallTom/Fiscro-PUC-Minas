import { createRepository } from "../../shared/storageService.js";

const repo = createRepository("fiscro:planejamentos:v1");

function gerarId() {
  return `plan_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function calcularIndicadores({ investimento = 0, custosFixos = 0, custosVariaveis = 0, faturamento = 0 }) {
  const cvPerc = Math.min(Math.max(custosVariaveis, 0), 100) / 100;
  const margemContribuicao = faturamento > 0 ? ((faturamento - faturamento * cvPerc) / faturamento) * 100 : 0;
  const pontoEquilibrio = margemContribuicao > 0 ? custosFixos / (margemContribuicao / 100) : null;
  const lucroMensal = faturamento - custosFixos - faturamento * cvPerc;
  const roi = investimento > 0 ? (lucroMensal / investimento) * 100 : null;
  const payback = lucroMensal > 0 && investimento > 0 ? investimento / lucroMensal : null;
  const viavel = lucroMensal > 0 && (pontoEquilibrio === null || faturamento >= pontoEquilibrio);

  return {
    margemContribuicao: +margemContribuicao.toFixed(2),
    pontoEquilibrio: pontoEquilibrio !== null ? +pontoEquilibrio.toFixed(2) : null,
    lucroMensal: +lucroMensal.toFixed(2),
    roi: roi !== null ? +roi.toFixed(2) : null,
    payback: payback !== null ? +payback.toFixed(1) : null,
    viavel,
  };
}

export const planningService = {
  async list() {
    const plans = await repo.getAll();
    return plans.sort((a, b) => (a.criadoEm < b.criadoEm ? 1 : -1));
  },

  async getById(id) {
    return repo.getById(id);
  },

  async salvar({ nome, negocio, financeiro }) {
    if (!nome?.trim()) throw new Error("O planejamento precisa ter um nome.");
    if (!financeiro?.faturamento || financeiro.faturamento <= 0)
      throw new Error("O faturamento projetado é obrigatório e deve ser maior que zero.");

    const agora = new Date().toISOString();
    const plano = {
      id: gerarId(),
      nome: nome.trim(),
      negocio: negocio ?? {},
      financeiro: {
        investimento: financeiro.investimento ?? 0,
        custosFixos: financeiro.custosFixos ?? 0,
        custosVariaveis: financeiro.custosVariaveis ?? 0,
        faturamento: financeiro.faturamento,
      },
      resultado: calcularIndicadores(financeiro),
      criadoEm: agora,
      atualizadoEm: agora,
    };

    return repo.save(plano);
  },

  async atualizar(id, { nome, negocio, financeiro }) {
    const existing = await repo.getById(id);
    if (!existing) throw new Error("Planejamento não encontrado.");

    const fin = { ...existing.financeiro, ...financeiro };
    const plano = {
      ...existing,
      nome: nome?.trim() ?? existing.nome,
      negocio: negocio ?? existing.negocio,
      financeiro: fin,
      resultado: calcularIndicadores(fin),
      atualizadoEm: new Date().toISOString(),
    };

    return repo.save(plano);
  },

  async remover(id) {
    return repo.remove(id);
  },

  onExternalChange(callback) {
    return repo.subscribe(callback);
  },
};
