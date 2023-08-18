import React from "react";
import "./modulo_scss/App.scss"
import Carrinho from "./componentes/Carrinho/Carrinho";
import Filtros from "./componentes/Filtros/Filtros";
import Home from "./componentes/Home/Home";


function App() {
  
  return (

    <>
      <main>
        <Filtros/>
        <Home/>
        <Carrinho/>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
