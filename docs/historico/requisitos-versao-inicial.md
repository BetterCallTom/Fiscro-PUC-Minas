# Requisitos — versão inicial (antes da simplificação)

> Este arquivo guarda a primeira versão dos requisitos do FISCRO, escrita pelo Peralino, com o
> detalhamento de custos, CNAE, sócios, capital social e regras de tributação (MEI, Simples e
> Lucro Real). Na Etapa 1 o grupo decidiu simplificar o escopo: o sistema **não vai determinar a
> tributação** do negócio (ver restrição R-07). A versão em vigor está em
> [especification.md](../especification.md).
>
> O conteúdo foi mantido sem alterações, como registro da decisão e como referência das listas
> de custos e das regras tributárias, que podem ser úteis em etapas futuras.

---


Requisitos do Projeto

Abaixo com base nas histórias dos usuários levantados no item anterior enumeramos os requisitos funcionais e não funcionais para a solução. A cada requisito listado consta a correspondência de uma característica alvo da solução.

Requisitos Funcionais
Abaixo estão listados os requisitos funcionais que são as funções, serviços e comportamentos que o sistema deve oferecer. Prioridades definidas: Alta / Média / Baixa. 

RF 1  - Cadastro de usuário com CPF, nome completo                                        	Alta.

RF 2  - Cadastro do CNAE da atividade (ou CNAEs)                                          	Alta.

RF 3  - Cadastro do Custo Fixo esperado por categoria                                      	Alta.

RF 4  - Cadastro do Custo Variável esperado por categoria                                 	Alta.

RF 5  - Cadastro da Receita Estimada esperada por CNAE                                    	Alta.

RF 6  - Cadastro da faixa de datas para cada Custo Fixo, Estimado e Receita               	Alta.

RF 7  - Cadastro do Endereço de atuação do negócio esperado.                           	    Alta.

RF 8  - Cadastro do capital inicial do negócios                                             Alta.

RF 9  -  Cadastro dos sócios do negócio                                                     Alta.

RF 10 - Cadastro da expectativa de lucro a ser distribuído a cada sócio.             	      Alta.

RF 11 - Cadastro de investimento inicial caso exista além do capital inicial        	      Alta.

RF 12 - Permitir incluir, editar e excluir dados cadastrados                               Média.

RF 13 - Emitir relatório resumido dos dados acima com conclusão da análise     	           Baixa.


Requisitos não funcionais
Abaixo listados os requisitos não funcionais que estão relacionadas à qualidade, desempenho, segurança, usabilidade, compatibilidade, confiabilidade etc. Também foram listados com as prioridades Alta , Média e Baixa.

RNF 1 – Para o RF 1 o sistema apresentará um campo para entrada do CPF e outro para entrada do nome completo.

RNF 2 – Para o RF 1 ao cadastrar o CPF o sistema irá criticar se o CPF está correto e se o nome está realmente vinculado a ele na Receita Federal.

RNF 3 – Para o RF 1 os dados cadastrados de CPF e Nome do RNF1 e RNF2 o sistema precisará proteger esses dados de acesso indevido na rede conforme lei de Proteção dos dados.

RNF 4 – Para o RF 2 o cadastro do CNAE da atividade deverá dar a opção de cadastrar até 30 CNAEs da atividade. Essa informação será buscada em uma tabela interna com esses CNAE´s cadastrados em um banco de dados.

RNF 5 – Para o RF 2 ao dar entrada na seleção dos CNAE´s o sistema deixar visível até que conclua o cadastro os CNAE´s selecionados com seu NUMERO e DESCRIÇÃO conforme legislação e o razão social não terá analise feita.
RNF 6 – Para o RF 3 ao dar entrada no cadastro do custo fixo o sistema irá apresentar uma lista com os custos fixos disponíveis em formato de lista com o campo numérico na frente a ser preenchido pelo usuário conforme lista abaixo:

Aluguel do imóvel 
Condomínio 
IPTU 
Salários administrativos 
Pró-labore dos sócios 
Aluguel de máquinas e equipamentos 
Depreciação 
Seguros
Mensalidade de sistemas de gestão/ERP 
Internet 
Telefone empresarial 
Serviços de contabilidade 
Serviços jurídicos recorrentes 
Serviços de segurança/monitoramento 
Limpeza terceirizada com contrato mensal 
Manutenção preventiva contratada 
Honorários de consultoria mensal 
Licenças e taxas periódicas 
Salários de supervisores e gerentes 
Encargos trabalhistas sobre funcionários administrativos 
Benefícios de funcionários administrativos 
Energia elétrica mínima contratada 
Água mínima contratada 
Taxas de associação empresarial 
Despesas administrativas recorrentes

