import React, { useState } from "react";
import { createGlobalStyle } from 'styled-components';
import { Header } from "./Components/Header/Header";
import { PrincipalCard } from "./Components/PrincipalCard/PrincipalCard";
import { ProductsCard } from "./Components/ProductsCard/ProductsCard";

import products from "../src/assets/products.json"


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
`
function App() {
  

  return (
    <>
      <GlobalStyle />
      <Header
        
      />
      <PrincipalCard>
      
      </PrincipalCard>
    </>
  )
}

export default App;
