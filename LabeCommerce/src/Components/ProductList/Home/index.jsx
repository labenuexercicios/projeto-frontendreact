/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { HomeContainer, CardContainer, ContainerInfo } from "./style.jsx";
import ProductCard from "../ProductCard";

export default function Home(props) {
  const { Products, cart, setCart, amount, setAmount } = props;
  const [ordination, setOrdination] = useState("");

  return (
    <HomeContainer>
      <ContainerInfo>
        <h3>Quantidade de produtos:</h3>
        <div>
          <h4>Ordenação</h4>
          <select
            name="seleçãoOrdem"
            onChange={(e) => setOrdination(e.target.value)}
          >
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </div>
      </ContainerInfo>

      <CardContainer>
        <ProductCard Products={Products} cart={cart} setCart={setCart} />
      </CardContainer>
    </HomeContainer>
  );
}
