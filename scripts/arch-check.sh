#!/usr/bin/env bash
# Fitness functions executáveis — governança da arquitetura (ADR-0003, ADR-0004).
# Falha (exit 1) se alguma regra estrutural for violada.
set -uo pipefail

fail=0
check() {
  local nome="$1"; shift
  local saida
  saida="$("$@" 2>/dev/null)"
  if [ -n "$saida" ]; then
    echo "❌ $nome — violações:"
    echo "$saida" | sed 's/^/    /'
    fail=1
  else
    echo "✅ $nome"
  fi
}

# FF-01: localStorage só dentro de shared/storageService.js (testes podem usá-lo)
check "FF-01 isolamento da persistência" \
  bash -c "grep -rn 'localStorage\\.' src/js --exclude=storageService.js --exclude-dir=__tests__"

# FF-02: nenhum ciclo — 'tarefas' não pode importar 'relatorio'
check "FF-02 sem ciclos entre módulos" \
  bash -c "grep -rn '^import' src/js/modules/tarefas | grep 'relatorio'"

# FF-02b: cross-imports só apontam para *.service.js público (ou shared/)
check "FF-02b cross-import só via API pública" \
  bash -c "grep -rhn '^import' src/js/modules/*/*.js | grep -E '\\.\\./[a-z]+/' | grep -v 'service.js' | grep -v 'shared/'"

# FF-07: shared/ não depende de modules/
check "FF-07 shared não importa modules" \
  bash -c "grep -rn 'modules/' src/js/shared"

echo
if [ "$fail" -ne 0 ]; then
  echo "Arquitetura: FALHOU — corrija as violações acima."
  exit 1
fi
echo "Arquitetura: OK — todas as fitness functions passaram."
