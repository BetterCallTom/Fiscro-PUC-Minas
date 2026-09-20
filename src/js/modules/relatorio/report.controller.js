// modules/relatorio/report.controller.js — orquestra a tela de relatório mensal (RF-002).

import { reportService } from "./report.service.js";
import { formatBR } from "../../shared/utils/date.js";

export async function initRelatorio(root = document) {
  const selectEl = root.querySelector("#report-month");
  const outputEl = root.querySelector("#report-output");
  if (!selectEl || !outputEl) return;

  const meses = await reportService.availableMonths();
  if (!meses.length) {
    outputEl.innerHTML = `<p class="empty">Ainda não há tarefas concluídas para relatar.</p>`;
    selectEl.disabled = true;
    return;
  }

  selectEl.innerHTML = meses
    .map((m) => `<option value="${m}">${formatMonthLabel(m)}</option>`)
    .join("");

  async function render(mes) {
    const rel = await reportService.monthlyCompleted(mes);
    outputEl.innerHTML = `
      <p class="report-summary">
        <strong>${rel.total}</strong> tarefa(s) concluída(s) em ${formatMonthLabel(rel.mes)}.
      </p>
      <ul class="task-list">
        ${rel.tarefas
          .map(
            (t) => `<li class="task-item is-done">
              <span class="task-title">${escapeHtml(t.titulo)}</span>
              <span class="task-date">${formatBR(t.concluidaEm)}</span>
            </li>`
          )
          .join("")}
      </ul>
    `;
  }

  selectEl.addEventListener("change", () => render(selectEl.value));
  render(meses[0]);
}

function formatMonthLabel(m) {
  const [ano, mes] = m.split("-");
  const nomes = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];
  return `${nomes[Number(mes) - 1]}/${ano}`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
