import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header"
import { useEffect, useState } from "react";
import { ProdutoCard } from "./components/ProdutoCard/ProdutoCard";
import { Carrinho } from "./components/Carrinho/Carrinho";

function App() {
  const [tela, setTela] = useState("home")
  let [carrinho, setCarrinho] = useState([])
  const [soma, setSoma] = useState("")

  const salvar = () =>{
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }

  const adiconarCarrinho = (produto) => {
    const novoCarrinho = [...carrinho]
    salvar()
    const encontrarProduto = novoCarrinho.find((produtoCarrinho) => produtoCarrinho.id === produto.id)

    if (!encontrarProduto) {
      const novoProduto = {
        ...produto,
        quantidade: 1
      }
      novoCarrinho.push(novoProduto)
    } else {
      encontrarProduto.quantidade++
    }
    
    const calcular = novoCarrinho.reduce((a, b) => b.preco * b.quantidade + a, 0)
    setSoma(calcular)
    setCarrinho(novoCarrinho)
  }

  const aumentarQuantidade = (produto) => {
    const novoCarrinho = [...carrinho]
    produto.quantidade++
    setCarrinho(novoCarrinho)
    const calcular = novoCarrinho.reduce((a, b) => b.preco * b.quantidade + a, 0)
    setSoma(calcular)
    salvar()
  }

  const diminuirQuantidade = (produto) => {
    const novoCarrinho = [...carrinho]
    produto.quantidade--
    setCarrinho(novoCarrinho)
    const calcular = novoCarrinho.reduce((a, b) => b.preco * b.quantidade + a, 0)
    setSoma(calcular)
    salvar()
  }

  const removerDoCarrinho = (produto) => {
    const novoCarrinho = [...carrinho]
    const encontrarIndex = novoCarrinho.findIndex((produtoCarrinho) => produtoCarrinho.id === produto.id)

    novoCarrinho.splice(encontrarIndex, 1)
    setCarrinho(novoCarrinho)
    salvar() 
    const calcular = novoCarrinho.reduce((a, b) => b.preco * b.quantidade + a, 0)
    setSoma(calcular)
  }

  useEffect(() =>{
    if(carrinho !== ""){
      const carrinhoObj = JSON.parse(localStorage.getItem("carrinho"))
      setCarrinho(carrinhoObj)
      const calcular = carrinhoObj.reduce((a, b) => b.preco * b.quantidade + a, 0)
      setSoma(calcular)
    }
  },[])

  switch (tela) {
    case "home":
      return (
        <>
          <Header
            setTela={setTela} />
          <ProdutoCard
            adiconarCarrinho={adiconarCarrinho} />
          <Footer />
        </>
      )
    case "car":
      return (
        <>
          <Header tela={tela} setTela={setTela} />
          <Carrinho
            carrinho={carrinho}
            soma={soma}
            aumentarQuantidade={aumentarQuantidade}
            diminuirQuantidade={diminuirQuantidade}
            removerDoCarrinho={removerDoCarrinho}
            salvar={salvar}
             />
          <Footer />
        </>
      )
    default:
      return (
        <>
          <Header
            tela={tela}
            setTela={setTela} />
          <ProdutoCard
            adiconarCarrinho={adiconarCarrinho} />
          <Footer />
        </>
      )
  }
}

export default App;
