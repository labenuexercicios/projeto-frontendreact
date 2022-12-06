import React from "react";
import Product from '../Produtos/Product'
import Buscas from '../Buscas/Buscas'
import Filtros from "../Filtros/Filtros"
import { MainContainer, Produtos } from './styles'
import { useState, useEffect } from "react"
import Carrinho from '../Carrinho/Carrinho'


export default function Main(props) {
  const { products } = props
  const [busca, setBusca] = useState("")
  const [precoMin, setPrecoMin] = useState(-Infinity)
  const [precoMax, setPrecoMax] = useState(Infinity)
  const [ordenacao, setOrdenacao] = useState("nome")
  const [crescente, setCrescente] = useState("cresce")
  const [cartItems, setCartItems] = useState([]);


  const onAdd = (product) => {
    const novoCarrinho = [...cartItems]

    const produtoNovo = novoCarrinho.find((novoItem) => novoItem.id === product.id)
    if (!produtoNovo) {
      const novoProduto = { ...product, qtd: 1 }
      novoCarrinho.push(novoProduto)
    } else {
      produtoNovo.qtd++
    }
    const virarString = JSON.stringify(novoCarrinho)
    localStorage.setItem("local", virarString)
    setCartItems(novoCarrinho)
  }

  const onRemove = (itemCarrinho) => {
    const novoCarrinho = [...cartItems]

    const produtoNovo = novoCarrinho.find(
      (novoItem) => novoItem.id === itemCarrinho.id
    )
    if (produtoNovo.qtd > 1) {
      produtoNovo.qtd--
    }
    const virarString = JSON.stringify(novoCarrinho)
    localStorage.setItem("local", virarString)
    setCartItems(novoCarrinho)
  }


  const onRemoveTotal = (itemCarrinho) => {

    const filtroDelete = cartItems.filter(
      (item) => item.id !== itemCarrinho.id)
    const virarString = JSON.stringify(filtroDelete)
    localStorage.setItem("local", virarString)
    setCartItems(filtroDelete)
  }

  const consultarItem = () => {
    if (localStorage.getItem("local")) {
      const armazenarItem = localStorage.getItem("local")
      const pegarString = JSON.parse(armazenarItem);
      setCartItems(pegarString)
    }
  }

  useEffect(() => {
    consultarItem()
  }, [])

  return (

    <MainContainer>
      <div>
        <h2 className="produtos">Produtos
          <Buscas
            busca={busca}
            setBusca={setBusca}
          /></h2>
      </div>
      <h2 className="filtro">Filtros</h2>
      <Carrinho
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onRemoveTotal={onRemoveTotal}

      >
      </Carrinho>
      <Filtros
        precoMin={precoMin}
        setPrecoMin={setPrecoMin}
        precoMax={precoMax}
        setPrecoMax={setPrecoMax}
        ordenacao={ordenacao}
        setOrdenacao={setOrdenacao}
        crescente={crescente}
        setCrescente={setCrescente}
      >
      </Filtros>
      <Produtos>
        {products
          .filter((product) => {
            return product.nome.toLowerCase().includes(busca.toLowerCase()) || product.fabricante.toLowerCase().includes(busca.toLowerCase())
          })
          .filter((product) => {
            return product.preco >= precoMin || precoMin === ""
          })
          .filter((product) => {
            return product.preco <= precoMax || precoMax === ""
          })
          .sort((currentJob, nextJob) => {
            switch (ordenacao) {
              case "preco":
                return currentJob.preco - nextJob.preco
              case "fabricante":
                return currentJob.fabricante.localeCompare(nextJob.fabricante)
              case "empuxo":
                return currentJob.empuxo - nextJob.empuxo
              default:
                return currentJob.nome.localeCompare(nextJob.nome)
            }
          })
          .sort(() => {
            if (crescente === "cresce") {
              return 0
            } else {
              return -1
            }
          })
          .map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
      </Produtos>

    </MainContainer>
  );
}
