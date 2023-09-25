import React from "react";
import { Header } from "./Components/Header/Header";
import { ListaDeProdutos } from "./Components/Produtos/Produtos";
import GlobalStyle from "./GlobalStyle";
import 'boxicons'




function App() {


  
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <ListaDeProdutos />
      </div>
    </>
  );
}

export default App;