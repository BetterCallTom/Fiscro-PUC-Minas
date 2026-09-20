# Fitness Functions (Governança da Arquitetura)

> Richards & Ford definem uma *fitness function* como "qualquer mecanismo que fornece uma
> avaliação objetiva de que alguma característica de arquitetura foi atendida". Elas
> transformam decisões (ADRs) e características (`-ilities`) em verificações — automatizadas
> ou manuais — evitando a **erosão / decaimento** da arquitetura ao longo do tempo.

Cada fitness function abaixo protege uma decisão registrada em um ADR.

## FF-01 — Isolamento da persistência

- **Protege:** ADR-0004 (LocalStorage atrás de camada única) · Manutenibilidade.
- **Tipo:** automatizada / revisão de PR.
- **Verificação:** nenhum acesso direto a `localStorage` fora de `shared/storageService.js`.

```bash
# Deve retornar VAZIO (nenhuma violação). Testes podem usar localStorage:
grep -rn "localStorage\." src/js --exclude=storageService.js --exclude-dir=__tests__
```

> Todas as verificações abaixo estão automatizadas em `scripts/arch-check.sh`
> (`npm run arch:check`) e rodam no CI a cada push/PR (ver ADR-0005).

## FF-02 — Independência entre módulos

- **Protege:** ADR-0003 (monólito modular por domínio) · Manutenibilidade, Testabilidade.
- **Tipo:** revisão de PR (checklist) + grep auxiliar.
- **Regra:** um módulo não importa arquivos internos de outro módulo (ex.: `tarefas/` não
  importa de `relatorio/` e vice-versa). Comunicação entre domínios passa por service
  exportado ou por `shared/`.

  Além disso, um cross-import só é aceito quando aponta para a **API pública** de outro
  módulo (seu `*.service.js`), nunca para model/component internos. As dependências entre
  módulos devem ser **acíclicas** (ex.: `relatorio → tarefas` é permitido; `tarefas → relatorio` não).

```bash
# Nenhum ciclo: tarefas NÃO pode importar relatorio (deve vir VAZIO):
grep -rn "^import" src/js/modules/tarefas | grep "relatorio"

# Cross-imports existentes devem apontar só para *.service.js de outro módulo:
grep -rn "^import" src/js/modules/*/ | grep -E "\.\./[a-z]+/" | grep -v "service.js" | grep -v "shared/"
```

## FF-07 — Direção da dependência de shared/

- **Protege:** ADR-0003 · Manutenibilidade.
- **Tipo:** revisão de PR + grep.
- **Regra:** `shared/` é transversal e **não** importa de `modules/`.

```bash
# Deve vir VAZIO:
grep -rn "modules/" src/js/shared

## FF-03 — Desempenho (RNF-002)

- **Protege:** RNF-002 (≤ 3s) · Desempenho.
- **Tipo:** manual (teste) ou instrumentação em dev.
- **Verificação:** operações de CRUD e geração de relatório concluem em < 3s. Em dev, medir com
  `performance.now()` em volta das chamadas de service e registrar no plano de testes (ETAPA 4).

## FF-04 — Responsividade (RNF-001)

- **Protege:** RNF-001 · Responsividade.
- **Tipo:** manual / checklist de PR.
- **Verificação:** cada página renderiza sem quebra de layout e sem scroll horizontal nas
  larguras de referência (ex.: 375px, 768px, 1280px). Sem CSS inline de layout.

## FF-05 — Deployability estática

- **Protege:** ADR-0002 (estático, sem build) · Portabilidade/Deployability.
- **Tipo:** manual.
- **Verificação:** o conteúdo de `src/` funciona servido como arquivos estáticos (GitHub Pages
  ou `python -m http.server`), sem passo de compilação/bundling.

## FF-06 — Rastreabilidade de decisões

- **Protege:** ADR-0001 (usar ADRs).
- **Tipo:** revisão de PR.
- **Verificação:** toda mudança estrutural em `src/` referencia ou adiciona um ADR; o índice em
  `docs/architecture/README.md` está atualizado.

---

## Como executar as verificações automatizáveis de uma vez

```bash
# A partir da raiz do projeto:
echo "FF-01:" && grep -rn "localStorage\." src/js --exclude=storageService.js || echo "  OK (vazio)"
echo "FF-02:" && grep -rn -e "modules/relatorio" src/js/modules/tarefas -e "modules/tarefas" src/js/modules/relatorio || echo "  OK (vazio)"
echo "FF-07:" && grep -rn "modules/" src/js/shared || echo "  OK (vazio)"
```

> Evolução sugerida: quando/se o projeto adotar Node em dev (json-server), essas verificações
> podem virar um script `npm run arch:check` e rodar em um GitHub Action a cada push,
> tornando a governança **contínua** (fitness functions "acionadas" / triggered).
