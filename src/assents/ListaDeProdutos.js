const listaDeProdutos = [
  {
    id: 1,
    nomeDoProduto: "Laço 01",
    preco: 1.99,
    imagem: "https://picsum.photos/id/0/367/267",
  },
  {
     id: 2,
     nomeDoProduto: "Máscara 01", 
     preco: 7.99,
     imagem: "https://picsum.photos/id/0/367/267",
    },
  { 
    id: 3,
    nomeDoProduto: "Presilha 01", 
    preco: 12.99,
    imagem: "https://picsum.photos/id/0/367/267",
  }
];

const Itens = ({id, nomeDoProduto, preco, imagem}) => {

  return(
    <div>
      <h4>Id: {id}</h4>
      <p>Nome do produto: {nomeDoProduto}</p>
      <p>Preço: R${preco}</p>
      <img>{imagem}</img>
    </div>

  )

}

export {listaDeProdutos}
