import React from "react";
import { ProductContainer } from "./ProductCard.styled.";

const ProductCard = (props) => {
  const { addToCart } = props;

  return (
    <ProductContainer>

      <img src={props.url} />
      <button onClick={()=> addToCart ()}>+ CARRINHO</button>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>Preço: R${props.value},00</p>
      

    </ProductContainer>
  );
};
export default ProductCard;
