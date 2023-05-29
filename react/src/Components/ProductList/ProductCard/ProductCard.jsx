import {
  ButtonStyle,
  ImgProduct,
  InfoProduct,
  ProductCardStyle,
} from "./ProductCardStyle";

export function ProductCard({ productList, addCart }) {
  return (
    <ProductCardStyle>
      <ImgProduct src={productList.imageUrl} alt={productList.name} />
      <InfoProduct>
        <p>Nome do Produto: {productList.name}</p>
        <p>Valor do Produto: R${productList.value}</p>
        <ButtonStyle onClick={() => addCart(productList)}>
          Adicionar ao Carrinho
        </ButtonStyle>
      </InfoProduct>
    </ProductCardStyle>
  );
}
