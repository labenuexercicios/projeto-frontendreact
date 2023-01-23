//Dependencies
import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
// Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const GlobalSyled = createGlobalStyle`
  * {
  margin: 0px;
  padding: 0px;
  font-family: Roboto;
}
`

const MainContaner = styled.main`
min-height: 80vh;
display: flex;
justify-content: center;
/* margin-top: 10px;
margin-bottom: 10px; */
padding-top: 10px;
padding-bottom: 10px;
background-color: lavender;
/* flex-direction: column; */
/* align-items: center; */
`;

function App() {
  return (
    <>
    <GlobalSyled />
      <Header />
      <MainContaner>
        <Main />
      </MainContaner>
      <Footer />
    </>
  );
}

export default App;
