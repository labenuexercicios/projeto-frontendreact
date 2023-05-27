import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeArticle, HomeCards, OrdenacaoSection } from "./HomeStyle";

function Home() {
  return (
    <HomeArticle>
      <OrdenacaoSection>
        <div>Quantidade de produtos:</div>
        <div>
          <label>Ordenação</label>
          <select>
            <option value="">Opções</option>
          </select>
        </div>
      </OrdenacaoSection>

      <HomeCards>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </HomeCards>
    </HomeArticle>
  );
}

export default Home;
