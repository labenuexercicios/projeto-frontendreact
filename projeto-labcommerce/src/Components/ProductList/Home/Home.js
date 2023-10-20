import { HomeContainer, TitleOne, TitleTwo } from "./HomeStyle";
import ProductCard from "../ProductCard/ProductCard";
import product from "../../../Assets/product.json";
import { useState, useEffect } from "react";

function Home(props) {
  const [ordination, setOrdination] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  const orderProducts = (event) => {
    setOrdination(event.target.value);
  }

  const applyFilters = () => {
    const minPrice = props.minFilter;
    const maxPrice = props.maxFilter;
    const nameSearch = props.searchFilter;

    const filtered = product.filter((product) => {
      const priceFilter = (!minPrice || product.value >= minPrice) && (!maxPrice || product.value <= maxPrice);
      const nameFilter = !nameSearch || product.name.toLowerCase().includes(nameSearch.toLowerCase()); // Case-insensitive search

      return priceFilter && nameFilter;
    });

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [props.minFilter, props.maxFilter, props.searchFilter]);

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (ordination === "Price High") {
      return b.value - a.value;
    } else if (ordination === "Price Low") {
      return a.value - b.value;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    applyFilters();
  }, [props.minFilter, props.maxFilter]);
  
  return (
    <HomeContainer>
      <TitleOne>Our Products:</TitleOne>
      <TitleTwo>Order:
        <select
          value={ordination}
          onChange={orderProducts}
        >
          <option>Order</option>
          <option>Price High</option>
          <option>Price Low</option>
        </select>
      </TitleTwo>
      <ProductCard 
        product={sortedProducts}
        cartProducts={props.cartProducts}
        setCartProducts={props.setCartProducts}
        amount={props.amount} 
        setAmount={props.setAmount}/>
    </HomeContainer>
  );
}

export default Home;
