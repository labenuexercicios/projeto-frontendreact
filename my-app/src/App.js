import { createGlobalStyle } from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Homepage from "./Homepage/Homepage"
import Cards from "./Cards/Cards";
import { useState } from "react";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h2{
        display: flex;
        justify-content: center;
        padding: 18px;
        font-weight: bold;
        font-size: 34px;
    }
`;

function App() {

  const [busca, setBusca] = useState("")

    return(
    <>
        <GlobalStyle />
        <Header 
        buscaId={busca}
        setBuscaId={setBusca}
        />
        <Homepage />
        <h2> Linha exclusiva :</h2>
        <Cards />
        <Footer/>
    </>
    )
}

export default App;