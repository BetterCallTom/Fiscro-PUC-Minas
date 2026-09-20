// modules/tarefas/task.controller.js — orquestra a tela de tarefas.
// Liga eventos da UI (components) às regras de negócio (service).

import { taskService } from "./task.service.js";
import { renderTaskForm } from "./task-form.component.js";
import { renderTaskList } from "./task-list.component.js";

export async function initTarefas(root = document) {
  const formEl = root.querySelector("#task-form");
  const listEl = root.querySelector("#task-list");
  if (!formEl || !listEl) return;

  async function refresh() {
    try {
      const tasks = await taskService.list();
      renderTaskList(listEl, tasks, {
        onToggle: async (id) => {
          await taskService.toggle(id);
          refresh();
        },
        onRemove: async (id) => {
          await taskService.remove(id);
          refresh();
        },
      });
    } catch (err) {
      listEl.innerHTML = `<p class="form-error" role="alert">${err.message}</p>`;
    }
  }

  renderTaskForm(formEl, {
    onSubmit: async (data) => {
      await taskService.add(data);
      refresh();
    },
  });

  // Mantém a lista sincronizada quando outra aba altera as tarefas.
  taskService.onExternalChange(() => refresh());

  refresh();
}
