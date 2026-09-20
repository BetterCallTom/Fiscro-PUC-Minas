import { describe, it, expect } from "vitest";
import { createTask, validateTask, toggleStatus, STATUS } from "../task.model.js";

describe("task.model", () => {
  describe("validateTask", () => {
    it("exige título", () => {
      expect(validateTask({ titulo: "" })).toHaveLength(1);
    });

    it("exige ao menos 3 caracteres", () => {
      expect(validateTask({ titulo: "ab" })).toHaveLength(1);
    });

    it("aceita título válido", () => {
      expect(validateTask({ titulo: "Estudar" })).toHaveLength(0);
    });
  });

  describe("createTask", () => {
    it("cria tarefa pendente com id e data", () => {
      const t = createTask({ titulo: "  Ler capítulo  ", descricao: " x " });
      expect(t.id).toBeTruthy();
      expect(t.titulo).toBe("Ler capítulo"); // trim aplicado
      expect(t.status).toBe(STATUS.PENDENTE);
      expect(t.criadaEm).toMatch(/^\d{4}-\d{2}-\d{2}T/);
      expect(t.concluidaEm).toBeNull();
    });
  });

  describe("toggleStatus", () => {
    it("marca como concluída e registra a data", () => {
      const t = createTask({ titulo: "Tarefa" });
      const done = toggleStatus(t);
      expect(done.status).toBe(STATUS.CONCLUIDA);
      expect(done.concluidaEm).not.toBeNull();
    });

    it("volta para pendente e limpa a data", () => {
      const t = toggleStatus(createTask({ titulo: "Tarefa" }));
      const back = toggleStatus(t);
      expect(back.status).toBe(STATUS.PENDENTE);
      expect(back.concluidaEm).toBeNull();
    });
  });
});
