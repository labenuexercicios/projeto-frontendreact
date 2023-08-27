import React, { useState } from "react";
// import "./modulo_scss/App.scss"
import Carrinho from "./componentes/Carrinho/Carrinho";
import Filtros from "./componentes/Filtros/Filtros";
import Home from "./componentes/Home/Home";
import { GlobalStyle } from "./GlobalStyle";
import { FiltroContainer } from "./componentes/Filtros/styleFiltros";
import { Principal } from "./GlobalStyle";

function App() {
  const [listaDeProdutos, setListaDeProdutos] = useState(
    {
      id: 1,
      nomeDoProduto: "Laço 01",
      preco: 1.99,
      imagem: "https://picsum.photos/id/0/367/267",
    },
    {
      id: 2,
      nomeDoProduto: "Máscara 01",
      preco: 7.99,
      imagem: "https://picsum.photos/id/0/367/267",
    },
    {
      id: 3,
      nomeDoProduto: "Presilha 01",
      preco: 12.99,
      imagem: "https://picsum.photos/id/0/367/267",
    }
  );

  const { id, nomeDoProduto, preco, imagem } = listaDeProdutos;
  return (
    <div>
      <GlobalStyle />
      <Principal>
        <Filtros />
        <Home
          id={id}
          nomeDoProduto={nomeDoProduto}
          preco={preco}
          imagem={imagem}
        />
        <Carrinho />
      </Principal>
    </div>
  );
}

export default App;
