# FISCRO — Sistema de Apoio à Criação e Planejamento Estratégico de Pequenos Negócios

> Aplicação web que ajuda o pequeno empreendedor a organizar a ideia de negócio e a fazer
> uma avaliação inicial de viabilidade: receita, custos, lucro, ponto de equilíbrio e alertas.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Arquitetura](https://img.shields.io/badge/arquitetura-mon%C3%B3lito%20modular-blue)

`CURSO: Sistemas de Informação` · `DISCIPLINA: Projeto - Aplicações Web` · `SEMESTRE: 1º`

---

## Sobre o projeto

Muitos empreendedores abrem um negócio sem um planejamento estruturado: as informações de
mercado, custos e receitas ficam espalhadas e é difícil saber se a ideia se sustenta. O
**FISCRO** (de *fisco* + *lucro*) conduz o usuário por etapas curtas — dados do negócio,
produtos e serviços, dados financeiros — e, ao final, apresenta indicadores de viabilidade
em linguagem simples, com alertas quando há risco.

Os resultados são **estimativas** baseadas nos dados informados. O FISCRO não substitui
aconselhamento contábil, fiscal ou jurídico. Detalhamento em [docs/context.md](docs/context.md).

## Funcionalidades

- 👤 Criação de conta e acesso (RF-01, RF-02)
- 📝 Cadastro do negócio, público-alvo, concorrentes e produtos ou serviços (RF-04 a RF-08)
- 💰 Registro de investimentos, custos fixos e variáveis e faturamento projetado (RF-09 a RF-12)
- 🔎 Revisão dos dados antes do cálculo (RF-13)
- 📊 Cálculo de receita, custo, lucro, ponto de equilíbrio e margem de segurança (RF-15 a RF-19)
- ⚠️ Alertas explicativos e resumo final (RF-22, RF-23)
- 💾 Planejamentos salvos para consulta e edição (RF-14, RF-24)
- 📱 Interface responsiva (RNF-01)

Lista completa de histórias e requisitos em [docs/especification.md](docs/especification.md).

## Tecnologias

- **HTML5** e **CSS3** (design responsivo, mobile-first)
- **JavaScript** (Vanilla, ES Modules — sem framework nem etapa de build)
- **LocalStorage** para persistência

## Arquitetura

A aplicação segue um **monólito modular particionado por domínio**, com decisões
documentadas em ADRs (*Architecture Decision Records*) no padrão de Richards & Ford, além de
características de arquitetura e *fitness functions* de governança.

📐 **[Documentação de Arquitetura](docs/architecture/README.md)** — ADRs, características e fitness functions.

```
src/js/
├── shared/      # transversal: storageService (persistência), httpClient, utils
└── modules/     # um módulo por domínio
    ├── tarefas/     # model · service · controller · components
    └── relatorio/   # service · controller
```

> Os módulos `tarefas/` e `relatorio/` são exemplos da estrutura de referência. Eles serão
> substituídos pelos módulos do FISCRO a partir da Etapa 3, quando começa a implementação das telas.

## Como executar

Como o projeto usa ES Modules, é necessário servi-lo via HTTP (não abrir com `file://`):

```bash
cd src && python3 -m http.server 8123
```

Depois, acesse **http://localhost:8123/**. A aplicação também pode ser publicada como site
estático (ex.: GitHub Pages). Instruções detalhadas em [src/README.md](src/README.md).

## Estrutura do repositório

```
.
├── docs/            # documentação do projeto e de arquitetura
├── help/            # material de apoio da disciplina
├── presentation/    # apresentação da solução
├── src/             # código-fonte da aplicação
└── README.md
```

## Equipe

**Integrantes**

- Aluno 1: Peralino Gomes de Moraes Junior 
- Aluno 2: Renan Maciel Medeiros de Queiroz
- Aluno 3: Winton Ferreira de Melo Lopes 
- Aluno 4: Lucas Tadeu dos Santos Ferreira 
- Aluno 5: Rafael Lana Mascarenhas Diegues

**Orientador(a)**

- Marco Rodrigo Costa

## Planejamento por etapa

| Etapa | Atividades |
| :---: | :--- |
| ETAPA 1 | [Documentação de Contexto](docs/context.md) · [Especificação do Projeto](docs/especification.md) |
| ETAPA 2 | [Projeto de Interface](docs/interface.md) · [Template Padrão](docs/template.md) |
| ETAPA 3 | [Programação de Funcionalidades — HTML e CSS](docs/development.md) |
| ETAPA 4 | [Programação de Funcionalidades — JavaScript](docs/development.md) · [Testes de Software](docs/tests.md) |
| ETAPA 5 | [Apresentação](presentation/README.md) |

## Links úteis

- 💻 [Código-fonte](src/README.md)
- 📐 [Arquitetura](docs/architecture/README.md)
- 🎤 [Apresentação da solução](presentation/README.md)
