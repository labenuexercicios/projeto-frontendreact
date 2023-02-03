import { Home } from "./Componentes/ListaProdutos/Home/Home"
import { Filtros } from "./Componentes/Filtros/Filtros"
import { Carrinho } from "./Componentes/CarrinhoCompras/Carrinho/Carrinho"
import styled, { createGlobalStyle } from "styled-components";
import {listaProdutos} from "./assets/listaProdutos"

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

  return(
    
    <MainContainer>
      <GlobalStyled />
      <Filtros />
      <Home listaProdutos={listaProdutos}/>
      <Carrinho />
    </MainContainer>
  )
}
