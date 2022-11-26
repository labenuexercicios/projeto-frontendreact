import React, { useState } from 'react';
import { createGlobalStyle } from "styled-components";
import { Carrinho } from './Componentes/carrinho';
import { Main } from './Componentes/main';



const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {


  return(
  <>
  <GlobalStyled/>
  <Main/>
  </>
  )
}

export default App;



