import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeDiv, HomeStyled, DivProducts } from "./HomeStyle";

function Home() {
  return (
    <HomeStyled>
      <HomeDiv>
        <h3>Quantidade de produtos:</h3>
        <h3>
          Ordenação:
          <select name="order" id="order">
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
        </h3>
      </HomeDiv>
      <DivProducts>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </DivProducts>
    </HomeStyled>
  );
}

export default Home;
