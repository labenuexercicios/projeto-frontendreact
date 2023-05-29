import React from "react";
import { DivProduct, DivProduct1 } from "./ProductCardStyle";
import productList from "../../../assents/productList";

function ProductCard({ productList, adicionarAoCarrinho }) {
  return (
    <DivProduct>
      <img src={productList.imageUrl} />
      <DivProduct1>
        <p>{productList.name}</p>
        <p>
          {Number(productList.value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => adicionarAoCarrinho(productList)}>
          Adicionar ao carrinho
        </button>
      </DivProduct1>
    </DivProduct>
  );
}

export default ProductCard;
