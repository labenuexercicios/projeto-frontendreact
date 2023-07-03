import React from "react";
import { ContainerProduct } from "./ProductCardStyle";

export const ProductCard = ({product}) => {
  return (
      <ContainerProduct>
        <img src={product.imageUrl}/>
        <p>{product.name}</p>
        <p>{product.value}</p>
        
        <button>Adcionar ao carrinho</button>
      </ContainerProduct>
  );
};
