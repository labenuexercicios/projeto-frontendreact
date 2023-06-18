import Filter from "./Components/Filters";
import Home from "./Components/ProductList/Home";
import Cart from "./Components/ShoppingCart/Cart";
import { Wrapper } from "./App.styled.jsx";
import Product from "./assets/productList";
import { useState } from "react";

function App() {
  
  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState('')
  const [amount, setAmount] = useState('')
  




  return (
    <>
      <Wrapper>

        <Filter />
        <Home produto={Product} />
        <Cart />
        

      </Wrapper>
    </>
  );
}

export default App;
