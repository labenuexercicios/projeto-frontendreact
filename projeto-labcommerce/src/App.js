import Filters from "./Components/Filter/Filter"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import { MainContainer  } from "./AppStyle";
import { useState } from "react";


export default function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <MainContainer>
      <Filters 
      minFilter={minFilter} 
      setMinFilter={setMinFilter} 
      maxFilter={maxFilter} 
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}/>
      <Home 
      amount={amount}
      setAmount={setAmount}
      cart={cart}
      setCart={setCart}/>
      <Cart
      amount={amount}
      setAmount={setAmount}
      cart={cart}
      setCart={setCart}/>
    </MainContainer>
  );
}

 
