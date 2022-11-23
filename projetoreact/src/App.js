import { useState } from "react";
import Header from "./components/Header/Header";
import TelaCarrinho from "./Telas/carrinho/TelaCarrinho";
import TelaProduto from "./Telas/produtos/TelaProduto";

function App() {

  const [telaAtiva, setTelaAtiva] = useState("TelaProduto")

  const alternarTelaProduto=  () => {
    setTelaAtiva("TelaProduto")
  }
  const alternarTelaCarrinho= () => {
    setTelaAtiva("TelaCarrinho")
  }
  

  const renderizarTela = () => {
    switch(telaAtiva) {
      case "TelaProduto":
        return <TelaProduto/>

      case "TelaCarrinho":
        return <TelaCarrinho/>

      default:
        return <div>Tela não existe</div>  

    }
  }

  return (

  <>
    <Header
    alternarTelaCarrinho={alternarTelaCarrinho}
    alternarTelaProduto={alternarTelaProduto}
    />

    {renderizarTela ()}
  </>
  
  )

  }

export default App;
