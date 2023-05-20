import React from "react";
import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import Container from "./AppStyle";
import { GlobalStyle } from "./GlobalStyle";
import ProductCard from "./Components/ProductList/ProductCard/ProductCard";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Filter />
        <Home />
        <Cart />
      </Container>
    </>
  );
}

export default App;
