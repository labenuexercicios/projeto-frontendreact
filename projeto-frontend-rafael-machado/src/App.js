import { GlobalStyled } from "./GlobalStyled";
import MainPage from "./components/MainPage/MainPage"
import { Container } from "./components/MainPage/styleMainPage";
import React, { useState } from "react"
import CarrinhoPage from "./components/CarrinhoPage/CarrinhoPage";
import PedidoFinalizadoPage from "./components/PedidoFinalizado/PedidoFinalizadoPage";




function App() {

  const [tela, setTela] = useState(1)
  const [carrinho, setCarrinho] = useState([])



  const mudarTela = (valor) => {
    setTela(valor)
  }

  const renderizaTela = () => {
    switch (tela) {
      case 1:
        return <MainPage carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela} />
      case 2:
        return <CarrinhoPage carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela} />
      case 3:
        return <PedidoFinalizadoPage carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela} />
      default:
        return <MainPage mudarTela={mudarTela} />


    }
  }

  return (
    <>
      <GlobalStyled />
      <Container>
        {renderizaTela()}
      </Container>
    </>
  );

}



export default App;



