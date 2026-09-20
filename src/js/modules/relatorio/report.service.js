// modules/relatorio/report.service.js — regras do domínio "relatório".
// Depende de "tarefas" APENAS via sua API pública (taskService exportado) — ADR-0003.
// Não importa internals de outro módulo (model/component): dependência dirigida e acíclica.

import { taskService } from "../tarefas/task.service.js";
import { monthKey, currentMonthKey } from "../../shared/utils/date.js";

// Uma tarefa está concluída quando possui data de conclusão (contrato público do dado).
const isConcluida = (t) => Boolean(t.concluidaEm);

export const reportService = {
  /**
   * Relatório de tarefas concluídas em um mês (RF-002).
   * @param {string} mes chave "AAAA-MM"; padrão = mês atual.
   */
  async monthlyCompleted(mes = currentMonthKey()) {
    const tasks = await taskService.list();
    const concluidas = tasks.filter((t) => isConcluida(t) && monthKey(t.concluidaEm) === mes);
    return {
      mes,
      total: concluidas.length,
      tarefas: concluidas,
    };
  },

  /** Lista os meses (AAAA-MM) que possuem tarefas concluídas, desc. */
  async availableMonths() {
    const tasks = await taskService.list();
    const meses = new Set(tasks.filter(isConcluida).map((t) => monthKey(t.concluidaEm)));
    return [...meses].sort().reverse();
  },
};