RNF 7 – Para o RF 3 o preenchimento dos valores em cada custo fixo escolhido pelo usuário o sistema permitirá valor zero e permitirá alterações.

RNF 8 – Para o RF 4 ao dar entrada no cadastro do custo variável o sistema irá apresentar uma lista com os custos variáveis disponíveis em formato de lista com o campo numérico na frente a ser preenchido pelo usuário conforme lista abaixo:

Matéria-prima 
Componentes utilizados na fabricação 
Embalagens 
Etiquetas e rótulos 
Comissões sobre vendas 
Frete sobre vendas 
Taxas de cartão de crédito/débito 
Taxas de marketplaces 
Royalties calculados sobre vendas 
Mão de obra diretamente ligada à produção
Horas extras diretamente relacionadas ao aumento da produção 
Consumo de energia diretamente relacionado à produção 
Consumo de água no processo produtivo 
Combustível utilizado para entregas 
Materiais auxiliares de produção 
Produtos químicos utilizados na fabricação 
Peças de reposição consumidas conforme o nível de produção 
Perdas normais de matéria-prima 
Serviços de terceiros cobrados por unidade produzida 
Custos de embalagem para transporte 
Custos de armazenagem
Bonificações ou descontos comerciais vinculados ao volume vendido

RNF 9 – Para o RF 4 o preenchimento dos valores em cada custo variável escolhido pelo usuário o sistema permitirá valor zero e permitirá alterações.

RNF 10 – Para o RF 5 o preenchimento do campo de receita estimada por CNAE o usuário reberá na tela os CNAES cadastrados no item RF2 para que em cada um deles seja colocada a receita bruta esperada MENSAL.

RNF 11 – Para o RF 5 o sistema também permitirá que valores zerados sejam aceitos e gravados e também posteriormente editados pelo usuário em caso de erros.

RNF 12 – para o RF 6 o sistema nas etapas do RF3 a RF5 precisará existir uma data onde o usuario coloque data inicio e fim dos valores esperados para os custos fixos, variáveis e receita estimada.

RNF 13 – Para o RF 6 o sistema também permitirá que valores zerados sejam aceitos e gravados e também posteriormente editados pelo usuário em caso de erros.

RNF 14 – Para o RF 7 o usuário informa o CEP e o sistema apresenta na tela as informações como RUA, Avenida, Numero, Bairro, Cidade, Estado, de forma que facilite o preenchimento.

RNF 15 – Para o RF 7 caso o usuário não saiba o CEP o sistema aceitará que seja digitado manualmente todo os dados do endereço sem cep.

RNF 16 – Para o RF 8 o sistema apresentará uma caixa para entrado do valor do capital social e em outra caixa o usuario vai escolher o tipo de capital social a ser integralizado na empresa e por fim a data que esse valor estara disponivel na empresa.

RNF 17 – Para o RF 8 o sistema apresentará uma lista de opções para “Tipo de Capital Social” a ser integralizado para que o usuário selecione conforme lista fixa abaixo:

Imóveis 
Terrenos 
Casas 
Salas comerciais 
Galpões 
Veículos 
Máquinas industriais 
Equipamentos de produção 
Computadores 
Móveis e utensílios 
Ferramentas 
Equipamentos de escritório 
Equipamentos agrícolas 
Animais destinados à atividade econômica 
Estoques de mercadorias 
Matérias-primas 
Patentes 
Marcas, quando economicamente avaliáveis e juridicamente aptas à transferência 
Direitos autorais patrimoniais 
Software de propriedade do sócio 
Licenças de uso transferíveis 
Direitos sobre determinados contratos 
Créditos que o sócio tenha contra terceiros 
Quotas ou participações em outras sociedades 
Ações de outras empresas 
Direitos de exploração econômica 
Direitos decorrentes de concessões ou autorizações, quando transferíveis 
Direitos de propriedade intelectual, quando juridicamente transferíveis
Direitos sobre imóveis ou outros ativos, quando juridicamente transferíveis

RNF 18 – Para o RF 8 o sistema permitirá que o usuário insira valor zerado ou ainda retorne para alterar.

