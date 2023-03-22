import React from "react";
import Carrinho from "./components/Carrinho";
import Filtros from "./components/Filtros";
import Home from "./components/Home";
import { useState } from "react";
import {
  ProdutosContext,
  TODOS_PRODUTOS,
  CarrinhoContext,
} from "./assets/produtos";

import "./App.css";

export default function App() {
  const [produtosFiltrados, setProdutosFiltrados] = useState(TODOS_PRODUTOS);
  const [carrinho, setCarrinho] = useState({});

  return (
    <div className="app">
      <ProdutosContext.Provider
        value={{
          produtosFiltrados: produtosFiltrados,
          setProdutosFiltrados: setProdutosFiltrados,
        }}
      >
        <CarrinhoContext.Provider
          value={{
            carrinho: carrinho,
            setCarrinho: setCarrinho,
          }}
        >
          <Filtros></Filtros>
          <Home></Home>
          <Carrinho></Carrinho>
        </CarrinhoContext.Provider>
      </ProdutosContext.Provider>
    </div>
  );
}
