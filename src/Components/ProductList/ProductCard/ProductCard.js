import { CaixaDoProduto, ImagemProduto, InfoProduto } from "./ProductCardStyle";



function ProductCard() {
  return (
    <CaixaDoProduto>
      <InfoProduto />
      <ImagemProduto />
      <div>
      <p>Nome do Produto</p>

      <p>Valor do produto</p>
      <button >Adicionar Item</button>
      </div>
    </CaixaDoProduto>

  );
}

export default ProductCard;
