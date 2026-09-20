# ADR-0002: Front-end estático com Vanilla JS e ES Modules

## Status

Aceito

## Contexto

A disciplina exige uma aplicação web **estática** (HTML/CSS/JS), servível em GitHub Pages ou
em qualquer servidor de arquivos, sem back-end próprio. O escopo inclui CRUD de tarefas
(RF-001), relatório mensal (RF-002), responsividade (RNF-001) e tempo de resposta ≤ 3s
(RNF-002). O desenvolvimento é feito por até 5 integrantes em paralelo, ao longo de várias etapas.

É preciso decidir a base tecnológica de construção do front-end (linguagem, forma de
modularização e necessidade — ou não — de ferramentas de build).

## Decisão

**Nós vamos** construir o front-end como um site **estático** em **Vanilla JS**, usando
**ES Modules** nativos (`<script type="module">`), **sem framework e sem bundler**. O CSS
será organizado em camadas: `base.css` (reset + variáveis em `:root`), `layout.css`
(responsividade) e `components.css` (estilos de UI reutilizáveis).

Convenções:

- Cada página declara um atributo `data-page` no `<body>`; o `main.js` usa esse valor para
  inicializar o código correspondente.
- Nomenclatura: `PascalCase` para entidades/models, `camelCase` para services e utilitários.

## Consequências

- (+) Roda direto no navegador e no GitHub Pages, sem etapa de build (Deployability).
- (+) Baixa curva de aprendizado; adequado ao escopo e à avaliação da disciplina.
- (+) Sem dependências de terceiros para manter/atualizar.
- (−) Sem framework, tarefas como roteamento e reatividade são feitas manualmente.
- (−) ES Modules exigem servir via HTTP (não abrir com `file://`); requer um servidor
  estático simples em dev (ex.: `python -m http.server`).

## Governança

- *Fitness function (FF-05):* o conteúdo de `src/` deve funcionar servido como arquivos
  estáticos, sem passo de compilação/bundling.
- Adoção de framework ou bundler no futuro exige um novo ADR.

## Notas

- **Autor(es):** Equipe
- **Data de aprovação:** 20/09/2026
- **Aprovado por:** Equipe
- **Última modificação:** 20/09/2026
