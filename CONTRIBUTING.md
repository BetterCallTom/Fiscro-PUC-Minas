# Guia de Contribuição

Bem-vindo(a)! Este guia resume como a equipe trabalha no FISCRO.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20+ (apenas para testes/lint — a aplicação em si é estática)
- Python 3 (para o servidor local de desenvolvimento) ou qualquer servidor de arquivos

## Primeiros passos

```bash
npm install       # instala ferramentas de teste/lint
npm run dev       # sobe a aplicação em http://localhost:8123
```

## Fluxo de trabalho

1. Crie uma branch a partir da `main`: `git checkout -b feat/minha-tarefa`
2. Faça a alteração no **módulo** correspondente (`src/js/modules/<dominio>/`).
3. Rode as verificações locais antes de abrir o PR:
   ```bash
   npm run arch:check   # regras de arquitetura (fitness functions)
   npm run lint
   npm run format
   npm test
   ```
4. Abra um Pull Request. O template guia o checklist; o CI roda as mesmas verificações.
5. O(s) dono(s) do módulo (ver `.github/CODEOWNERS`) revisam.

## Regras de arquitetura (resumo)

Ver [docs/architecture](docs/architecture/README.md). Em uma frase:

- Cada domínio vive em `src/js/modules/<dominio>/`.
- Um módulo **não** importa arquivos internos de outro — só a API pública (`*.service.js`).
- Persistência **somente** via `src/js/shared/storageService.js`.
- Decisão de arquitetura significativa ⇒ um **ADR** novo.

## Convenções de commit

Mensagens curtas no imperativo, prefixadas pelo tipo: `feat:`, `fix:`, `docs:`, `test:`,
`refactor:`, `chore:`. Ex.: `feat: adiciona filtro por status na lista de tarefas`.
