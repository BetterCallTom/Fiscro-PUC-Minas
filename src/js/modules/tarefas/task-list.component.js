// modules/tarefas/task-list.component.js — apresentação da lista de tarefas.
// Renderiza o estado recebido e delega ações (toggle/remove) via callbacks.

import { STATUS } from "./task.model.js";
import { formatBR } from "../../shared/utils/date.js";

export function renderTaskList(container, tasks, { onToggle, onRemove }) {
  if (!tasks.length) {
    container.innerHTML = `<p class="empty">Nenhuma tarefa ainda. Adicione a primeira acima.</p>`;
    return;
  }

  container.innerHTML = `
    <ul class="task-list" aria-live="polite">
      ${tasks.map(itemTemplate).join("")}
    </ul>
  `;

  container
    .querySelectorAll("[data-action='toggle']")
    .forEach((el) => el.addEventListener("change", () => onToggle(el.dataset.id)));
  container
    .querySelectorAll("[data-action='remove']")
    .forEach((el) => el.addEventListener("click", () => onRemove(el.dataset.id)));
}

function itemTemplate(task) {
  const done = task.status === STATUS.CONCLUIDA;
  return `
    <li class="task-item ${done ? "is-done" : ""}">
      <label class="task-check">
        <input type="checkbox" data-action="toggle" data-id="${task.id}" ${done ? "checked" : ""} />
        <span class="task-title">${escapeHtml(task.titulo)}</span>
      </label>
      ${task.descricao ? `<span class="task-desc">${escapeHtml(task.descricao)}</span>` : ""}
      <span class="task-date">${formatBR(task.criadaEm)}</span>
      <button class="btn btn-danger" data-action="remove" data-id="${task.id}"
              aria-label="Remover tarefa: ${escapeHtml(task.titulo)}">✕</button>
    </li>
  `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
