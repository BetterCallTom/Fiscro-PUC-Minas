// modules/tarefas/task.service.js — regras de negócio do domínio "tarefas".
// Fala com a persistência SOMENTE via shared/storageService (ADR-0004).

import { createRepository } from "../../shared/storageService.js";
import { createTask, validateTask, toggleStatus } from "./task.model.js";

const repo = createRepository("fiscro:tasks:v1");

export const taskService = {
  /** Lista as tarefas, mais recentes primeiro. */
  async list() {
    const tasks = await repo.getAll();
    return tasks.sort((a, b) => (a.criadaEm < b.criadaEm ? 1 : -1));
  },

  /** Cria uma tarefa validada. Lança Error com as mensagens se inválida. */
  async add({ titulo, descricao }) {
    const errors = validateTask({ titulo });
    if (errors.length) throw new Error(errors.join(" "));
    return repo.save(createTask({ titulo, descricao }));
  },

  /** Alterna o status (pendente ↔ concluída). */
  async toggle(id) {
    const task = await repo.getById(id);
    if (!task) return null;
    return repo.save(toggleStatus(task));
  },

  /** Remove uma tarefa. */
  async remove(id) {
    return repo.remove(id);
  },

  /** Observa mudanças feitas em outras abas. @returns função de cancelamento. */
  onExternalChange(callback) {
    return repo.subscribe(callback);
  },
};
