projeto-frontendreact
Esse é o projeto de introdução aos fundamentos do React. Aqui, vamos praticar a estrutura do que consideramos a estrutura do React. O objetivo é que funcione como o front-end de um E-Commerce

JSX
Componentes
Props
Estado
Fluxo de dados no React
Renderização de listas
Renderização condicional
localStorage
Instruções
O Astrodev deixou um testamento e essa foi a herança deixada pra vocês:

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

**O prazo é até sexta, 23h59.** 

Att.
Requisitos
O projeto consistirá em 3 grandes partes:

Home
Mostrando todos os produtos
Deve haver alguma forma de ordenar os produtos por ordem crescente ou decrescente de preço (pode ser na home em si ou junto dos filtros)
Produtos:
Devem ter um botão que permita adicioná-los ao carrinho
Devem exibir o nome, preço e imagem em um card
Carrinho
Mostrar todos os produtos e quantidades adicionadas
Capacidade de remover itens do carrinho
Mostrar o valor total do carrinho
Filtro
Por valor mínimo e máximo
Por nome do produto
Exemplo de estruturação de UM produto (Lembrem-se que vocês terão uma lista contendo todos):

{
	id: 1,
	name: "Foguete da Missão Apollo 11",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
}
Lista de Requisitos
Home (Lista de Produtos)
 O usuário deve ser capaz de visualizar uma lista de produtos
 O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
 O usuário deve ser capaz de adicionar um produto no carrinho
Carrinho
 O usuário deve ser capaz de visualizar os produtos adicionados
 O usuário deve ser capaz de visualizar a quantidade correta de cada produto
 O usuário deve ser capaz de remover itens do carrinho
 O usuário deve ser capaz de ver corretamente o valor total de sua compra
 Quando a página é atualizada, os itens devem continuar no carrinho
Filtros e Ordenação
 O usuário deve ser capaz de filtrar os itens por preço mínimo
 O usuário deve ser capaz de filtrar os itens por preço máximo
 O usuário deve ser capaz de realizar uma busca por nome
 O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
 O usuário deve ser capaz de adicionar filtros, busca e ordenação simultaneamente
 O usuário deve ser capaz de retornar à visualização sem filtros


 
Conseguiu terminar? Aqui temos alguns desafios
Salvar e Recuperar conteúdo do carrinho usando o LocalStorage;
Dediquem um tempo para melhorar o layout e a usabilidade do seu site! Se baseiem em outros e-commerces que vocês gostam para chegar em um resultado mais próximo do padrão de design visto no mercado;
Se TODO O RESTO DO SITE e os dois desafios anteriores estiverem funcionando, pensem: qual outra funcionalidade está faltando? Decidam o que vocês concordam que poderia ser uma boa adição à loja virtual (pode ser qualquer funcionalidade, desde que vocês consigam implementá-la). Todas as funcionalidades extras implementadas devem ser listadas e explicadas no readme do projeto para que possam ser avaliadas.
Entrega
Faça o fork desse repositório e realize o clone da sua cópia seu-nome-de-usuario/projeto-frontendreact.
Quer uma dica?
Crie os arquivos do projeto dentro deste repo;
Execute o fluxo de entrega do git. Lembre-se de abrir os PRs para seu próprio repositório.
Para isso, você precisará fazer o projeto utilizando branches. Evite fazer as alterações direto na branch main
Dúvidas sobre o Git & Github?
Entregue o link do repo no Formulário de entrega
Utilize o surge para fazer o deploy do seu projeto.
