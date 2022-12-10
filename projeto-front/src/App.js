
import { useState } from "react";
import TelaProduto from "./telas/produtos/telaProduto";
import TelaCarrinho from "./telas/Carrinho/TelaCarrinho";
import Header from "./componentes/header/Heade";
import { BodyContainer } from "./componentes/Body/Body.styled";
import Footer from "./componentes/Footer";

function App() {

  const [activeScreen, setActiveScreen] = useState("TelaProduto")

  const [carrinho, setCarrinho] = useState([])

  






  const adicionaCarrinho = (novoProduto) => {
    const novoCarrinho = [...carrinho]

    const produtoCarrinho = novoCarrinho.find((produtoCarrinho) => produtoCarrinho.id === novoProduto.id
    )
    if (!produtoCarrinho) {
      const produtoAdicionado = { ...novoProduto, quantity: 1, }
      novoCarrinho.push(produtoAdicionado)
    } else (
      (produtoCarrinho.quantity++)
    )

    setCarrinho(novoCarrinho)
  }

  const removerProduto = (excluir) => {
    const removerItem = [...carrinho]
    const index = removerItem.indexOf(excluir) // indexOf faz a varredura do parametro  dado se não tiver ele retorna -1

    if (index > -1) {
      removerItem.splice(index, 1)
      setCarrinho(removerItem)
    }
  }

  const alternaTelaProduto = () => {
    setActiveScreen("TelaProduto")
  }


  const alternaTelaCarrinho = () => {
    setActiveScreen("TelaCarrinho")
  }

  const RenderTela = () => {
    switch (activeScreen) {
      case "TelaProduto":
        return <TelaProduto
          adicionaCarrinho={adicionaCarrinho}
        />
      case "TelaCarrinho":
        return <TelaCarrinho
          removerProduto={removerProduto}
          carrinho={carrinho}
        />
      default:
        return <div>Tela não existe</div>

    }
  }


  return (
    <BodyContainer>
      <Header
        alternaTelaCarrinho={alternaTelaCarrinho}
        alternaTelaProduto={alternaTelaProduto}
        ItensNoCarrinho={carrinho.length}
        
      />
     

      {RenderTela()}
      <Footer />
    </BodyContainer>
  )
}

export default App;
