# Especificações do Projeto

Esta seção define o problema e a ideia de solução do FISCRO a partir da perspectiva de quem vai usar o sistema. Ela parte dos **perfis de usuário**, que deram origem às **histórias de usuário** no formato *Como… / Quero… / Para…*. Das histórias foram derivados os **requisitos funcionais e não funcionais**, cada um com a história de origem indicada, e as **regras de negócio** que orientam os cálculos. Ao final estão as **restrições** do projeto.

O backlog com as histórias e requisitos é acompanhado no quadro Kanban da equipe no Trello, e a documentação e o código ficam versionados neste repositório do GitHub.

## Perfis de Usuários

A plataforma terá como principal usuário o empreendedor, que utilizará o sistema para cadastrar sua ideia de negócio, organizar informações e avaliar os principais aspectos necessários para sua abertura.

| Perfil | Descrição | Necessidades |
| --- | --- | --- |
| Empreendedor iniciante ou nanoempreendedor | Pessoa que possui uma ideia de negócio e precisa de orientação para organizar e avaliar sua proposta. | Orientação para estruturar e avaliar sua ideia, com linguagem simples e visão geral. |
| Pequeno empresário | Pessoa que já possui um negócio ou pretende abrir uma nova empresa e deseja melhorar seu planejamento. | Apoio para planejar e melhorar seu negócio, com indicadores e visão consolidada. |
| MEI | Profissional que pretende formalizar ou estruturar melhor sua atividade e precisa de uma ferramenta simples para auxiliar no planejamento. | Organização de receitas, custos e serviços para formalizar e crescer. |
| Consultor freelancer ou profissional de apoio | Pessoa física que poderá utilizar a plataforma para auxiliar empreendedores na organização e avaliação de seus planos de negócios. | Ferramenta para orientar e acompanhar empreendedores, distinguindo estimativa de aconselhamento. |

> Por orientação do professor, este projeto **não utiliza personas**. As histórias de usuário abaixo são escritas a partir dos perfis, sem nomes fictícios.

## Histórias de Usuários

Com base nos perfis de usuário, foram identificadas as seguintes histórias, agrupadas por contexto.

### Acesso e início do planejamento

| ID | EU COMO... | QUERO/PRECISO... | PARA... |
| --- | --- | --- | --- |
| US-01 | empreendedor iniciante | criar minha conta e iniciar um planejamento | organizar o projeto do meu negócio |

### Dados do negócio

| ID | EU COMO... | QUERO/PRECISO... | PARA... |
| --- | --- | --- | --- |
| US-02 | empreendedor | cadastrar o nome, o segmento e a descrição do meu negócio | registrar a identidade do negócio |
| US-03 | empreendedor | definir o público-alvo do meu negócio | entender para quem vou vender |
| US-04 | empreendedor | registrar meus concorrentes e meus diferenciais | comparar a minha proposta com o mercado |
| US-05 | empreendedor | cadastrar meus produtos ou serviços, com preço e volume estimado | estimar as minhas receitas |

### Dados financeiros

| ID | EU COMO... | QUERO/PRECISO... | PARA... |
| --- | --- | --- | --- |
| US-06 | empreendedor | registrar os investimentos iniciais | saber quanto capital vou precisar aplicar |
| US-07 | empreendedor | registrar meus custos fixos e variáveis | entender o peso dos custos no negócio |
| US-08 | empreendedor | registrar as receitas projetadas | estimar o faturamento |
| US-09 | pequeno empresário | editar os dados que já salvei | corrigir informações sem recomeçar o planejamento |

### Análise e resultado

| ID | EU COMO... | QUERO/PRECISO... | PARA... |
| --- | --- | --- | --- |
| US-10 | empreendedor | receber indicadores calculados a partir dos meus dados | compreender a situação estimada do negócio |
| US-11 | empreendedor | receber alertas explicativos | saber o que merece atenção no meu planejamento |
| US-12 | empreendedor | visualizar um resumo final | tomar decisões com uma visão consolidada |
| US-15 | qualquer usuário | entender o que cada indicador significa | não interpretar estimativas como garantias |

