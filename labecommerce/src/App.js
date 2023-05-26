import React from "react";
import { useState } from "react";
import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import Container from "./AppStyle";
import { GlobalStyle } from "./GlobalStyle";
import productList from "./assents/productList";

function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [orderFilter, setOrderFilter] = useState("");
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
