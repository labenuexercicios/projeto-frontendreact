import React, { useState, useEffect } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyles } from "./GlobalStyles";
import { listaDeProdutos } from "./assets/productsList";
import { MainApp, HeaderApp } from "./AppStyle";


function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [minFilter, setMinFilter] = useState("");
  const [maxFiler, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  

  const filterProducts = listaDeProdutos
    .filter((produto) => {
      if (minFilter) {
        return produto.value >= parseInt(minFilter);
      }
      return true;
    })
    .filter((produto) => {
      if (maxFiler) {
        return produto.value <= parseInt(maxFiler);
      }
      return true;
    })
    .filter((produto) => {
      if (searchFilter) {
        return produto.name.toLowerCase().includes(searchFilter.toLowerCase());
      }
      return true;
    });

    const saveLocalStorage = () => {
     const listLocal = JSON.stringify(cart);
     localStorage.setItem("cart", listLocal);
   };

  

  useEffect(() => {
    const listLocal = JSON.parse(localStorage.getItem("cart"));
    listLocal && setCart(listLocal);
  }, []);

  

  useEffect(() => {
    if(cart.length){saveLocalStorage()
    
    } else{
      localStorage.removeItem('cart')
    }

    
    
  }, [cart]);

  return (
    <>
      <GlobalStyles />

      <MainApp>
        <HeaderApp>
          <h1>SPACE FASHION</h1>
        </HeaderApp>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFiler={maxFiler}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          listaDeProdutos={filterProducts}
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
      </MainApp>
    </>
  );
}

export default App;
