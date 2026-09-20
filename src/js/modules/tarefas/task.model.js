// modules/tarefas/task.model.js — entidade Task e validação de domínio.

import { nowISO } from "../../shared/utils/date.js";

export const STATUS = Object.freeze({
  PENDENTE: "pendente",
  CONCLUIDA: "concluida",
});

/**
 * Cria uma nova tarefa consistente.
 * @param {{titulo: string, descricao?: string}} dados
 */
export function createTask({ titulo, descricao = "" }) {
  return {
    id: crypto.randomUUID(),
    titulo: titulo.trim(),
    descricao: descricao.trim(),
    status: STATUS.PENDENTE,
    criadaEm: nowISO(),
    concluidaEm: null,
  };
}

/**
 * Valida os dados de uma tarefa. @returns {string[]} lista de erros (vazia = válido).
 */
export function validateTask({ titulo }) {
  const errors = [];
  if (!titulo || !titulo.trim()) errors.push("O título é obrigatório.");
  else if (titulo.trim().length < 3) errors.push("O título deve ter ao menos 3 caracteres.");
  return errors;
}

/** Retorna uma cópia da tarefa com o status alternado. */
export function toggleStatus(task) {
  const concluida = task.status !== STATUS.CONCLUIDA;
  return {
    ...task,
    status: concluida ? STATUS.CONCLUIDA : STATUS.PENDENTE,
    concluidaEm: concluida ? nowISO() : null,
  };
}
