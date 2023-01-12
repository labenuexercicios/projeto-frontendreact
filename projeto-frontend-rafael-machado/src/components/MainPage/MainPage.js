import React, { useState } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


//Dados mokados
import produtosList from "../../produtos/produtos.json"
import { Card, Container, ContainerCard } from "./styleMainPage"
import Filtros from "../Filtros/Filtros"

const MainPage = () => {

    const [produtosFiltrados] = useState(produtosList)
    const [pesquisa, setPesquisa] = useState("")
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [sortingParameter, setSortingParameter] = useState("nome")
    const [order, setOrder] = useState("asc")

    return (
        <>
            <Container>
                <Header 
                 pesquisa={pesquisa}
                 setPesquisa={setPesquisa}
                 
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
                                        <button >Adicionar no carrinho</button>
                                        <button >Remover do Carrinho</button>
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