### Uso e consulta

| ID | EU COMO... | QUERO/PRECISO... | PARA... |
| --- | --- | --- | --- |
| US-13 | MEI | usar a plataforma no celular | planejar sem depender de um computador |
| US-14 | consultor | consultar de forma organizada as informações de um negócio | apoiar o atendimento ao empreendedor |

### Critérios de aceitação

| História | Critérios de aceitação principais |
| --- | --- |
| US-01 | A conta pode ser criada, o acesso funciona e a sessão pode ser encerrada. Erros são informados sem apagar os dados válidos já digitados. |
| US-02 | Nome, segmento e descrição podem ser informados, e os campos obrigatórios são validados. |
| US-03 | O público-alvo pode ser registrado, revisado e alterado antes da análise. |
| US-04 | Concorrentes e diferenciais podem ser registrados e editados. |
| US-05 | Cada produto ou serviço aceita preço e volume, e entradas inválidas geram mensagem específica. |
| US-06 | Os investimentos iniciais podem ser registrados e revisados. |
| US-07 | Custos fixos e variáveis podem ser registrados separadamente. |
| US-08 | As receitas projetadas podem ser informadas e revisadas. |
| US-09 | Dados salvos podem ser editados sem reiniciar todo o planejamento. |
| US-10 | Os indicadores aparecem somente quando há dados suficientes e vêm acompanhados de explicação em linguagem simples. |
| US-11 | Os alertas identificam situações que merecem atenção e trazem explicação em texto. |
| US-12 | O resumo final consolida os dados e os indicadores disponíveis. |
| US-13 | Qualquer tarefa pode ser concluída em tela pequena sem perda de informação essencial. |
| US-14 | As informações do planejamento podem ser consultadas de forma estruturada. |
| US-15 | A interface informa que os resultados são estimativas e explica os principais indicadores. |

## Requisitos

As tabelas a seguir apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. A coluna **Origem** indica a história de usuário da qual cada requisito foi derivado.

### Requisitos Funcionais

