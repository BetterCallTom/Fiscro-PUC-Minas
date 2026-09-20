# Características de Arquitetura ("-ilities")

> Seguindo Richards & Ford (*Fundamentals of Software Architecture*), este documento
> identifica e **prioriza** as características de arquitetura (os requisitos não funcionais,
> ou "-ilities") que o sistema deve exibir. O livro recomenda escolher **poucas** (idealmente
> até 7) e definir explicitamente as prioridades — tentar otimizar todas leva a uma
> arquitetura ruim. As características derivam dos requisitos do domínio e do contexto.

## Características priorizadas (driving characteristics)

| Característica     | Origem / Requisito | Por que importa neste projeto | Como medimos (fitness function) |
|--------------------|--------------------|-------------------------------|---------------------------------|
| **Manutenibilidade** | Equipe de 5, várias etapas | Código precisa evoluir em paralelo sem quebrar | Separação em camadas respeitada (ver fitness-functions.md) |
| **Responsividade (UX)** | RNF-001 | Uso em diferentes dispositivos | Layout válido em larguras mobile/tablet/desktop |
| **Desempenho** | RNF-002 (≤ 3s) | Experiência fluida | Operações concluem em < 3s |
| **Portabilidade / Deployability** | Site estático | Servir em GitHub Pages sem back-end | Deploy sem etapa de build; roda como arquivos estáticos |
| **Testabilidade** | ETAPA 4 (testes) | Camadas isoladas permitem testar lógica | Lógica de domínio isolável de DOM e storage |

## Características explicitamente NÃO priorizadas

Declarar o que **não** é prioridade é tão importante quanto o que é (Richards/Ford):

- **Escalabilidade / Elasticidade** — não há back-end nem carga concorrente; irrelevante no escopo.
- **Segurança avançada / Autenticação forte** — dados locais no navegador; fora do escopo inicial.
- **Alta disponibilidade** — aplicação estática; disponibilidade herdada do host (GitHub Pages).
- **Interoperabilidade** — sem integrações obrigatórias na etapa inicial (APIs externas são opcionais).

## Relação com os ADRs

- A escolha de **site estático + Vanilla JS + ES Modules sem build** (ADR-0002) serve Portabilidade/Deployability.
- A escolha de **monólito modular por domínio** (ADR-0003) serve Manutenibilidade e Testabilidade.
- A escolha de **LocalStorage abstraído** (ADR-0004) serve Desempenho (RNF-002) e mantém a
  Manutenibilidade (troca de mecanismo sem reescrita).
