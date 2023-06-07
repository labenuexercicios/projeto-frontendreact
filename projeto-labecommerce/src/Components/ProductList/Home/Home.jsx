import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader } from "./HomeStyle";

const Home = (props) => {
  // console.log(props)
  const [ordination, setOrdination] = React.useState("");

  function handleOrdinationChange(event) {
    console.log(event.target.value);
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
            <option>Crescente</option>
            <option>Decrescente</option>
            <option>Novidades</option>
          </select>
        </span>
      </HomeHeader>
        <ProductCard
          produtos={props.produtos}
          handleClick={props.handleClick}
        />
    </HomeContainer>
  );
};

export default Home;
