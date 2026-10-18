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

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | João | index.html |
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês | Ana Paula | cadastro-noticia.html |

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
- "Meus planejamentos" aponta para `planejamentos.html` (tela 8), que ainda não está no repositório.
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
- O link "Meus planejamentos" depende da tela 8, que ainda não existe no repositório.
