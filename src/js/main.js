// main.js — ponto de entrada. Roteia por [data-page] e inicializa o controller do módulo.

import { initTarefas } from "./modules/tarefas/task.controller.js";
import { initRelatorio } from "./modules/relatorio/report.controller.js";

const routes = {
  tarefas: initTarefas,
  relatorio: initRelatorio,
};

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const init = routes[page];
  if (init) init(document);
});