RNF 19 – Para o RF 9 o sistema apresentará uma tela onde o usuário cadastra o nome completo e outra caixa com o CPF de cada sócio do negócio ou CNPJ se for o caso. Se tiver sociedde em outra empresa precisa informar o faturamento da outra empresa.

RNF 20 – Para o RF 9 o sistema irá criticar se o numero do CPF esta correto e se corresponde ao nome na Receita Federal e o CNPJ se for o caso.

RNF 21 – Para o RF 12 o sistema apresentará uma tela ou caixa onde o usuário digita a expetativa em moeda (R$) total para empresa e a temporalidade do lucro conforme lista abaixo em outra caixa:

Mensal  
Trimestral
Semestral
Anual 

RNF 22 – Para o RF 12 o sistema permitirá que o usuário insira valor zero em algumas das opções e ainda que possa retornar para possível alterações.

RNF 23 -  Para o RF 13 em todas as etapas acima será possível cadastrar dados zerados ou retorno para alterações.

RNF 24 – Para o RF 14 que será a parte principal e objetiva do sistema , uma tela será apresentada com as seguintes informações abaixo:
DADO – CNAE informado  - Com base no que foi informado pelo usuário
DADO – Razão Social Informado – Com base no que foi informado pelo usuário
DADO – Total do Custo Fixo Informado – Com base no que foi informado pelo usuário
DADO – Total do Custo Variável Informado – Com base no que foi informado pelo usuário
DADO – Total da Receita Estimada Bruta Informada – Com base no que foi informado pelo usuário
DADO – Valor do Capital Investido – Com base no que foi informado pelo usuário
DADO – Tempo em meses para retorno do Lucro – Com base no que foi informado pelo usuário
DADO – Lucro Esperado – Com base no que foi informado pelo usuário


*** Os itens abaixo de 1 a 5 serão com base nas fórmulas que apresentamos nos RFNs específicos a seguir.

1 ANALISE/RESULTADO – Lucro Apurado na Operação

2 ANALISE/RESULTADO – Divergência com lucro esperado

3 ANALISE/RESULTADO – Tipo de tributação a ser submetida

4 ANALISE/RESULTADO -  Total de cada imposto municipal, estadual e federal conforme tipo de tributação submetida

5 ANALISE/RESULTADO -  Mensagem final sobre negócio lucrativo dentro de x meses ou negócio não lucrativo

RNF 25 – Para o RF 14 além das informações da tela que será apresentada conforme citado no RNF 24, o sistema dará a opção de imprimir esse relatório ao usuario.

RNF 26 – Para o RF 14 o relatório dará a opção de selecionar a data para análise dos dados a serem apresentados .

RNF 27 – Para o RNF 24 ANALISE/RESULTADO 1 – usar a fórmula====Receita Estimada - Custo Fixo - Custo Variável - Impostos Apurados 

RNF 28 – Para o RNF 24 ANALISE/RESULTADO 2 – usar a fórmula====Lucro apurado no RNF21 ANALISE/RESULTADO 1 - Lucro esperado informado pelo usuario no RF 10

RNF 29 – Para o RNF 24 ANALISE/RESULTADO 3 – usar a fórmula====Analisar as regras do MEI, do SIMPLES e REAL no banco de dados e ver qual atende e apresentar no RF14 o tipo de tributacao

