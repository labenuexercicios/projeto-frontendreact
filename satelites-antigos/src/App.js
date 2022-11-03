import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Header} from './components/Header/Header.js';
import {Main} from './components/Main/Main'
import styled from 'styled-components';

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
`
const Footer = styled.footer`
  background-color: black;
  height: 10vh;
  width: 100vw;
`


function App() {
  return (
      <ContainerBody>
      <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </ContainerBody>
  );
}

export default App;
