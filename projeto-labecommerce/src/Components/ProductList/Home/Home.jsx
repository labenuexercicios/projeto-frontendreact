import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader } from "./HomeStyle";

const Home = (props) => {
  console.log(props)
  const [ordination, setOrdination] = React.useState("");

  function handleOrdinationChange(event) {
    console.log(event.target.value);
    setOrdination(event.target.value);
  }

  

  return (
    <HomeContainer>
      <HomeHeader>
        <p>Quantidade de produtos:{props.produtos.length}</p>
        <span>
          <p>Ordenacao:</p>
          <select onChange={handleOrdinationChange} value={ordination}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </span>
      </HomeHeader>
      <>
        <ProductCard
          produtos={props.produtos}
        />
      </>
    </HomeContainer>
  );
};

export default Home;
