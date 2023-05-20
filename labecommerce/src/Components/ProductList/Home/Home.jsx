import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeDiv, HomeStyled, DivProducts } from "./HomeStyle";

function Home({ productList, orderFilter, setOrderFilter }) {
  const handleOrderSearch = (e) => {
    setOrderFilter(e.target.value);
  };

  return (
    <HomeStyled>
      <HomeDiv>
        <h3>Quantidade de produtos: {productList.length}</h3>
        <h3>
          Ordenação:
          <select onChange={handleOrderSearch} value={orderFilter}>
            <option value="">Ordenar</option>
            <option value="e">Crescente</option>
            <option value="f">Decrescente</option>
          </select>
        </h3>
      </HomeDiv>
      <DivProducts>
        {productList
          .sort((a, b) => {
            if (orderFilter === "e") {
              return a.value >= b.value ? 1 : -1;
            } else if (orderFilter === "f") {
              return a.value <= b.value ? 1 : -1;
            }
          })
          .map((productList) => {
            return (
              <ProductCard key={productList.id} productList={productList} />
            );
          })}
      </DivProducts>
    </HomeStyled>
  );
}

export default Home;
