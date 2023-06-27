import Filter from "./Components/Filters";
import Home from "./Components/ProductList/Home";
import Cart from "./Components/ShoppingCart/Cart";
import { Wrapper } from "./App.styled.jsx";
import Product from "./assets/productList";
import { useState } from "react";

function App() {
  const [minFilter, setMinFilter] = useState(-Infinity);
  const [maxFilter, setMaxFilter] = useState(-Infinity);
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

const searchFiltered = Product
.filter((item)=>{return item.value >= minFilter || !minFilter})
.filter((item)=>{return item.value <= maxFilter || !maxFilter})
.filter((item)=>{return item.name.toUpperCase().includes(searchFilter) || !searchFilter})
//implementar validações de tamanho de letras upper casa lower case




console.log(searchFiltered)


  
  return (
    <>
      <Wrapper>
        <Filter
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          Product={Product}
  
        />
        <Home
          Products={searchFiltered}
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
          
        />
        <Cart
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
      </Wrapper>
    </>
  );
}

export default App;
