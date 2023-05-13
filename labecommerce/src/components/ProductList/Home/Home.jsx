import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeBoxStyled, HomeCardsBox, HomeLabelBox } from "./HomeStyle";

export default function Home({productList, amount, setAmount, cart, setCart}) {
  const [ordination, setOrdination] = useState("")

  let productQuantity = 0
  const renderProducts = productList.map(product => {
    productQuantity++;
    return <ProductCard product={product} id= {product.id}/>
  })
  return (
    <HomeBoxStyled>
      <HomeLabelBox>
        <span>Quantidade de produtos: {productQuantity}</span>
        <label>
          Ordenação:
          <select value={ordination} onChange={(e) => setOrdination(e.target.value)} >
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </select>
        </label>
      </HomeLabelBox>
      <HomeCardsBox>
        {renderProducts}
      </HomeCardsBox>
    </HomeBoxStyled>
  );
}
