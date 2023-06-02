import React from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyles } from "./GlobalStyles";
import { listaDeProdutos } from "./assets/productsList";

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Filters />
        <Home
        listaDeProdutos ={listaDeProdutos}
        />
        <Cart />
      </main>
    </>
  );
}

export default App;
