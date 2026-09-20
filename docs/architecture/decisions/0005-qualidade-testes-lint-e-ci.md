# ADR-0005: Qualidade automatizada — testes, lint e CI

## Status

Aceito

## Contexto

A equipe tem até 5 integrantes, é iniciante e trabalha em paralelo. Sem verificações
automáticas, regressões e violações das regras de arquitetura (ADR-0003/0004) só seriam
pegas por revisão manual — frágil para novatos. A disciplina também exige testes de software
(ETAPA 4).

Richards & Ford defendem *fitness functions* automatizadas para evitar a erosão da
arquitetura. Faltava transformar as regras (hoje documentadas) e a lógica de domínio em
verificações executáveis, sem introduzir complexidade desproporcional ao projeto (que
permanece um front-end estático — ADR-0002).

## Decisão

**Nós vamos** adotar um conjunto **mínimo e proporcional** de qualidade automatizada:

- **Testes unitários** com **Vitest** (ambiente jsdom), cobrindo a lógica de domínio pura
  (`task.model`) e os services (`task.service`, `report.service`). Testes colocados por
  módulo em `__tests__/`, reforçando o ownership.
- **Lint** com **ESLint** (flat config) e **formatação** com **Prettier**, mais
  `.editorconfig`, para consistência entre integrantes.
- **Fitness functions executáveis** em `scripts/arch-check.sh` (`npm run arch:check`),
  cobrindo FF-01, FF-02 e FF-07.
- **CI** em GitHub Actions (`.github/workflows/ci.yml`) rodando arquitetura + lint +
  formatação + testes a cada push e pull request.

Node.js é usado **apenas** como ferramenta de desenvolvimento; a aplicação continua estática,
sem etapa de build para produção.

## Consequências

- (+) Regressões e violações de arquitetura são detectadas automaticamente, sem depender de um revisor experiente.
- (+) Cumpre a exigência de testes da ETAPA 4 com prática de mercado real.
- (+) Padroniza estilo de código entre 5 pessoas.
- (−) Introduz Node/npm e um `package.json` de dev — pequena curva de aprendizado inicial.
- (−) Requer manter os testes atualizados junto com o código.

## Governança

- O próprio CI é o mecanismo de governança: PR só é mesclado com o workflow verde.
- `npm run arch:check` também roda localmente (documentado no `CONTRIBUTING.md`).

## Notas

- **Autor(es):** Equipe
- **Data de aprovação:** 20/09/2026
- **Aprovado por:** Equipe
- **Última modificação:** 20/09/2026
