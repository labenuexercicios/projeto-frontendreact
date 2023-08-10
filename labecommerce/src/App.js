import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components//ShoppingCart/Cart/Cart";
import { GlobalStyle } from "./GlobalStyle";
import { productList } from "./assets/productList";
import { useState } from "react";

function App() {
  const [minFilter, setMinFilter] = useState();
  const [maxFilter, setMaxFilter] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [cart, setCart] = useState();
  const [amount, setAmount] = useState();

  return (
    <>
      <GlobalStyle />

      <main>
        <Filters />
        <Home productList={productList} />
        <Cart />
      </main>
    </>
  );
}

export default App;
