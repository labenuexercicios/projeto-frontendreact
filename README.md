# projeto-frontendreact

## DEPLOY ATUALIZADO !! https://pilares-funcional-sur.surge.sh/


### TEMAS ABORDADOS
- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage

# PROJETO PILARES REACT
<img src="https://i.ibb.co/vQv2WpG/TOTAL1.jpg" alt="TOTAL1" border="0" />
## FUNCIONALIDADES ADERIDAS 

#### FILTROS E ORDENAÇÃO
- FILTRAR PREÇO (MINIMO E MAXIMO escolha usuario)
- FILTRAR CATEGORIA (Tipo de roupa Calça, Camiseta e Meias)
- FILTRAR MODELO (Ingresando texto com nome de modelo)
- ORDENAR POR PREÇO (Desde de Maior ou Desde Menor preço)
- MOSTRAR TODOS PRODUTOS (RESET dos FILTROS DE PRODUTOS que mostra novamente catalogo completo)

### CARD PRODUTO
- Permite BOTÃO AGREGAR ao CARRINHO DE COMPRAS segundo a quantidade de clicks que o cliente faça
__Nota__ Futuramente podera escolher o tamanho de produto em stock desde o card


### CARRINHO CLIENTE
**CARRINHO VISUALIZADO AO APERTAR BOTÃO CARRINHO EM NAVBAR (Funciona como MODAL)**
- Visualiza produtos agregados desde CARD PRODUTO
- Permite ADMINISTRAÇÃO de PRODUTOS ADICIONADOS
    a. AUMENTAR ou DIMINUIR item individual
    b. VISUALIZAR PREÇO TOTAL ITEM (unidades * valor )
    c. DELETAR ITEM ao chegar a 1 produto se deleta o item em sua totalidade
    d. PREÇO TOTAL CARRINHO inclue o preço total de todos os produtos agregados 
    c. Visualizacao de CARRINHO VAZIO com 0 produtos e VALOR 00,00 exibindo mensagem de Carrinho VAZIO 
----

### FUNCIONALIDADES EXTRAS EM CONSTRUÇÃO

Carteira Cliente 
- Digital Wallet
- Crediario Cliente (Valida CEP por API e Segundo salario declarado inicialmente retorna bonus ou possibilidade de Parcelamento ou Desconto para fidelizar cliente)


Info Tecnica
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Lista de Requisitos Completados
- Home (Lista de Produtos)
    - [x]  O usuário deve ser capaz de visualizar uma lista de produtos
    - [x]  O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
    - [x]  O usuário deve ser capaz de adicionar um produto no carrinho
- Carrinho
    - [x]  O usuário deve ser capaz de visualizar os produtos adicionados
    - [x]  O usuário deve ser capaz de visualizar a quantidade correta de cada produto
    - [x]  O usuário deve ser capaz de remover itens do carrinho
    - [x]  O usuário deve ser capaz de ver corretamente o valor total de sua compra
    - [ ]  Quando a página é atualizada, os itens devem continuar no carrinho // parcialmente
- Filtros e Ordenação
    - [x]  O usuário deve ser capaz de filtrar os itens por preço mínimo
    - [x]  O usuário deve ser capaz de filtrar os itens por preço máximo
    - [x]  O usuário deve ser capaz de realizar uma busca por nome
    - [x]  O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
    - [x]  O usuário deve ser capaz de adicionar  filtros, busca e ordenação simultaneamente
    - [x]  O usuário deve ser capaz de retornar à visualização sem filtros
    
 ### 


