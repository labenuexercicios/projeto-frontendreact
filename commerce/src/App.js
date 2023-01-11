//Dependencies
import React from 'react'
import styled from 'styled-components'
// Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import NavSearch from './components/NavSearch/NavSearch'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'

const MainContaner = styled.main`
display: flex
`

function App() {
  return (
    <>
      <Header />
      <MainContaner>
        <NavSearch />
        <Main />
        <Cart />
      </MainContaner>
      <Footer />

    </>
  );
}

export default App;
