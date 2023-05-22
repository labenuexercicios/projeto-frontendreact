import React from "react";
import Filter from "./Components/Filters";
import Home from "./Components/ProductList/Home";
import ProductCard from "./Components/ProductList/ProductCard";
import Cart from "./Components/ShoppingCart/Cart";
import Items from "./Components/ShoppingCart/Items";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <>
      <Wrapper>

        <Filter />
        <Home />
        <Cart />
        

      </Wrapper>
    </>
  );
}

export default App;
