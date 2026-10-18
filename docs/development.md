# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

> Esta seção será preenchida a partir da Etapa 3, à medida que as telas forem implementadas.
> Os requisitos do projeto estão em [especification.md](especification.md).

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | index.html |
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês | cadastro-noticia.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |



---

## Telas 2 e 3 — Acesso e Dados do negócio

**Responsável:** Lucas Tadeu dos Santos Ferreira
**Etapa:** 3 — Programação de Funcionalidades (HTML e CSS)
**Situação:** interface das duas telas concluída em HTML e CSS. A lógica (validação própria, autenticação e gravação dos dados) é da Etapa 4, em JavaScript.

### Requisitos atendidos

| ID | Descrição do Requisito | Responsável | Artefato Criado | Situação na Etapa 3 |
|----|------------------------|-------------|-----------------|---------------------|
| RF-01 | Criar conta informando nome, e-mail e senha | Lucas | `src/pages/acesso.html` (painel "Criar conta") | Formulário pronto, com validação nativa do navegador. Gravação na Etapa 4 |
| RF-02 | Acessar a conta com e-mail e senha | Lucas | `src/pages/acesso.html` (painel "Entrar") | Formulário pronto. Autenticação local na Etapa 4 |
| RF-03 | Iniciar um novo planejamento | Lucas | `src/pages/negocio.html` (etapa 1 de 3, link "Novo planejamento") | Tela pronta |
| RF-04 | Cadastrar nome, segmento e descrição do negócio | Lucas | `src/pages/negocio.html` | Campos prontos |
| RF-05 | Cadastrar o público-alvo | Lucas | `src/pages/negocio.html` | Campo pronto |
| RF-06 | Cadastrar concorrentes e diferenciais | Lucas | `src/pages/negocio.html` | Campo pronto (opcional) |
| RF-27 | Encerrar a sessão a partir de uma tela interna | Lucas | `src/pages/negocio.html` (menu da conta, item "Sair") | Menu pronto. O encerramento real fica para a Etapa 4 |

| ID | Requisito não funcional | Como foi atendido |
|----|-------------------------|-------------------|
| RNF-01 | Interface responsiva | CSS mobile-first, com ajustes a partir de 768 px e 1024 px. No celular os campos ficam em 1 coluna e os botões empilham |
| RNF-04 | Rótulo associado a cada campo | Todo `input` e `textarea` tem `<label for>` correspondente. Mensagens de erro nativas do navegador nesta etapa; mensagens próprias na Etapa 4 |
| RNF-06 | Fluxo executável pelo teclado | Link "Pular para o conteúdo", abas como links, menu da conta com `<details>`, contorno de foco visível |
| RNF-15 | Consistência visual entre as telas | As duas telas usam o padrão compartilhado `fiscro.css` (cores, tipografia, cabeçalho, rodapé, botões) |

### Artefatos criados

| Arquivo | Função |
|---------|--------|
| `src/pages/acesso.html` | Tela 2: abas Entrar / Criar conta e painel Recuperar senha |
| `src/assets/css/acesso.css` | Regras específicas da tela 2: cartão estreito, abas e troca de painel |
| `src/pages/negocio.html` | Tela 3: formulário da etapa 1 de 3 (informações gerais) |
| `src/assets/css/negocio.css` | Regras específicas da tela 3: grade de duas colunas e campo de texto longo |

As duas páginas carregam primeiro `src/assets/css/fiscro.css`, que traz a base compartilhada do projeto (variáveis de cor, tipografia, cabeçalho, rodapé, campos e botões), e depois o CSS da própria página.

### Tela 2 — Acesso (`acesso.html`)

Concentra o acesso ao sistema em um único cartão centralizado, com três painéis. Só um painel aparece por vez, escolhido pelo endereço da página (`#entrar`, `#criar-conta` ou `#recuperar-senha`) por meio da pseudoclasse CSS `:target`, sem JavaScript. Quando o endereço não aponta para nenhum painel, aparece "Entrar".

| Painel | Campo | Tipo | Obrigatório | Validação |
|--------|-------|------|:-----------:|-----------|
| Entrar | Email | `email` | Sim | Formato de e-mail |
| Entrar | Senha | `password` | Sim | — |
| Criar conta | Nome completo | `text` | Sim | — |
| Criar conta | Email | `email` | Sim | Formato de e-mail |
| Criar conta | Senha | `password` | Sim | Mínimo de 8 caracteres |
| Criar conta | Confirmar senha | `password` | Sim | Mínimo de 8 caracteres |
| Recuperar senha | Email cadastrado | `email` | Sim | Formato de e-mail |

Navegação:
- "Entrar" e "Criar conta" levam à tela 3 (`negocio.html`).
- "Esqueci minha senha" abre o painel de recuperação.
- No cabeçalho, "Ajuda" e "Contato" levam à Home; a marca FISCRO também leva à Home.

### Tela 3 — Dados do negócio (`negocio.html`)

