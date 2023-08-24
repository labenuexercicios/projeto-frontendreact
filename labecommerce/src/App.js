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


  const handleMinFilter = (event) => setMinFilter(event.target.value)
  const handleMaxFilter = (event) => setMaxFilter(event.target.value)
  const handleSearchFilter = (event) => setSearchFilter(event.target.value)
  const handleCart = (event) => setCart(event.target.value)
  const handleAmount = (event) => setAmount(event.target.value)
  
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
