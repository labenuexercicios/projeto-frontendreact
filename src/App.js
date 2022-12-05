import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header"
import { useState } from "react";
import { ProdutoCard } from "./components/ProdutoCard/ProdutoCard";
import { Carrinho } from "./components/Carrinho/Carrinho";

function App() {
  const [tela, setTela] = useState("home")
  const [carrinho, setCarrinho] = useState([])

  const adiconarCarrinho = (produto)=>{
    const novoCarrinho = [...carrinho]
      novoCarrinho.push(produto)

  setCarrinho(novoCarrinho)
  }
  
  switch (tela) {
    case "home":
      return (
        <>
          <Header 
          setTela={setTela}/>
          <ProdutoCard
          adiconarCarrinho={adiconarCarrinho}/>
          <Footer />
        </>
      )
    case "car":
      return (
        <>
          <Header tela={tela} setTela={setTela}/>
          <Carrinho carrinho={carrinho}/>
          <Footer />
        </>
      )
    default:
      return (
        <>
          <Header 
          tela={tela} 
          setTela={setTela}/>
          <ProdutoCard
          adiconarCarrinho={adiconarCarrinho}/>
          <Footer />
        </>
      )
  }
}

export default App;
