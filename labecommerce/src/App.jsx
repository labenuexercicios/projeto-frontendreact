import React, { useState } from "react";
import Filters from "./components/Filters/Filters";
import Home from "./components/ProductList/Home/Home";
import Cart from "./components/Shopping/Cart/Cart";
import GlobalStyles from "./GlobalStyle";
import { AppBox } from "./AppStyle";
import { productList } from "./assets/productList";


function App() {
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <AppBox>
     <GlobalStyles />
      <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
      <Home productList= {productList} amount={amount} setAmount={setAmount} cart={cart} setCart={setCart}/>
      <Cart amount={amount} setAmount={setAmount} cart={cart} setCart={setCart}/>
    </AppBox>
  );
}

export default App;
