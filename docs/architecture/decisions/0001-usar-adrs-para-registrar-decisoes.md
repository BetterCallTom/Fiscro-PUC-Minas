# ADR-0001: Usar ADRs para registrar decisões de arquitetura

## Status

Aceito

## Contexto

O projeto é desenvolvido por uma equipe de até 5 integrantes ao longo de várias etapas
da disciplina *Projeto - Aplicações Web*. Decisões de arquitetura tomadas em reuniões ou
conversas informais tendem a se perder, gerando retrabalho, divergências entre integrantes
e dificuldade para o professor/orientador entender *por que* o sistema é como é.

Richards & Ford recomendam que decisões arquiteturalmente significativas — aquelas que
afetam estrutura, características não funcionais, dependências ou técnicas de construção —
sejam documentadas de forma leve, versionada junto ao código e imutável no tempo.

## Decisão

**Nós vamos** registrar toda decisão arquiteturalmente significativa como um ADR em
`docs/architecture/decisions/`, usando o formato de Richards/Ford (Status, Contexto,
Decisão, Consequências, Governança, Notas), a partir do `template.md`.

Regras:

- Um ADR por decisão, numerado sequencialmente (`NNNN-titulo.md`).
- ADRs são **imutáveis** após aceitos. Para mudar de rumo, cria-se um novo ADR com
  status "Substituído por ADR-XXXX" no antigo.
- Uma decisão é "arquiteturalmente significativa" se afeta estrutura, características
  de arquitetura (`-ilities`), dependências, interfaces ou técnicas de construção.

## Consequências

- (+) Histórico rastreável do *porquê* das decisões; onboarding de novos integrantes mais rápido.
- (+) Material direto para a documentação e apresentação exigidas pela disciplina.
- (+) Força a equipe a explicitar trade-offs antes de codar.
- (−) Exige disciplina para manter os ADRs atualizados; um pequeno custo de processo.

## Governança

- O `README` de `docs/architecture/` mantém o índice de todos os ADRs.
- Toda alteração estrutural em `src/` deve vir acompanhada de (ou referenciar) um ADR no PR.
- Revisão de código verifica: existe ADR para a decisão? Está no formato do template?

## Notas

- **Autor(es):** Equipe
- **Data de aprovação:** 20/09/2026
- **Aprovado por:** Equipe
- **Última modificação:** 20/09/2026
