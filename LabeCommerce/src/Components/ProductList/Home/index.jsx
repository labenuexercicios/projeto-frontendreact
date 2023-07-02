/* eslint-disable react/prop-types */

import {
  HomeContainer,
  CardContainer,
  ContainerOrdination,
  FiltroContainer,
  TopBarContainer,
} from "./style.js";
import ProductCard from "../ProductCard";
import { useState } from "react";

export default function Home(props) {
  const {
    Products,
    cart,
    setCart,
    searchFiltered,
    searchFilter,
    setSearchFilter,
  } = props;

  const [ordination, setOrdination] = useState("asc");

  const filteredList = Products.sort((a, b) => {
    if (ordination === "asc" || ordination === "") {
      return a.value - b.value;
    }
    if (ordination === "desc" || ordination === "") {
      return b.value - a.value;
    }
  }).filter((item) => {
    if(item.name.toLowerCase().includes(searchFilter) || searchFilter === ""){
      return item
    }if(item.name.toUpperCase().includes(searchFilter) || searchFilter === ""){
      return item
    }
      
    
  });

  return (
    <HomeContainer>
      <TopBarContainer>
        <FiltroContainer>
          <label htmlFor="textNome">Search Item</label>

          <input
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            type="text"
            id="textNome"
            name="textNome"
            placeholder="Products..."
          />
        </FiltroContainer>
        <ContainerOrdination>
          <select
            value={ordination}
            name="seleçãoOrdem"
            onChange={(e) => setOrdination(e.target.value)}
          >
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </ContainerOrdination>
      </TopBarContainer>

      
        <CardContainer>
          <ProductCard
            searchFiltered={searchFiltered}
            Products={filteredList}
            cart={cart}
            setCart={setCart}
          />
        </CardContainer>
      </HomeContainer>
    
  );
}
