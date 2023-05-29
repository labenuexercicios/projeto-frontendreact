import React from "react";
import { useState } from "react";
import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import Container from "./AppStyle";
import { GlobalStyle } from "./GlobalStyle";
import productList from "./assents/productList";

function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [orderFilter, setOrderFilter] = useState("");
  function handleFilterChange(filterName, value) {
    if (filterName === "minFilter") {
      console.log(handleFilterChange);
      setMinFilter(value);
    }
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Filter
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          onChange={handleFilterChange}
        />
        <Home
          productList={productList}
          amount={amount}
          setAmount={setAmount}
          orderFilter={orderFilter}
          setOrderFilter={setOrderFilter}
          cart={cart}
          setCart={setCart}
        />
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
      </Container>
    </>
  );
}

export default App;
