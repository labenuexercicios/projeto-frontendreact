import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
`

function App() {
  return (
    <ContainerGeral>
      <Header />
      <AsideFiltro />
      <Main />
      <AsideCarrinho />
      <Footer />

      <GlobalStyle />
    </ContainerGeral>
  );
}

export default App;
