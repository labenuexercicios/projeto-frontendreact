import React from "react";
import { DivProduct, DivProduct1 } from "./ProductCardStyle";
import productList from "../../../assents/productList";

function ProductCard({ productList }) {
  console.log(productList);
  return (
    <DivProduct>
      <img src="https://picsum.photos/300/335?a=" />
      <DivProduct1>
        <p>{productList.name}</p>
        <p>{productList.value}</p>
        <button>Adicionar ao carrinho</button>
      </DivProduct1>
    </DivProduct>
  );
}

export default ProductCard;