As regras do MEI, SIMPLES e LUCRO REAL, são essas que constam abaixo:(CNAES do LUCRO REAL buscarão na mesma base de dados do CNAE do RF2

MEI:

1- Lista dos CNAES Permitidos (se o CNAE informado pelo usuario no RF2 pelo usuário não estiver na lista abaixo ele    não pode ser MEI) - Listar no banco de dados a lista

2 -Se o faturamento bruto estimado esperado informado no RF5 somado no periodo de 12 meses ou 1 ano for > 81.000,00 ele pode ser MEI senao fica impedido.

3 - Se no RF9 existir cadastro de sócio em qualquer modalidade ele fica impedido de ser MEI.

4 - Se no RF9 o usuário informar SIM no campo que ele tem sociedade em outra empresa, ele fia impedido de ser MEI.

5 - Se no RF10 o usuário informar SIM para previsao de existencia ou existencia de FILIAL, ele fica impedido de ser MEI

6 - Se no RF11 o usuário informar SIM para folha e se o numero de funcionarios acima de 1, ele fica impedido de ser MEI.

7 - Se no RF09 o usuário informar uma profissão para ele como sócio diferente do CNAE informado no RF 2, ele fica impedido de ser MEI

*** Se PERMITIDO ao MEI precisa passar pelas regras acima. Passando calcular os impostos conforme abaixo:

Imposto MEI - R$ 86,00 (taxa fixa mensal)

SIMPLES NACIONAL:

1 - Ver se a previsao do faturamento informada pelo usuário no RF5 somada em 12 meses for > 4,8 milhoes fica IMPEDIDA de ser simples nacional

2 - Se o usuário no RF9 informar algum sócio PJ fica IMPEDIDO de ser simples nacional.

3 - Se o usuário no RF7 informar endereço no exterior fica IMPEDIDO de ser ser simples nacional.

4 - Se o usuário no RF9 informar algum sócio que tenha participação em outra empresa ele fica IMPEDIDO de ser simples nacional caso o faturamento na outra empresa somado com o faturamento do RF5 anual foi maior que o 
limite de 4,8 milhoes.

5 - Analisar se o CNAE informado no RF2 esta na lista dos CNAES permitidos ao MEI conforme lista disponibilizada no banco de dados. (Disponibilizar esses CNAES em algum banco de dados)

*** Se PERMITIDO ao SIMPLES precisa passar pelas regras acima. Passando calcular os impostos conforme abaixo:

***Aliquota aproximada total de 6% sobre  a Receita Bruta apurada no RF5 (lembando que o cálculo é mais complexo e essa aliquota é aproximada. Caso o sistema tenha sucesso corrigir essa formula)

LUCRO REAL:

1 - Se a a receita estimada esperada informada pelo usuario no RF5 anual foi > 78 milhoes fica OBRIGADA ao Lucro Real

2 - Se o CNAE informado pelo usuario no RF2 for igual a algum dos listados abaixo ela fica OBRIGADA ao Lucro Real (esses CNAES abaixo já estarão na base de dados geral de CNAES )

3 - Se a empresa então estiver OBRIGADA ao lucro real apurar os seguintes impostos:


IRPJ - 15% s/o valor informado no RNF24 ANALISE/RESULTADO 1(onde consta o Lucro Apurado)
CSLL - 9% s/o valor informado no RNF24 ANALISE/RESULTADO 1(onde consta o Lucro Apurado)

Abaixo CNAES que obrigam a empresa ser LUCRO REAL:

CNAE / DESCRIÇÃO
6410-7/00-Banco Central
6421-2/00-Bancos comerciais
6422-1/00-Bancos múltiplos, com carteira comercial
6423-9/00-Caixas econômicas
6424-7/01-Bancos cooperativos
6424-7/02-Cooperativas centrais de crédito
6424-7/03-Cooperativas de crédito mútuo
6424-7/04-Cooperativas de crédito rural
6431-0/00-Bancos múltiplos, sem carteira comercial
6432-8/00-Bancos de investimento
6433-6/00-Bancos de desenvolvimento
6434-4/00-Agências de fomento
6435-2/01-Sociedades de crédito imobiliário
6435-2/02-Associações de poupança e empréstimo
6435-2/03-Companhias hipotecárias
6436-1/00-Sociedades de crédito, financiamento e investimento - financeiras
6437-9/00-Sociedades de crédito ao microempreendedor
6438-7/01-Bancos de câmbio
6438-7/99-Outras instituições de intermediação monetária não especificadas anteriormente
6440-9/00-Arrendamento mercantil
6450-6/00-Sociedades de capitalização
6491-3/00-Sociedades de fomento mercantil - factoring
6492-1/00-Securitização de créditos

RNF 30 – Para o RNF 24 ANALISE/RESULTADO 4 – usar a fórmula===Com base na forma de tributação apurada no RNF29 verificar o valor dos tributos apurados e apresentar no RNF24 

RNF 31 – Para o RNF 24 ANALISE/RESULTADO 5 – usar a fórmula====Se o resultado de RNF27 > Lucro esperado informado pelo usuário no RF10 em 50% mostrar a mensagem abaixo: 
"Negócio com grande probabilidade de sucesso a curto prazo"

RNF 32 – Para o RNF 24 ANALISE/RESULTADO 5 – usar a fórmula====Se o resultado de RNF27 < Lucro esperado informado pelo usuário no RF10 em 50% mostrar a mensagem abaixo: 
"Negócio com grande probabilidade de fracasso a curto prazo"


