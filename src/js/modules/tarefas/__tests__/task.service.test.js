import { describe, it, expect, beforeEach } from "vitest";
import { taskService } from "../task.service.js";

describe("task.service (integração com LocalStorage)", () => {
  beforeEach(() => localStorage.clear());

  it("adiciona e lista tarefas", async () => {
    await taskService.add({ titulo: "Primeira" });
    const tasks = await taskService.list();
    expect(tasks).toHaveLength(1);
    expect(tasks[0].titulo).toBe("Primeira");
  });

  it("rejeita título inválido", async () => {
    await expect(taskService.add({ titulo: "" })).rejects.toThrow();
    expect(await taskService.list()).toHaveLength(0);
  });

  it("alterna o status de uma tarefa", async () => {
    const t = await taskService.add({ titulo: "Alternar" });
    const done = await taskService.toggle(t.id);
    expect(done.status).toBe("concluida");
  });

  it("remove uma tarefa", async () => {
    const t = await taskService.add({ titulo: "Remover" });
    expect(await taskService.remove(t.id)).toBe(true);
    expect(await taskService.list()).toHaveLength(0);
  });
});
