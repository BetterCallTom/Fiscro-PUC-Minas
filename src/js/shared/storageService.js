export class StorageError extends Error {
  constructor(message, { cause } = {}) {
    super(message);
    this.name = "StorageError";
    this.cause = cause;
  }
}

export function createRepository(storageKey) {
  function readAll() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function writeAll(items) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (cause) {
      throw new StorageError(
        "Não foi possível salvar: o armazenamento local está cheio ou indisponível.",
        { cause }
      );
    }
  }

  return {
    async getAll() {
      return readAll();
    },

    async getById(id) {
      return readAll().find((it) => it.id === id) ?? null;
    },

    async save(item) {
      const items = readAll();
      const idx = items.findIndex((it) => it.id === item.id);
      if (idx >= 0) items[idx] = item;
      else items.push(item);
      writeAll(items);
      return item;
    },

    async remove(id) {
      const items = readAll();
      const next = items.filter((it) => it.id !== id);
      writeAll(next);
      return next.length !== items.length;
    },

    subscribe(callback) {
      const handler = (e) => {
        if (e.key === storageKey) callback(readAll());
      };
      window.addEventListener("storage", handler);
      return () => window.removeEventListener("storage", handler);
    },
  };
}
