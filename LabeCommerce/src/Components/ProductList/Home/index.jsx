/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { HomeContainer, CardContainer, ContainerInfo } from "./style.jsx";
import ProductCard from "../ProductCard";

export default function Home(props) {
  const { Products, cart, setCart,searchFiltered  } = props;
  const [ordination, setOrdination] = useState("asc");

  const filteredList = Products.sort((a, b) => {
    if (ordination === "asc") {
      return a.value - b.value;
    }
    if (ordination === "desc") {
      return b.value - a.value;
    }
  });

  return (
    <HomeContainer>
      <ContainerInfo>
        <h3>Quantidade de produtos:</h3>
        <div>
          <h4>Ordenação</h4>
          <select
            value={ordination}
            name="seleçãoOrdem"
            onChange={(e) => setOrdination(e.target.value)}
          >
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </div>
      </ContainerInfo>

      <CardContainer>
        <ProductCard  searchFiltered={searchFiltered} Products={filteredList} cart={cart} setCart={setCart} />
      </CardContainer>
    </HomeContainer>
  );
}
