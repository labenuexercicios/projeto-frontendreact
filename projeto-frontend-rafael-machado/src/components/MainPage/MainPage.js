import React, { useState, useEffect } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


//Dados mokados
import produtosList from "../../produtos/produtos.json"
import { Card, Container, ContainerCard } from "./styleMainPage"
import Filtros from "../Filtros/Filtros"

const MainPage = ({ mudarTela, carrinho, setCarrinho }) => {

    const [produtosFiltrados] = useState(produtosList)
    const [pesquisa, setPesquisa] = useState("")
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [sortingParameter, setSortingParameter] = useState("nome")
    const [order, setOrder] = useState("asc")

    const onChangeCarrinho = (event) => {
        setCarrinho(event.target.value)
    }


    //função para adicionar produto ao carrinho
   function addProdutosCarrinho(produto) {
        const copyCarrinho = [...carrinho];
        const produtoAdd = produto
        const produtoExistente = copyCarrinho.find((produto) => {
            return produto.id === produtoAdd.id
        })
        if (produtoExistente) {
            produtoExistente.quantidade++
            produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
        } else {
            copyCarrinho.push({ ...produtoAdd, quantidade: 1, precototal: produtoAdd.preco })
        }

        setCarrinho(copyCarrinho)
    }

    //função para excluir produto do carrinho
    const excluiProdutoCarrinho = (produto) => {
        const carrinhoDois = [...carrinho]
        for (let i = 0; i < carrinhoDois.length; i++) {
            if (carrinhoDois[i].id === produto.id) {
                carrinhoDois[i].quantidade = carrinhoDois[i].quantidade - 1
                carrinhoDois[i].precototal = carrinhoDois[i].precototal - carrinhoDois[i].preco
            }
            const buscaItem = carrinhoDois.filter((item) => item.quantidade > 0)
            setCarrinho(buscaItem)
        }
    }

    useEffect(() => {
        if (carrinho.length > 0) {
          const listaStringCarrinho = JSON.stringify(carrinho)
          localStorage.setItem("carrinho", listaStringCarrinho)
        }
      }, [carrinho])

   
    useEffect(() => {
        const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
        if (novoCarrinho !== null) {
            setCarrinho(novoCarrinho)
        }
    }, [])

    return (
        <>
            <Container>
                <Header 
                 pesquisa={pesquisa}
                 setPesquisa={setPesquisa}
                 carrinho={carrinho}
                 mudarTela={mudarTela}
                />
                <Filtros 
                 minPrice={minPrice}
                 maxPrice={maxPrice}
                 sortingParameter={sortingParameter}
                 order={order}
                 setMinPrice={setMinPrice}
                 setMaxPrice={setMaxPrice}
                 setSortingParameter={setSortingParameter}
                 setOrder={setOrder}
                
                />
                <ContainerCard>
                    {produtosFiltrados
                    .filter((produto) => {
                        return produto.nome.includes(pesquisa)
                    })

                    .filter((produto) => {
                        return produto.preco >= minPrice || minPrice === ""
                    })

                    .filter((produto) => {
                        return produto.preco <= maxPrice || maxPrice === ""
                    })

                    .sort((currentProduto, nextProduto) => {
                        switch (sortingParameter) {
                            case "preco":
                                return currentProduto.preco - nextProduto.preco
                            case "data":
                                return new Date(currentProduto.data) - new Date(nextProduto.data)
                            default:
                                return currentProduto.nome.localeCompare(nextProduto.nome)
                        }
                    })
                    .sort(() => {
                        if (order === "asc") {
                            return 0
                        } else {
                            return -1
                        }
                    })
                        .map((produto, index) => {
                            return (
                                <Card key={index}>
                                    <div>
                                        <img src={produto.imagem} alt="Produto-Loja" />
                                    </div>
                                    <div>
                                        <span>{produto.nome}</span><br />
                                        <h3>R$ {produto.preco.toFixed(2)}</h3><br />
                                        <h4>{produto.data}</h4>
                                        <button onClick={() => addProdutosCarrinho(produto)} onChange={onChangeCarrinho}>Adicionar no carrinho</button>
                                        <button onClick={() => excluiProdutoCarrinho(produto)} onChange={onChangeCarrinho} >Remover do Carrinho</button>
                                    </div>
                                </Card>
                            )
                        })}

                </ContainerCard>
                <Footer />
            </Container>
        </>
    )
}

export default MainPage