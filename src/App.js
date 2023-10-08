import { useState } from "react";
import Header from "./componentes/Header/Header";
import Bunners from "./componentes/Bunners/Bunners";
import Comentarios from "./componentes/Comentarios/Comentarios";
import Footer from "./componentes/Footer/Footer";
import styled, { createGlobalStyle } from "styled-components";
import itens from "./itens/itens.json";
import itensBunners from "./itensBunners/itensBunners";
import ProductCard from "./componentes/ProductCard/ProductCard";
import CartCard from "./componentes/CartCard/CartCard";


const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    text-decoration: none;
    width: 100vw;
    display: flex;
    justify-content:center;
    margin: 0;
    
  }

  main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;   

}

`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  border-bottom: solid black 2px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #334455;
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <CardsContainer>
        <Header itens={itens}/>
       </CardsContainer>     
      <Bunners itensBunners={itensBunners} />
      <Comentarios />
      <Footer />
    </>
  );
}

export default App;
