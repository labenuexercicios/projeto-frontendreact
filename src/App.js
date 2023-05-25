import React from "react";
import Filters from "./Components/Filters/Filters";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyle from "./GlobalStyle";
import { AppCaixa } from "./AppStyle";
import Home from "./Components/ProductList/Home/Home";
import { productList } from "./assents/productList";





function App() {
  console.log(productList)
  return (
    <div>

      <GlobalStyle />
      <h1>Projeto Labecommerce</h1>
      <AppCaixa>
    <Filters />
    <Home listaDeProdutos= {productList} />
    <Cart />
    </AppCaixa>
    </div>
  );
}

export default App;
