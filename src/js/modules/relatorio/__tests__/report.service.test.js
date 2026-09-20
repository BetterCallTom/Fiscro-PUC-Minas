import { describe, it, expect, beforeEach } from "vitest";
import { taskService } from "../../tarefas/task.service.js";
import { reportService } from "../report.service.js";
import { currentMonthKey } from "../../../shared/utils/date.js";

describe("report.service — relatório mensal (RF-002)", () => {
  beforeEach(() => localStorage.clear());

  it("conta apenas tarefas concluídas no mês", async () => {
    const t1 = await taskService.add({ titulo: "Concluída" });
    await taskService.add({ titulo: "Pendente" });
    await taskService.toggle(t1.id); // conclui a primeira

    const rel = await reportService.monthlyCompleted(currentMonthKey());
    expect(rel.total).toBe(1);
    expect(rel.tarefas[0].titulo).toBe("Concluída");
  });

  it("lista os meses com tarefas concluídas", async () => {
    const t = await taskService.add({ titulo: "Tarefa concluída" });
    await taskService.toggle(t.id);
    const meses = await reportService.availableMonths();
    expect(meses).toContain(currentMonthKey());
  });

  it("retorna vazio quando não há concluídas", async () => {
    await taskService.add({ titulo: "Só pendente" });
    expect(await reportService.availableMonths()).toHaveLength(0);
  });
});
