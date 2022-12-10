import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./footer/Footer";
import TelaCarrinho from "./Telas/carrinho/TelaCarrinho";
import TelaProduto from "./Telas/produtos/TelaProduto";

function App() {

  const [telaAtiva, setTelaAtiva] = useState("TelaProduto")
  const [carrinho, setCarrinho] = useState([])

  const alternarTelaProduto = () => {
    setTelaAtiva("TelaProduto")
  }
  const alternarTelaCarrinho = () => {
    setTelaAtiva("TelaCarrinho")
  }


  //Guardar no localStorage e add no carrinho
  const adicionarCarrinho = (novoProduto) => {
    const novoCarrinho = [...carrinho]

    const guardarProduto = JSON.stringify(novoCarrinho) //vai transformar todos os produtos em string para poder armazenar no localstorage
    
    const procurarProdutos= novoCarrinho.find((produtoNoCarrinho) =>produtoNoCarrinho.id===novoProduto.id)
    if (!procurarProdutos){
      const produtoNovoAdicionado= {...novoProduto, quantidade: 1}

      novoCarrinho.push(produtoNovoAdicionado)

    }else{
      procurarProdutos.quantidade ++
    }

    setCarrinho(novoCarrinho)
    
    localStorage.setItem("localSalvo", guardarProduto)// criei localSalvo para guardar os produtos que transformei em string

  }

  //função para remover do carrinho
  const removerProduto = (excluirProduto) => {
    const removerItem = [...carrinho]
    const index = removerItem.indexOf(excluirProduto) //indexOf ele faz a varredura no parametro dado e se não tiver retorna -1.
    if (index > -1) {
      removerItem.splice(index, 1) //splice remove

      const guardarProduto = JSON.stringify(removerItem)
      
      localStorage.setItem("localSalvo", guardarProduto)
      setCarrinho(removerItem)
    }

  }
    const produtoEstadoInicial = () => {
      if (localStorage.getItem("localSalvo")) {
        const salvarProdutos = localStorage.getItem("localSalvo")
        const retornarProdutoArray = JSON.parse(salvarProdutos)
        setCarrinho(retornarProdutoArray)
      }
    }

    useEffect(() => {
      produtoEstadoInicial()
    }, [])

  const renderizarTela = () => {
    switch (telaAtiva) {
      case "TelaProduto":
        return <TelaProduto adicionarCarrinho={adicionarCarrinho}

        />

      case "TelaCarrinho":
        return <TelaCarrinho carrinho={carrinho}
          removerProduto={removerProduto}
        />

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

      {renderizarTela()}
      <Footer/>
    </>

  )

}

export default App;
