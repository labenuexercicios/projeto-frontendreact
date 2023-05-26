import { CaixaDoProduto, Imagem, ImagemProduto, InfoProduto } from "./ProductCardStyle";



function ProductCard({listaDeProdutos}) {
  console.log('card', listaDeProdutos)
  return (
    <CaixaDoProduto> 
           <Imagem src={listaDeProdutos.imageUrl} />
      <InfoProduto />

      <p>{listaDeProdutos.name}</p>
      <p>{listaDeProdutos.value}</p>


      <p>Valor do produto</p>
      <button >Adicionar Item</button>
    </CaixaDoProduto>

  );
}

export default ProductCard;