| ID | Descrição do Requisito | Origem | Prioridade |
| --- | --- | --- | --- |
| RF-01 | O sistema deve permitir que o usuário crie uma conta informando nome, e-mail e senha. | US-01 | ALTA |
| RF-02 | O sistema deve permitir que o usuário acesse sua conta informando e-mail e senha, recusando o acesso quando os dados não conferirem. A identificação é feita localmente, no navegador, sem servidor. | US-01 | ALTA |
| RF-03 | O sistema deve permitir que o usuário autenticado inicie um novo planejamento de negócio. | US-01, US-02 | ALTA |
| RF-04 | O sistema deve permitir que o usuário cadastre o nome, o segmento e a descrição do negócio. | US-02 | ALTA |
| RF-05 | O sistema deve permitir que o usuário cadastre o público-alvo do negócio. | US-03 | ALTA |
| RF-06 | O sistema deve permitir que o usuário cadastre concorrentes e os diferenciais do seu negócio em relação a eles. | US-04 | MÉDIA |
| RF-07 | O sistema deve permitir que o usuário cadastre quantos produtos ou serviços forem necessários. | US-05 | ALTA |
| RF-08 | O sistema deve permitir que o usuário registre o preço e o volume estimado de venda de cada produto ou serviço. | US-05, US-08 | ALTA |
| RF-09 | O sistema deve permitir que o usuário registre os investimentos iniciais do negócio. | US-06 | ALTA |
| RF-10 | O sistema deve permitir que o usuário registre os custos fixos mensais do negócio. | US-07 | ALTA |
| RF-11 | O sistema deve permitir que o usuário registre os custos variáveis do negócio, separados dos custos fixos. | US-07 | ALTA |
| RF-12 | O sistema deve permitir que o usuário registre o faturamento projetado do negócio. | US-08 | ALTA |
| RF-13 | O sistema deve exibir todos os dados preenchidos em uma tela de revisão antes da análise, permitindo voltar a qualquer etapa para corrigir. | US-09, US-12 | ALTA |
| RF-14 | O sistema deve permitir que o usuário edite ou exclua um planejamento salvo, sem precisar preencher novamente os dados que não mudaram. | US-09 | ALTA |
| RF-15 | O sistema deve calcular a receita estimada a partir do preço e do volume de cada produto ou serviço. | US-10 | ALTA |
| RF-16 | O sistema deve calcular o custo estimado a partir dos custos fixos e variáveis registrados. | US-07, US-10 | ALTA |
| RF-17 | O sistema deve calcular o lucro estimado como a diferença entre a receita e o custo estimados. | US-10 | ALTA |
| RF-18 | O sistema deve calcular o ponto de equilíbrio sempre que houver dados suficientes para isso. | US-10 | ALTA |
| RF-19 | O sistema deve calcular a margem de segurança sempre que houver dados suficientes para isso. | US-10 | MÉDIA |
| RF-20 | O sistema deve identificar e apontar os campos obrigatórios que não foram preenchidos. | US-02, US-05, US-11 | ALTA |
| RF-21 | O sistema deve exibir uma mensagem de erro específica, junto ao campo, para cada entrada inválida. | US-05, US-11 | ALTA |
| RF-22 | O sistema deve exibir alertas explicativos quando os indicadores apontarem risco, como margem baixa ou prejuízo. | US-11 | ALTA |
| RF-23 | O sistema deve exibir um resumo final com os dados do negócio, os indicadores calculados e os alertas. | US-12 | ALTA |
| RF-24 | O sistema deve listar os planejamentos salvos pelo usuário e permitir abrir cada um deles. | US-09, US-14 | ALTA |
| RF-25 | O sistema deve explicar, em linguagem simples, o significado dos termos e dos indicadores apresentados. | US-14, US-15 | MÉDIA |
| RF-26 | O sistema deve apresentar fontes de apoio, como SEBRAE e legislação, para aprofundamento. | US-14, US-15 | MÉDIA |
| RF-27 | O sistema deve permitir que o usuário encerre sua sessão a partir de qualquer tela interna. | US-01 | MÉDIA |
| RF-28 | O sistema deve informar, na tela de resultado e no resumo, que os valores apresentados são estimativas. | US-15 | ALTA |

### Requisitos não Funcionais

| ID | Descrição do Requisito | Origem | Verificação | Prioridade |
| --- | --- | --- | --- | --- |
| RNF-01 | A aplicação deve ser responsiva, permitindo realizar qualquer tarefa em smartphones, tablets e computadores. | US-13 | Teste em ao menos uma largura de tela de cada categoria. | ALTA |
| RNF-02 | Textos, mensagens e explicações devem usar linguagem clara, simples e consistente em todas as telas. | US-11, US-15 | Checklist de revisão de conteúdo. | ALTA |
| RNF-03 | Os estados de interação (erro, sucesso, campo ativo) devem ser compreensíveis sem depender apenas de cor. | US-11 | Teste visual e revisão de acessibilidade. | MÉDIA |
| RNF-04 | Todos os campos devem ter rótulo (label) e mensagem de erro associados ao próprio campo. | US-02 a US-08 | Inspeção das telas e teste por teclado. | ALTA |
| RNF-05 | Informações de risco devem ser apresentadas com texto, além da cor. | US-11, US-12 | Inspeção das telas de alerta e de resumo. | ALTA |
| RNF-06 | O fluxo principal deve poder ser executado inteiramente pelo teclado. | US-01 a US-12 | Teste manual do fluxo principal. | MÉDIA |
| RNF-07 | O contraste entre texto e fundo deve seguir o critério adotado pela equipe com base na WCAG 2.2. | US-13, US-15 | Verificação com ferramenta de contraste. | MÉDIA |
| RNF-08 | Recursos não essenciais não devem prejudicar o carregamento nem a compreensão das telas. | US-13 | Revisão dos recursos carregados por página. | BAIXA |
| RNF-09 | A aplicação deve funcionar nos navegadores definidos pela equipe. | US-13, US-14 | Roteiro executado nos navegadores registrados. | MÉDIA |
| RNF-10 | Os dados pessoais devem ser reduzidos ao mínimo necessário e tratados conforme a LGPD, sem envio a servidores. | US-01 | Checklist de dados armazenados. | ALTA |
| RNF-11 | Os resultados devem deixar clara a sua natureza de estimativa. | US-15 | Inspeção da tela de resultado e do resumo. | ALTA |
| RNF-15 | Componentes e etapas devem manter consistência visual entre todas as telas. | US-13, US-14 | Checklist de interface. | MÉDIA |

