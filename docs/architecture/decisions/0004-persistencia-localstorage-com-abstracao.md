# ADR-0004: Persistência via LocalStorage com camada de abstração

## Status

Aceito

## Contexto

A aplicação precisa persistir tarefas entre sessões (RF-001) e gerar relatório mensal
(RF-002), com resposta ≤ 3s (RNF-002). O material da disciplina oferece dois caminhos sem
banco de dados dedicado: **LocalStorage** (mais simples, sem instalar nada) e **json-server**
(API REST simulada em Node, mais próxima de um back real, mas exige rodar o servidor).

A equipe optou por começar simples, preservando a possibilidade de migrar para json-server ou
uma API externa em etapas futuras sem reescrever a aplicação.

## Decisão

**Nós vamos** usar **LocalStorage** como mecanismo de persistência inicial, **isolado atrás
de uma única camada de abstração** (`src/js/shared/storageService.js`) com interface
**assíncrona** (`async getAll()`, `save()`, `remove()`), mesmo que a implementação atual seja
síncrona.

Convenções:

- Chave única e versionada: `fiscro:tasks:v1`.
- `id` gerado com `crypto.randomUUID()`.
- Datas armazenadas em ISO 8601 (`new Date().toISOString()`), facilitando o filtro mensal do RF-002.
- Nenhum arquivo além de `shared/storageService.js` acessa `localStorage` diretamente.

## Consequências

- (+) Zero configuração; funciona 100% no navegador e no GitHub Pages.
- (+) Interface assíncrona permite trocar LocalStorage por `fetch`/json-server alterando
  **apenas** `storageService.js`, sem tocar em controllers, components ou services de domínio.
- (+) RNF-002 (≤ 3s) praticamente garantido com armazenamento local.
- (−) Dados ficam no navegador do usuário: sem compartilhamento entre dispositivos nem backup.
- (−) Limite de ~5MB e apenas strings (exige serializar JSON).

## Governança

- *Fitness function (FF-01):* busca por `localStorage.` não deve retornar ocorrências fora de
  `src/js/shared/storageService.js`.
- Migração futura para json-server/API externa será registrada em um novo ADR, mantendo a
  interface do `storageService`.

## Notas

- **Autor(es):** Equipe
- **Data de aprovação:** 20/09/2026
- **Aprovado por:** Equipe
- **Última modificação:** 20/09/2026
