import React from "react";
import Filters from "./Components/Filters/Filters";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyle from "./GlobalStyle";
import { AppCaixa } from "./AppStyle";
import Home from "./Components/ProductList/Home/Home";





function App() {
  return (
    <div>

      <GlobalStyle />
      <h1>Projeto Labecommerce</h1>
      <AppCaixa>
    <Filters />
    <Home />
    <Cart />
    </AppCaixa>
    </div>
  );
}

export default App;
