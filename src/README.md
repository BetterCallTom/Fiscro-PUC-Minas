# Instruções de utilização

## Sobre

Aplicação web **estática** (HTML/CSS/JS) organizada como **monólito modular particionado por
domínio**. Decisões e justificativas em [docs/architecture](../docs/architecture/README.md)
(ADRs, características de arquitetura e fitness functions).

## Estrutura

```
src/
├── index.html                 # home
├── pages/                     # 1 HTML por tela
│   ├── tarefas.html
│   └── relatorio.html
├── assets/css/                # base.css · layout.css (responsivo) · components.css
└── js/
    ├── main.js                # roteia por [data-page] e inicializa o módulo
    ├── shared/                # transversal: storageService, httpClient, utils
    └── modules/               # 1 pasta por domínio
        ├── tarefas/           # model · service · controller · components
        └── relatorio/         # service · controller
```

Regras de dependência (governança): `controller → service → shared/storageService`. Módulos
não importam internals de outros módulos (só a API pública `*.service.js`). `shared/` não
depende de `modules/`. Verificação em
[docs/architecture/fitness-functions.md](../docs/architecture/fitness-functions.md).

## Execução

Por usar ES Modules, é preciso servir via HTTP (não abrir com `file://`):

```bash
cd src && python3 -m http.server 8123
```

Acesse `http://localhost:8123/`. Também pode ser publicado como site estático no GitHub Pages.

## Histórico de versões

### [0.1.0] - 20/09/2026
#### Adicionado
- Estrutura de monólito modular (módulos `tarefas` e `relatorio`, camada `shared`).
- CRUD de tarefas com persistência em LocalStorage (RF-001).
- Relatório mensal de tarefas concluídas (RF-002).
- CSS responsivo em camadas (RNF-001); wrapper HTTP com timeout de 3s (RNF-002).