Primeira das três etapas do planejamento ("Etapa 1 de 3 — informações gerais", 25 % na barra de progresso, com `role="progressbar"`).

| Campo | Tipo | Obrigatório | Requisito |
|-------|------|:-----------:|-----------|
| Nome do negócio | `text` | Sim | RF-04 |
| Segmento | `text` | Sim | RF-04 |
| Descrição da ideia | `textarea` | Sim | RF-04 |
| Público-alvo | `text` | Sim | RF-05 |
| Concorrentes e diferenciais | `text` | Não | RF-06 |

Navegação:
- "Continuar" leva à tela 4 (`produtos.html`).
- "Voltar" leva à Home.
- "Meus planejamentos" aponta para `planejamentos.html` (tela 8).
- O menu da conta traz "Sair", que leva de volta à tela 2.

### Descrição das estruturas

Estruturas de dados que as duas telas coletam. A gravação em LocalStorage é feita na Etapa 4, conforme o [ADR-0004](architecture/decisions/0004-persistencia-localstorage-com-abstracao.md).

#### Usuário

| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|----------|---------------|-------------|
| Nome | Texto | Nome completo do usuário | Maria da Silva |
| Email | Texto | E-mail usado para acessar a conta | maria@email.com |
| Senha | Texto | Senha de acesso, com no mínimo 8 caracteres | (não exibida) |

#### Negócio

| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|----------|---------------|-------------|
| Nome | Texto | Nome do negócio | Café Ponto Certo |
| Segmento | Texto | Área de atuação | Alimentação — cafeteria |
| Descrição | Texto | Resumo da ideia | Cafeteria de bairro com cafés especiais e lanches rápidos |
| Público-alvo | Texto | Quem o negócio pretende atender | Moradores e trabalhadores da região, de 20 a 45 anos |
| Concorrentes | Texto (opcional) | Concorrentes e diferenciais | 2 padarias próximas; diferencial: café especial |

### Como visualizar

1. Abra um terminal na pasta do projeto e rode:
   ```bash
   cd src && python -m http.server 8123
   ```
2. Acesse `http://localhost:8123/pages/acesso.html` (tela 2) e `http://localhost:8123/pages/negocio.html` (tela 3).

As duas páginas também abrem direto no navegador, dando duplo clique no arquivo HTML, porque esta etapa não usa JavaScript.

### Limitações conhecidas desta etapa

- Os formulários usam `method="get"` e `action` temporário, apenas para navegar entre as telas na demonstração. Nenhum dado é gravado. Na Etapa 4 o tratamento passa a ser feito em JavaScript, sem enviar senha pela URL.
- Recuperação de senha é simulada: o formulário apenas recarrega a tela, pois não há servidor.
- O link "Meus planejamentos" leva à tela 8 (`planejamentos.html`), que ainda não lista planejamentos reais.

---

## Telas 6 e 7 — Revisão e Resultado

**Etapa:** 3 — Programação de Funcionalidades (HTML e CSS)
**Situação:** interface das duas telas concluída em HTML e CSS. Os valores exibidos são de exemplo (negócio "Café Ponto Certo"): a leitura dos dados informados, o cálculo dos indicadores e o salvamento são da Etapa 4, em JavaScript.

### Requisitos atendidos

| ID | Descrição do Requisito | Artefato Criado | Como a tela atende |
|----|------------------------|-----------------|--------------------|
| RF-20 | Identificar e apontar os campos obrigatórios que não foram preenchidos | `src/pages/revisao.html` | A linha "Faturamento projetado" aparece com a mensagem "Este campo é obrigatório e deve ser maior que zero." e ícone de alerta |
| RF-23 | Exibir um resumo final com os dados do negócio, os indicadores calculados e os alertas | `src/pages/resultado.html` | Seis cartões de indicador, explicação de termo e alerta de risco em uma única tela |
| RF-15 | Calcular a receita estimada | `src/pages/resultado.html` | Cartão "Receita estimada" (R$ 30.000, por mês) |
| RF-16 | Calcular o custo estimado | `src/pages/resultado.html` | Cartão "Custo estimado" (R$ 28.500, por mês) |
| RF-17 | Calcular o lucro estimado | `src/pages/resultado.html` | Cartão "Lucro estimado" (R$ 1.500, por mês), com faixa dourada |
| RF-18 | Calcular o ponto de equilíbrio | `src/pages/resultado.html` | Cartão "Ponto de equilíbrio" (R$ 27.692, faturamento mínimo/mês) |
| RF-19 | Calcular a margem de segurança | `src/pages/resultado.html` | Cartão "Margem de segurança" (7,7%) |
| RF-22 | Exibir alertas explicativos quando os indicadores apontarem risco | `src/pages/resultado.html` | Alerta "Atenção: margem de segurança baixa. Uma queda de 10% no faturamento pode levar ao prejuízo." |
| RF-25 | Explicar em linguagem simples os termos e indicadores | `src/pages/resultado.html` | Bloco recolhível "O que é margem de segurança?", que explica o termo. Os ícones de ajuda nos cartões de ponto de equilíbrio e margem são apenas decorativos nesta etapa |
| RF-27 | Permitir que o usuário encerre sua sessão a partir de qualquer tela interna | `revisao.html` e `resultado.html` (menu da conta, item "Sair") | Menu pronto. O encerramento real fica para a Etapa 4 |
| RF-28 | Informar que os valores são estimativas | `src/pages/resultado.html` | Aviso "Estimativas — não substituem análise contábil." |

