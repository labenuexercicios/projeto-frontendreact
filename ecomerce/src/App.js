import { Home } from "./Componentes/ListaProdutos/Home/Home"
import { Filtros } from "./Componentes/Filtros/Filtros"
import { Carrinho } from "./Componentes/CarrinhoCompras/Carrinho/Carrinho"
import styled, { createGlobalStyle } from "styled-components";
import {listaProdutos} from "./assets/listaProdutos"
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export default function App() {

const [filtroMin, setFiltroMin] = useState("")
const [filtroMax, setFiltroMax] = useState("")
const [filtroBusca, setFiltroBusca] = useState("")
const [carrinho, setCarrinho] = useState("")
const [montante, setMontante] = useState("")

  return(
    
    <MainContainer>

      <GlobalStyled />

      <Filtros
      filtroMin={filtroMin}
      setFiltroMin={setFiltroMin}

      filtroMax={filtroMax}
      setFiltroMax={setFiltroMax}

      filtroBusca={filtroBusca}
      setFiltroBusca={setFiltroBusca}
      />

      <Home
      carrinho={carrinho}
      setCarrinho={setCarrinho}

      montante={montante}
      setMontante={setMontante}
      
      listaProdutos={listaProdutos}
      />

      <Carrinho
      carrinho={carrinho}
      setCarrinho={setCarrinho}

      montante={montante}
      setMontante={setMontante}
      />

    </MainContainer>
  )
}