> Os itens RNF-12 (estrutura que permita evolução), RNF-13 (controle de versão) e RNF-14 (registro de decisões) da Etapa 1 não derivam de histórias de usuário. São condições de processo e foram movidos para as **Restrições** (R-08 a R-10). A numeração dos demais foi mantida para não quebrar as referências já feitas no template e no projeto de interface.

### Regras de Negócio

| ID | Regra |
| --- | --- |
| RN-01 | A receita estimada só deve ser calculada quando houver produto ou serviço com preço e volume informados, ou um faturamento projetado. |
| RN-02 | O custo estimado deve considerar os custos registrados conforme sua natureza, sem misturar fixos e variáveis. |
| RN-03 | O lucro estimado só deve ser apresentado quando houver dados suficientes de receita e de custo. |
| RN-04 | O ponto de equilíbrio só deve ser calculado quando houver custos fixos, preço e custo variável válidos. |
| RN-05 | A margem de segurança só deve ser apresentada quando os dados necessários ao cálculo estiverem disponíveis. |
| RN-06 | Campos obrigatórios ausentes ou entradas inválidas devem impedir os cálculos que dependem deles, explicando o motivo. |
| RN-07 | Os alertas devem explicar a situação em linguagem simples e não depender apenas de cor. |
| RN-08 | Nenhum indicador deve ser apresentado como garantia de viabilidade, lucro ou sucesso. |
| RN-09 | O usuário deve poder revisar e corrigir os dados antes de finalizar a análise. |
| RN-10 | Fontes e orientações devem ser apresentadas como apoio educacional, sem substituir aconselhamento contábil, fiscal ou jurídico. |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID | Restrição |
| --- | --- |
| R-01 | O projeto deverá ser entregue até o final do semestre, em cinco etapas, conforme o cronograma da disciplina. |
| R-02 | Não pode ser desenvolvido um módulo de back-end: a aplicação é somente front-end. |
| R-03 | A aplicação deve ser escrita em HTML, CSS e JavaScript, sem uso de framework JavaScript. Bibliotecas de CSS só podem ser usadas quando liberadas pelo professor. |
| R-04 | Os dados devem ser armazenados no próprio navegador, por meio do LocalStorage. |
| R-05 | A aplicação deve ser publicada como site estático, no GitHub Pages ou serviço similar. |
| R-06 | Cada integrante do grupo deve implementar pelo menos duas funções JavaScript. |
| R-07 | O sistema não fornece aconselhamento contábil, fiscal ou jurídico nem determina a tributação do negócio; informações tributárias são apenas referências educacionais. |
| R-08 | A estrutura da aplicação deve permitir sua evolução nas etapas seguintes sem reescrever todo o fluxo (antigo RNF-12). |
| R-09 | O controle de versão deve ser feito neste repositório do GitHub a partir da Etapa 2 (antigo RNF-13). |
| R-10 | As decisões relevantes do projeto devem ser registradas (antigo RNF-14). |
