import React, { useState } from "react";
// import "./modulo_scss/App.scss"
import Carrinho from "./componentes/Carrinho/Carrinho";
import Filtros from "./componentes/Filtros/Filtros";
import Home from "./componentes/Home/Home";
import { GlobalStyle } from "./GlobalStyle";
import { FiltroContainer } from "./componentes/Filtros/styleFiltros";
import { Principal } from "./GlobalStyle";
import { listaDeProdutos } from "./assents/ListaDeProdutos";

function App() {
  const [listaDeProdutosEstado, setListaDeProdutosEstado] = useState(listaDeProdutos || [])
  
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("") 
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)


  return (
    <div>
      <GlobalStyle />
      <Principal>
        <Filtros 
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          listaDeProdutos={listaDeProdutosEstado}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
        <Carrinho 
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}

        />
      </Principal>
    </div>
  );
}

export default App;
