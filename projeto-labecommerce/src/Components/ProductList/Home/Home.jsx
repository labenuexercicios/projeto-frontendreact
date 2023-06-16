import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader } from "./HomeStyle";

const Home = (props) => {
  console.log(props)
  const [ordination, setOrdination] = React.useState("");

  function handleOrdinationChange(event) {
    setOrdination(event.target.value);
  }

  

  return (
    <HomeContainer>
      <HomeHeader>
        <h1>Space Themed E-Commerce</h1>
        <p>Quantidade de produtos:{props.produtos.length}</p>
        <span>
          <p>Ordenação</p>
          <select onChange={handleOrdinationChange} value={ordination}>
            <option>Ordenar</option>
            <option>Crescente</option>
            <option>Decrescente</option>
            
          </select>
        </span>
      </HomeHeader>
        <ProductCard
          produtos={props.produtos}
          ordination={ordination}
          setOrdination={setOrdination}
          handleClick={props.handleClick}
          maxFilter={props.maxFilter}
          searchFilter={props.searchFilter}
        />
    </HomeContainer>
  );
};

export default Home;
