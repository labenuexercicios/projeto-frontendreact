import { Home } from "./Componentes/ListaProdutos/Home/Home"
import { Filtros } from "./Componentes/Filtros/Filtros"
import { Carrinho } from "./Componentes/CarrinhoCompras/Carrinho/Carrinho"
import styled, { createGlobalStyle } from "styled-components";
import { listaProdutos } from "./assets/listaProdutos"
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
  const [carrinho, setCarrinho] = useState([])
  const [montante, setMontante] = useState(0)

  function addCarrinho(item) {
    const itemAdicionado = listaProdutos.find((produto) => produto === item)

    if (!carrinho.includes(itemAdicionado)) {

      itemAdicionado.quantidade = 1
      setCarrinho([...carrinho, itemAdicionado])

      setMontante(montante + itemAdicionado.valor)

    } else if (carrinho.includes(itemAdicionado)) {

      itemAdicionado.quantidade++

      setMontante(montante + itemAdicionado.valor)
    }
  }

  function subCarrinho(item) {
    const itemRemovido = carrinho.find((produto) => produto === item)
    
    if (itemRemovido.quantidade >= 1) {

      itemRemovido.quantidade--

      setMontante(montante - itemRemovido.valor)
      
    }if(itemRemovido.quantidade === 0){

      const itemRemovido = carrinho.find((produto) => produto === item)
      
      carrinho.splice(carrinho.indexOf(itemRemovido), 1)
    }
  }

  return (

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
        addCarrinho={addCarrinho}

        filtroMin={filtroMin}
        filtroMax={filtroMax}
        filtroBusca={filtroBusca}
      />

      <Carrinho
        carrinho={carrinho}
        setCarrinho={setCarrinho}

        montante={montante}
        setMontante={setMontante}

        subCarrinho={subCarrinho}
      />

    </MainContainer>
  )
}
