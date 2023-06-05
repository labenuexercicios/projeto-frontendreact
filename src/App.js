import React, { useState } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyles } from "./GlobalStyles";
import { listaDeProdutos as Catalogo } from "./assets/productsList";

function App() {
  const [cart, setCart] = useState("fff");
  const [amount, setAmount] = useState("uuuu");
  const [minFilter, setMinFilter] = useState("");
  const [maxFiler, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [listaDeProdutos, setListaDeProdutos] = useState(Catalogo);

  return (
    <>
      <GlobalStyles />
      <main>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFiler={maxFiler}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          listaDeProdutos={listaDeProdutos}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
      </main>
    </>
  );
}

export default App;