| ID | Requisito não funcional | Como foi atendido |
|----|-------------------------|-------------------|
| RNF-01 | Interface responsiva | A grade de indicadores tem 1 coluna até 767 px, 2 colunas de 768 px a 1023 px e 3 colunas a partir de 1024 px |
| RNF-05 | Informações de risco com texto, além da cor | A margem baixa usa ícone de alerta, o texto "abaixo do recomendado" e a cor vermelha. O alerta traz ícone, texto e cor |
| RNF-06 | Fluxo executável pelo teclado | Link "Pular para o conteúdo", ações feitas com links nativos, acessíveis por Tab, explicação em `<details>` e contorno de foco visível |
| RNF-11 | Resultados deixam clara a natureza de estimativa | Título dos cartões com "estimada/estimado" e aviso de estimativa no fim da tela |
| RNF-15 | Consistência visual entre as telas | Cabeçalho, rodapé, cartões e botões iguais aos das demais telas internas, via `fiscro.css` |

### Artefatos criados

| Arquivo | Função |
|---------|--------|
| `src/pages/revisao.html` | Tela 6: lista dos dados informados, com o campo obrigatório ausente sinalizado |
| `src/pages/resultado.html` | Tela 7: resumo do planejamento com os indicadores calculados |
| `src/assets/css/fiscro.css` | Acréscimo do bloco "Tela 7 (Resultado, Renan)" na seção 5, com a grade de indicadores, o bloco recolhível e o alerta |

### Tela 6 — Revisão (`revisao.html`)

Lista em `<dl>` com rótulo à esquerda e valor à direita. Só a linha "Faturamento projetado" está em erro.

| Dado exibido | Tipo | Unidade | Exemplo |
|--------------|------|---------|---------|
| Nome do negócio | Texto | — | Café Ponto Certo |
| Segmento | Texto | — | Alimentação — cafeteria |
| Produtos e serviços | Número inteiro | itens | 3 itens |
| Investimento inicial | Número decimal | R$ | R$ 80.000,00 |
| Custos fixos | Número decimal | R$ por mês | R$ 18.000,00/mês |
| Custos variáveis | Número decimal | % do faturamento | 35% |
| Faturamento projetado | Número decimal (obrigatório) | R$ por mês | (vazio, com mensagem de erro) |

Navegação:
- "Editar dados" leva à tela 3 (`negocio.html`).
- "Calcular viabilidade" leva à tela 7 (`resultado.html`).

### Tela 7 — Resultado (`resultado.html`)

| Dado exibido | Tipo | Unidade | Exemplo |
|--------------|------|---------|---------|
| Receita estimada | Número decimal | R$ por mês | R$ 30.000 |
| Custo estimado | Número decimal | R$ por mês | R$ 28.500 |
| Lucro estimado | Número decimal | R$ por mês | R$ 1.500 |
| Ponto de equilíbrio | Número decimal | R$ de faturamento mínimo por mês | R$ 27.692 |
| Margem de segurança | Número decimal | % | 7,7% (abaixo do recomendado) |
| Retorno do investimento | Número inteiro | meses | ≈ 54 meses (4 anos e 6 meses) |

Navegação:
- "Editar dados" leva à tela 3 (`negocio.html`).
- "Salvar planejamento" leva à tela 8 (`planejamentos.html`). O salvamento real é da Etapa 4.

### Como verificar

1. Abra um terminal na pasta do projeto e rode:
   ```bash
   cd src && python -m http.server 8123
   ```
2. Percorra o fluxo a partir de `http://localhost:8123/pages/negocio.html`: negócio → produtos → financeiro → revisão → resultado.
3. Na revisão, confira os sete dados e a mensagem de erro em "Faturamento projetado". Clique em "Calcular viabilidade".
4. No resultado, confira os seis cartões, o alerta de margem baixa, o aviso de estimativa e os botões "Editar dados" e "Salvar planejamento".
5. Reduza a largura da janela: a grade de indicadores passa de 3 para 2 e depois para 1 coluna.
6. Use só o teclado (Tab): o foco aparece em cada link e botão, e o bloco "O que é margem de segurança?" abre e fecha com Enter.

Os formulários das telas anteriores enviam os dados por `method="get"` apenas para navegar entre as telas. A revisão e o resultado ainda não leem esses dados.

Link publicado: (preencher)
