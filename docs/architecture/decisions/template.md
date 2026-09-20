# ADR-NNNN: Título curto e descritivo da decisão

> Modelo de ADR (Architecture Decision Record) seguindo o formato proposto por
> Mark Richards & Neal Ford em *Fundamentals of Software Architecture* (cap. 19),
> baseado no formato de Michael Nygard e acrescido da seção **Governança**.
> Copie este arquivo para `NNNN-titulo-em-kebab-case.md`, incremente o número e preencha.

## Status

<!-- Um de: Proposto | Aceito | Rejeitado | Substituído por ADR-XXXX | RFC até DD/MM/AAAA -->
Proposto

## Contexto

Descreva as forças em jogo: requisitos (funcionais e não funcionais), restrições,
o estado atual e o problema que exige uma decisão. Escreva de forma neutra, sem já
apontar a solução. Cite os requisitos afetados (ex.: RF-001, RNF-002) quando houver.

## Decisão

Escreva na voz ativa e assertiva: **"Nós vamos..."**. Declare claramente o que foi
decidido e a justificativa principal. Uma decisão por ADR.

## Consequências

O que fica melhor E o que fica pior por causa desta decisão (trade-offs). Inclua
impactos positivos, negativos e neutros. Toda decisão de arquitetura tem um custo —
declare-o honestamente.

## Governança

Como esta decisão será **verificada e mantida** ao longo do tempo. Sempre que possível,
descreva uma *fitness function* (verificação automatizada ou manual) que comprove que a
decisão continua sendo respeitada. Ex.: "revisão de PR bloqueia import direto de
`localStorage` fora de `storageService.js`".

## Notas

- **Autor(es):**
- **Data de aprovação:**
- **Aprovado por:**
- **Última modificação:**
