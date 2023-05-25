# Tarefas

### Componentes de interface

- [X] Componente de Filtros
- [X] Componente Home (lista de produtos)
- [X] Componente de Carrinho
- [X] Componente de card de produto
- [X] Componente de quantidade de produto e ordenação

### Produtos

- [X] Criar o array de produtos e renderizar a lista de produtos com ele
        - Criar o arquivo com o array de produtos e exportar
        - Importar o array de produtos no componente base
        - Renderizar a lista de produtos com (Array.map)
- [] Exibir a quantidade de produtos da lista
        - Pegar o length do array do produtos que estão sendo renderizados
- [] Implementar a ordenação de produtos
        [x] Criar um novo estado com a lista de produtos com filtro
        [x] Implementar o onChange no input select e fazer a ordenação de acordo com o value do select (Array.sort)
        [] Fazer a ordenação do valor min e valor máx, usando os dois ao mesmo tempo

### Carrinho

- [x] Adicionar o produto na lista do carrinho
        [x] Criar o estados para guardar a lista de itens do carrinho
        [x] Implementar a função adicionar
        [X] Implementar a função remover
        [X] Salvar no LocalStorage
        [x] Recuperar os items quando atualiza com o LocalStorage
        [] Somar os valores