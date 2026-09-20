# ADR-0003: Monólito modular particionado por domínio

## Status

Aceito

## Contexto

Definida a base estática em Vanilla JS + ES Modules (ADR-0002), é preciso decidir **como
organizar o código-fonte**. Richards & Ford contrastam dois eixos de particionamento de um
monólito: *technical partitioning* (organizar por camadas técnicas — services, controllers,
components) e *domain partitioning* (organizar por domínio/feature).

No contexto de uma equipe de até 5 integrantes trabalhando em paralelo, o particionamento por
camadas faz com que **cada nova funcionalidade toque todas as pastas** (antipadrão de
*shotgun surgery*), aumentando conflitos de merge e reduzindo a coesão de domínio. A
arquitetura em camadas também tende ao *architecture sinkhole antipattern* (camadas que só
repassam chamadas).

## Decisão

**Nós vamos** organizar o código como um **monólito modular particionado por domínio**, com
**camadas leves dentro de cada módulo** (híbrido):

```
src/js/
├── modules/                 # particionamento por DOMÍNIO
│   ├── tarefas/             # cada módulo: model + service + controller + components
│   │   ├── task.model.js
│   │   ├── task.service.js
│   │   ├── task.controller.js
│   │   ├── task-form.component.js
│   │   └── task-list.component.js
│   └── relatorio/
│       ├── report.service.js
│       └── report.controller.js
├── shared/                  # transversal e reutilizável entre módulos
│   ├── storageService.js    # ÚNICA porta para persistência (ver ADR-0004)
│   ├── httpClient.js
│   └── utils/date.js
└── main.js                  # roteia por data-page e inicializa o controller do módulo
```

Regras de dependência:

- Um módulo **não importa** arquivos internos de outro módulo. Comunicação entre módulos,
  quando necessária, passa pelo service exportado do domínio ou por `shared/`.
- Tudo em `shared/` pode ser importado por qualquer módulo; `shared/` **não** importa de `modules/`.
- Dentro do módulo, a apresentação (components) não acessa persistência direta — passa pelo
  `*.service.js` do domínio.

## Consequências

- (+) Cada integrante pode ser **dono de um módulo** inteiro, minimizando conflitos de merge.
- (+) Alta coesão: tudo de um domínio fica junto, mais fácil de localizar e evoluir.
- (+) Escala bem para novos domínios (basta uma nova pasta em `modules/`).
- (−) Alguma duplicação de estrutura entre módulos pequenos.
- (−) Exige disciplina para não criar dependências diretas entre módulos.

## Governança

- *Fitness function (FF-02):* nenhum módulo importa arquivos internos de outro módulo.
- *Fitness function (FF-07):* `shared/` não importa de `modules/`.
- Verificáveis por revisão de PR e grep (ver `fitness-functions.md`).

## Notas

- **Autor(es):** Equipe
- **Data de aprovação:** 20/09/2026
- **Aprovado por:** Equipe
- **Última modificação:** 20/09/2026
