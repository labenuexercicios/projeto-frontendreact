import React from "react"
import { createGlobalStyle } from "styled-components";
import {Header} from "./Header/Header"
import Produtos from "./Produtos/Produtos"
import './App.css';
import imagemSoyuz from "./img/soyuz.png"

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;



function App() {

  const produto1 = {
    nave: "Soyus",
    imagem: imagemSoyuz,
  }
    

  return (
    
    <>
      <GlobalStyled />
      <Header>
      </Header>

      <Produtos
      imagem={produto1.imagem}
      nave={produto1.nave}
      />
        
      
      
         
    </>
     
  );
}

export default App;
