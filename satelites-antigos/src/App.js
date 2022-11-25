import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Header} from './components/Header/Header.js';
import {Main} from './components/Main/Main'
import styled from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
const Footer = styled.footer`
  background-color: black;
  height: 6vh;
  width: 100vw;
`

function App() {
  const [page, setPage] = useState("store")
  const [listCart, setListCart] = useState([])

  return (
      <ContainerBody>
        <GlobalStyle/>
        <Header setPage={setPage} listCart={listCart}/>
        <Main 
          page={page} 
          listCart={listCart} 
          setListCart={setListCart}/>
        <Footer/>
      </ContainerBody>
  );
}

export default App;
