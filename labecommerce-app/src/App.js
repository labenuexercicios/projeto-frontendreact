import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import styled from 'styled-components';
import { meusProdutos } from './assents/productList';
import React, { useState } from 'react';

const AppStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    @media (max-width: 1280px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;     
    }
`

const Header = styled.header`
    display: flex;
    border: 1px solid #000;
    padding: 20px;

`


function App() {

  //  Home - Cart
  const [cart, setCart] = useState()
  const [amount, setAmount] = useState("")
  
  //  Filters
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")


  // function addCart (){

  // }

  return (
    <>
      <Header>
          <h1>Intergalática</h1>
      </Header>
      <AppStyle>
        
        <Filter
        meusProdutos={meusProdutos}

        minFilter={minFilter}
        setMinFilter={setMinFilter}

        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}

        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        />

        <Home
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}


        meusProdutos={meusProdutos}
        amount={amount}
        setAmount={setAmount}

        cart={cart}
        setCart={setCart}
        // addCart={addCart}
        />
        
        <Cart
        meusProdutos={meusProdutos}

        amount={amount}
        setAmount={setAmount}

        cart={cart}
        setCart={setCart}
        // addCart={addCart}
        />

        
      </AppStyle>
    </>
  );
}

export default App;
