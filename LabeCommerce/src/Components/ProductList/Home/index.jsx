import React from "react";
import { HomeContainer, CardContainer, ContainerInfo } from "./style";
import ProductCard from "../ProductCard";

export default function Home() {
  return (
    <HomeContainer>
      <ContainerInfo>
        <h3>Quantidade de produtos:</h3>
        <div>
        <h4>Ordenação</h4>
        <select name="seleçãoOrdem">
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </select>
        </div>
      </ContainerInfo>

      <CardContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardContainer>
    </HomeContainer>
  );
}
