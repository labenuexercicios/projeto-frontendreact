# projeto-frontendreact

Esse é o projeto de introdução aos fundamentos do React. Aqui, vamos praticar a estrutura do que consideramos a estrutura do React. O objetivo é que funcione como o front-end de um E-Commerce

- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage

## Instruções

O Astrodev deixou um testamento e essa foi a herança deixada pra vocês:

```
Estudantes do meu coração,
Estou querendo montar um e-commerce de itens espaciais e vocês serão responsáveis por essa construção. 
Pretendo montar diferentes linhas de produtos. 

As possíveis linhas de produto são:
- Satélites antigos;
- Roupas espaciais;
- Camisetas com estampas divertidas relacionadas ao espaço;
- Viagens espaciais;
- Meteoritos / aerolitos como pedras preciosas;
- Brinquedos e produtos infantis temáticos;
- Naves / Foguetes / Ônibus espaciais;

Escolham uma linha dentre essas, e criem um e-commerce de acordo com a lista de requisitos.


Att.
```

# Requisitos

O projeto consistirá em 3 grandes partes:

1. Home
    - Mostrando todos os produtos
    - Deve haver alguma forma de ordenar os produtos por ordem crescente ou decrescente de preço (pode ser na home em si ou junto dos filtros)
    - Produtos:
        - Devem ter um botão que permita adicioná-los ao carrinho
        - Devem exibir o nome, preço e imagem em um card
2. Carrinho
    - Mostrar todos os produtos e quantidades adicionadas
    - Capacidade de remover itens do carrinho
    - Mostrar o valor total do carrinho
3. Filtro
    - Por valor mínimo e máximo
    - Por nome do produto

Exemplo de estruturação de **UM** produto (Lembrem-se que vocês terão uma lista contendo todos):

```jsx
{
	id: 1,
	name: "Foguete da Missão Apollo 11",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
}
```

### Lista de Requisitos
- Home (Lista de Produtos)
    - [ ]  O usuário deve ser capaz de visualizar uma lista de produtos
    - [ ]  O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
    - [ ]  O usuário deve ser capaz de adicionar um produto no carrinho
- Carrinho
    - [ ]  O usuário deve ser capaz de visualizar os produtos adicionados
    - [ ]  O usuário deve ser capaz de visualizar a quantidade correta de cada produto
    - [ ]  O usuário deve ser capaz de remover itens do carrinho
    - [ ]  O usuário deve ser capaz de ver corretamente o valor total de sua compra
    - [ ]  Quando a página é atualizada, os itens devem continuar no carrinho
- Filtros e Ordenação
    - [ ]  O usuário deve ser capaz de filtrar os itens por preço mínimo
    - [ ]  O usuário deve ser capaz de filtrar os itens por preço máximo
    - [ ]  O usuário deve ser capaz de realizar uma busca por nome
    - [ ]  O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
    - [ ]  O usuário deve ser capaz de adicionar  filtros, busca e ordenação simultaneamente
    - [ ]  O usuário deve ser capaz de retornar à visualização sem filtros
    
 ### 

O layout da página é escolha de vocês! O exemplo abaixo é só uma implementação bemmm simples das funcionalidades, não se atenham a ele.

http://fluttering-coast.surge.sh/
 

https://user-images.githubusercontent.com/11279432/197185533-14582ca3-9eb0-4a5a-b57c-b94913ff2dd6.mp4



    
  ### Conseguiu terminar? Aqui temos alguns **desafios**
  1. Salvar e Recuperar conteúdo do carrinho usando o `LocalStorage`;
  2. Dediquem um tempo para melhorar o layout e a usabilidade do seu site! Se baseiem em outros e-commerces que vocês gostam para chegar em um resultado   mais próximo do padrão de design visto no mercado;
  3. Se TODO O RESTO DO SITE  e os dois desafios anteriores estiverem funcionando, pensem: qual outra funcionalidade está faltando? Decidam o que vocês concordam que poderia ser uma boa adição à loja virtual (pode ser qualquer funcionalidade, desde que vocês consigam implementá-la). Todas as funcionalidades extras implementadas devem ser listadas e explicadas no readme do projeto para que possam ser avaliadas.
  
  ### Instruções para preparar o seu repositório

- Faça o fork desse repositório e realize o clone da sua cópia `seu-nome-de-usuario/projeto-lista-intro-javascript`.
   <details>
   <summary>Quer uma dica?</summary>
   <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Ffork.png?alt=media&token=7030e997-246a-41fe-a75f-2a2ced61e54d" alt="Como adicionar o projeto no repositório"/>
   </details>
- Crie os arquivos do projeto dentro deste repo;
- **Lembre-se de abrir os PRs para seu próprio repositório.**
- Para isso, você precisará fazer o projeto utilizando **branches**. Não faça as alterações direto na branch ```main```!

### Instruções de entrega

![image](https://user-images.githubusercontent.com/71137294/227538428-52271ed2-df78-4500-b286-25f03aa7bf2e.png)
1.  [Crie o surge](https://labenu.notion.site/Deploy-de-front-React-com-Surge-f902a03ec1d247dc9af9aee5a1469d96) do seu projeto e pegue o link da publicação(deploy);
2.  Adicione o link do surge no readme do seu projeto;
3.  Tire print das páginas do seu projeto e cole no readme;
4.  Abra um novo Pull Request (PR) com a frase **PR para correção**. Caso não saiba como fazê-lo, assista a esse [vídeo](https://www.canva.com/design/DAFY4nS5W2c/t92uFMR61YtmA7bCwj2S1Q/watch).
5.  Envie o link do seu PR e do surge no [formulário de entrega](https://forms.gle/S9XChPZravP3WdxL6).
