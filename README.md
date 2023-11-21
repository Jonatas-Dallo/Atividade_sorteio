# Descrição da Atividade: Desenvolvimento de Aplicativo Web de Resultados de Loterias <br>
 Fazer um aplicativo web para mostrar os dados do último sorteio da Mega-sena, Quina e 
Timemania, sendo cada sorteio em uma página distinta acessível pelas rotas /megasena, /quina e /timemania, 
respectivamente. A página deverá ser organizada em componentes estilizados usando styled-components.

**Objetivos:**
- Utilização de React TS para construção da aplicação, com ênfase em requisições HTTP, contexto, hooks e rotas. <br>
- Estilização dos componentes utilizando styled-components e temas CSS. <br>

## Rodando o Projeto:
1. Execute `npm install` para instalar as dependências.
2. Execute `npm start` para iniciar a aplicação. Acesse-a em [http://localhost:3003](http://localhost:3003).

## Requisitos Funcionais:  <br>
a) Consumir os resultados disponíveis na API [https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados](https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados). <br>
b) Implementar rotas para /timemania, /megasena e /quina. <br>

## Requisitos Não Funcionais:  <br>
a) Desenvolver a aplicação usando React TS. <br>
b) Utilizar os seguintes pacotes: `@fontsource/roboto`, `axios`. <br>
c) A aplicação deverá rodar na porta 3003. <br>
d) Ícone da página deve ser [favicon.ico](https://loterias.caixa.gov.br/Style%20Library/images/favicon.ico). <br>
e) Utilizar a fonte Roboto em todos os textos com o pacote `@fontsource/roboto`. <br>
f) Utilizar axios para requisições HTTP. <br>
g) Criar componentes apenas com styled-components, com estilos CSS anexados aos componentes. <br>
h) Estruturar os componentes conforme especificado, utilizando apenas styled-components para definição de estilos. <br>
i) Criar páginas com as marcações Principal e Carregando. Ambas devem conter as marcações NomeLoteria, Estimativa, Resultado, Acumulou e Data. <br>
j) Propagar cores através do `<ThemeProvider>`.
k) Armazenar temas no módulo `styles/theme.ts`.
l) Exibir mensagem de carregando centralizada na tela vertical e horizontal enquanto o resultado não estiver disponível.

**Temas:**
styles/theme.ts
