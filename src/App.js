import React from "react";
// import "./modulo_scss/App.scss"
import Carrinho from "./componentes/Carrinho/Carrinho";
import Filtros from "./componentes/Filtros/Filtros";
import Home from "./componentes/Home/Home";
import { GlobalStyle } from "./GlobalStyle";
import { FiltroContainer } from "./componentes/Filtros/styleFiltros";
import { Principal } from "./GlobalStyle"


function App() {
  return (
    <>
      <GlobalStyle />
      <Principal>
        <Filtros />
        <Home />
        <Carrinho />
      </Principal>
    </>
  );
}

export default App;
