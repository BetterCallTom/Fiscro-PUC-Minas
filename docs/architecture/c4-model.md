# Modelo C4 — FISCRO

Documentação visual da arquitetura no [modelo C4](https://c4model.com/) (Simon Brown), nos
níveis proporcionais a este projeto: **Contexto**, **Contêiner** e **Componentes**. Os
diagramas usam Mermaid e renderizam diretamente no GitHub.

## Nível 1 — Contexto

Quem usa o sistema e com o que ele se relaciona.

```mermaid
graph TD
    U["👤 Usuário<br/>(gerencia suas tarefas)"]
    S["🖥️ FISCRO<br/>Aplicação web de gerenciamento de tarefas"]
    B["🌐 Navegador<br/>(LocalStorage p/ persistência)"]

    U -->|usa| S
    S -->|armazena dados em| B
```

## Nível 2 — Contêiner

O FISCRO é um único contêiner: uma aplicação estática servida ao navegador. Não há
back-end nem banco de dados dedicados (ver [ADR-0002](decisions/0002-front-end-estatico-vanilla-es-modules.md)
e [ADR-0004](decisions/0004-persistencia-localstorage-com-abstracao.md)).

```mermaid
graph TD
    U["👤 Usuário"]
    subgraph Navegador
        APP["📦 Aplicação FISCRO<br/>HTML + CSS + JS (ES Modules)"]
        LS[("💾 LocalStorage")]
    end
    U -->|interage| APP
    APP -->|lê/grava| LS
```

## Nível 3 — Componentes

Organização interna como **monólito modular particionado por domínio**
(ver [ADR-0003](decisions/0003-monolito-modular-particionado-por-dominio.md)).

```mermaid
graph TD
    MAIN["main.js<br/>(roteia por data-page)"]

    subgraph "módulo: tarefas"
        TC["task.controller"]
        TF["task-form.component"]
        TL["task-list.component"]
        TS["task.service"]
        TM["task.model"]
    end

    subgraph "módulo: relatorio"
        RC["report.controller"]
        RS["report.service"]
    end

    subgraph "shared"
        SS["storageService"]
        UT["utils/date"]
    end

    LS[("💾 LocalStorage")]

    MAIN --> TC
    MAIN --> RC
    TC --> TF
    TC --> TL
    TC --> TS
    TS --> TM
    TS --> SS
    RC --> RS
    RS -->|API pública| TS
    SS --> LS
    TS --> UT
    RS --> UT
```

> Observação de governança: `relatorio` depende de `tarefas` **apenas pela API pública**
> (`task.service`) e a dependência é **acíclica** — regra verificada pela fitness function
> FF-02 (ver [fitness-functions.md](fitness-functions.md)).
