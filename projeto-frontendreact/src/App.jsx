import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Filter } from './components/Filter/Filter'
import { Home } from './components/Home/Home'
import { CartContainer } from './components/Cart/styled'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;   
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Container>
        <Filter>

        </Filter>
        <Home>

        </Home>
        <CartContainer>
          
        </CartContainer>
      </Container>
    </>
      
   
  )
}

export default App
