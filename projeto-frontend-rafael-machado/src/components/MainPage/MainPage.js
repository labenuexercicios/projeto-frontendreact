import React, { useState } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


//Dados mokados
import produtosList from "../../produtos/produtos.json"
import { Card, Container, ContainerCard } from "./styleMainPage"

const MainPage = () => {

    const [produtosFiltrados] = useState(produtosList)

    return (
        <>
            <Container>
                <Header />
                <ContainerCard>
                    {produtosFiltrados
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