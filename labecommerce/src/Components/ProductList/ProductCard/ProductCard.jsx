import React from "react";
import { DivProduct, DivProduct1 } from "./ProductCardStyle";

function ProductCard() {
  return (
    <DivProduct>
      <img></img>
      <DivProduct1>
        <p>Nome do produto</p>
        <p>Valor</p>
        <button>Adicionar ao carrinho</button>
      </DivProduct1>
    </DivProduct>
  );
}

export default ProductCard;
