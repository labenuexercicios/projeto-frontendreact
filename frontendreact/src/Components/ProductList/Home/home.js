import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, MenuBox } from "./HomeStyle";

export const Home = () => {
  return (
    <HomeStyle>
      <MenuBox>
        <p>Quantidade de produtos: {"2"}</p>
        <label>
          Ordenação:
          <select>
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </select>
        </label>
      </MenuBox>
      <CardBox>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardBox>
    </HomeStyle>
  );
};
