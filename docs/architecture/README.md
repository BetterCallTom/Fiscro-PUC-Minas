# Documentação de Arquitetura

Esta pasta reúne a documentação de arquitetura do projeto, estruturada segundo as práticas
de **Mark Richards & Neal Ford — *Fundamentals of Software Architecture*** (ADRs,
características de arquitetura e fitness functions para governança).

## Conteúdo

- [Modelo C4](c4-model.md) — diagramas de Contexto, Contêiner e Componentes.
- [Características de Arquitetura ("-ilities")](architecture-characteristics.md) — o que o
  sistema precisa ser (e o que deliberadamente não prioriza).
- [Fitness Functions](fitness-functions.md) — como garantimos, de forma objetiva, que a
  arquitetura não se degrada (executáveis via `npm run arch:check`).
- [Architecture Decision Records (ADRs)](#adrs) — o histórico imutável do *porquê* das decisões.

## Visão geral da arquitetura

Aplicação web **estática** (HTML/CSS/JS) organizada como **monólito modular particionado por
domínio**, com **Vanilla JS + ES Modules** e persistência via **LocalStorage** isolada atrás
de um `shared/storageService`. Detalhes e justificativas nos ADRs abaixo.

```
modules/tarefas   → controller → service ┐
modules/relatorio → controller → service ┼→ shared/storageService → LocalStorage
                    (components por módulo)┘   shared/utils · shared/httpClient
```

## ADRs

| # | Título | Status |
|---|--------|--------|
| [0001](decisions/0001-usar-adrs-para-registrar-decisoes.md) | Usar ADRs para registrar decisões de arquitetura | Aceito |
| [0002](decisions/0002-front-end-estatico-vanilla-es-modules.md) | Front-end estático com Vanilla JS e ES Modules | Aceito |
| [0003](decisions/0003-monolito-modular-particionado-por-dominio.md) | Monólito modular particionado por domínio | Aceito |
| [0004](decisions/0004-persistencia-localstorage-com-abstracao.md) | Persistência via LocalStorage com camada de abstração | Aceito |
| [0005](decisions/0005-qualidade-testes-lint-e-ci.md) | Qualidade automatizada — testes, lint e CI | Aceito |

> Novo ADR: copie [`decisions/template.md`](decisions/template.md), numere sequencialmente
> (`NNNN-titulo-em-kebab-case.md`) e adicione a linha na tabela acima. ADRs aceitos são
> **imutáveis**; para mudar de rumo, crie um novo ADR e marque o antigo como
> "Substituído por ADR-XXXX".

## O que é um ADR?

Um **Architecture Decision Record** documenta uma decisão arquiteturalmente significativa,
seu contexto e suas consequências. Formato adotado (Richards/Ford): **Status · Contexto ·
Decisão · Consequências · Governança · Notas**. São leves, versionados junto ao código e
imutáveis — formam a memória de longo prazo do projeto.
