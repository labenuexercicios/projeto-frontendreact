import Filters from "./Components/Filter/Filter"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import { MainContainer  } from "./AppStyle";
import { useState, useEffect } from "react";

export default function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [amount, setAmount] = useState("");
  const [cartProducts, setCartProducts] = useState([])



  return (
    <MainContainer>
      <Filters
      cartProducts={cartProducts}
      setCartProducts={setCartProducts}
      minFilter={minFilter} 
      setMinFilter={setMinFilter} 
      maxFilter={maxFilter} 
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}/>
      <Home 
      amount={amount}
      setAmount={setAmount}
      cartProducts={cartProducts}
      setCartProducts={setCartProducts}
      minFilter={minFilter} 
      setMinFilter={setMinFilter} 
      maxFilter={maxFilter} 
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      />
      <Cart
      amount={amount}
      setAmount={setAmount}
      cartProducts={cartProducts}
      setCartProducts={setCartProducts}
      />
    </MainContainer>
  );
}

 
