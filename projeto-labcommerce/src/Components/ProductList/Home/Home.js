import { HomeContainer, TitleOne, TitleTwo } from "./HomeStyle";
import ProductCard from "../ProductCard/ProductCard"
import product from "../../../Assets/product.json"
import { useState } from "react";

function Home(props) {
  const [ordination, setOrdination] = useState("");

  const orderProducts = (event) => {
    setOrdination(event.target.value)
  }
    return (
      <>
      <HomeContainer>
        <TitleOne>Our Products:</TitleOne>
        <TitleTwo>Order:
        <select
        value={ordination}
        onChange={orderProducts}>
          <option>Order</option>
          <option>Price High</option>
          <option>Price Low</option>
        </select>
        </TitleTwo>
        <ProductCard
            key={product.id}
            product={product}/>
      
      </HomeContainer>
      </>
    );
  }

  export default Home;