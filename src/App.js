import React from "react"
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import data from './data'
import { DivContainer, MainApp } from './styles'
import { createGlobalStyle } from "styled-components"
import background from './assets/img/galaxy.png'

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {
  const { products } = data;

  return (
    <MainApp>
      <div className="back" style={{ backgroundImage: `url(${background})` }}>
  
    </div>
    <GlobalStyled />
    <Header/>
      <DivContainer>
        <Main 
        products={products} 
        ></Main>   
      </DivContainer>
      <Footer/>
    </MainApp>
  );
}

export default App;
