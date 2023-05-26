import React from "react";
import Filters from "./Components/Filters/Filters";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyle from "./GlobalStyle";
import { AppCaixa } from "./AppStyle";
import Home from "./Components/ProductList/Home/Home";
import { productList } from "./assents/productList";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>

      <GlobalStyle />
      <h1>Projeto Labecommerce</h1>
      <AppCaixa>
    <Filters 
      minFilter={minFilter}
      setMinFilter={setMinFilter}
      maxFilter={maxFilter}
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}



    />
    <Home 
    listaDeProdutos= {productList}
    amount={amount}
    setAmont={setAmount}
    cart={cart}
    setCart={setCart}
    />

    <Cart
    amount={amount}
    setAmont={setAmount}
    cart={cart}
    setCart={setCart}
    />
    </AppCaixa>
    </div>
  );
}

export default App;
