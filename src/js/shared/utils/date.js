// shared/utils/date.js — utilitários de data transversais.

/** Retorna a data/hora atual em ISO 8601. */
export function nowISO() {
  return new Date().toISOString();
}

/** Formata um ISO para exibição pt-BR (dd/mm/aaaa). */
export function formatBR(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR");
}

/** Chave de mês "AAAA-MM" a partir de um ISO — usada no relatório mensal (RF-002). */
export function monthKey(iso) {
  return (iso ?? "").slice(0, 7);
}

/** Chave do mês atual "AAAA-MM". */
export function currentMonthKey() {
  return nowISO().slice(0, 7);
}
