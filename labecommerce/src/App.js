import React from "react";
import { useState } from "react";
import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import Container from "./AppStyle";
import { GlobalStyle } from "./GlobalStyle";
import productList from "./assents/productList";

function App() {
  const [orderFilter, setOrderFilter] = useState("");
  return (
    <>
      <GlobalStyle />
      <Container>
        <Filter />
        <Home
          productList={productList}
          orderFilter={orderFilter}
          setOrderFilter={setOrderFilter}
        />
        <Cart />
      </Container>
    </>
  );
}

export default App;
