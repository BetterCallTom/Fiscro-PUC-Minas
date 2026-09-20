// shared/httpClient.js
// Wrapper de fetch com timeout (RNF-002: ≤ 3s). Ainda não usado na persistência atual
// (LocalStorage — ADR-0004), mas pronto para consumir APIs externas ou json-server.

const DEFAULT_TIMEOUT_MS = 3000;

export async function request(url, { timeout = DEFAULT_TIMEOUT_MS, ...options } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status} ao acessar ${url}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}
