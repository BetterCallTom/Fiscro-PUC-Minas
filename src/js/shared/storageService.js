// shared/storageService.js
// ÚNICA porta de acesso à persistência (ADR-0004).
// Interface assíncrona por design: permite trocar LocalStorage por outra fonte no futuro
// sem alterar services de domínio, controllers ou components.

/** Erro de domínio da persistência — permite à UI reagir a falhas de storage. */
export class StorageError extends Error {
  constructor(message, { cause } = {}) {
    super(message);
    this.name = "StorageError";
    this.cause = cause;
  }
}

/**
 * Cria um repositório persistido em LocalStorage para uma coleção de itens { id, ... }.
 * @param {string} storageKey chave versionada, ex.: "fiscro:tasks:v1"
 */
export function createRepository(storageKey) {
  function readAll() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      // Dado corrompido ou storage indisponível: trata como coleção vazia.
      return [];
    }
  }

  function writeAll(items) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (cause) {
      // QuotaExceededError ou storage bloqueado (ex.: modo privado): propaga tratável.
      throw new StorageError(
        "Não foi possível salvar: o armazenamento local está cheio ou indisponível.",
        { cause }
      );
    }
  }

  return {
    /** @returns {Promise<Array>} todos os itens */
    async getAll() {
      return readAll();
    },

    /** @returns {Promise<object|null>} item pelo id */
    async getById(id) {
      return readAll().find((it) => it.id === id) ?? null;
    },

    /** Insere ou atualiza (upsert) pelo id. @returns {Promise<object>} */
    async save(item) {
      const items = readAll();
      const idx = items.findIndex((it) => it.id === item.id);
      if (idx >= 0) items[idx] = item;
      else items.push(item);
      writeAll(items);
      return item;
    },

    /** Remove pelo id. @returns {Promise<boolean>} */
    async remove(id) {
      const items = readAll();
      const next = items.filter((it) => it.id !== id);
      writeAll(next);
      return next.length !== items.length;
    },

    /**
     * Observa alterações desta coleção feitas em OUTRAS abas/janelas (evento nativo
     * `storage`), mantendo as telas sincronizadas. @returns função para cancelar.
     */
    subscribe(callback) {
      const handler = (e) => {
        if (e.key === storageKey) callback(readAll());
      };
      window.addEventListener("storage", handler);
      return () => window.removeEventListener("storage", handler);
    },
  };
}
