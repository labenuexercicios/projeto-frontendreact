import React, { useState } from 'react'
import { Card } from '../ProdutoCard/styled'
import {
    MainContainer,
    SectionImg,
    SectionThings,
    SectionContainer,
    SpanBotao,
    AddRemove,
    TituloSoma,
    SectionSoma,
    Quant,
    ContaSoma
} from './styled'
import aumentar from "../../assets/aumentar.png"
import diminuir from "../../assets/diminuir.png"

export const Carrinho = ({ carrinho }) => {

    const [soma, setSoma] = useState("")



    const calcular = carrinho.reduce((a, b) => a.preco + b.preco)
    console.log(calcular)

    return (
        <MainContainer>
            <SectionContainer>
                {carrinho.map((produto) => {
                    return (
                        <Card key={produto.id}>
                            <div>
                                <SectionImg src={require("../../assets/" + produto.imagem)} alt={produto.alt} />
                            </div>
                            <div className="section-name">
                                <span>
                                    <h1 >{produto.nome}</h1>
                                </span>
                            </div>
                            <SectionThings >
                                <span className="section-things">
                                    {`Preço: R$${produto.preco.toFixed(2)}`}
                                </span>
                            </SectionThings>
                            <AddRemove>
                                <SpanBotao>
                                    <button><img src={aumentar} alt="imagem aumentar" /></button>
                                </SpanBotao>
                                <span>
                                    <Quant>Quantidade</Quant>
                                </span>
                                <SpanBotao>
                                    <button><img src={diminuir} alt="imagem diminuir" /></button>
                                </SpanBotao>
                            </AddRemove>
                        </Card>
                    )
                })}
            </SectionContainer>
            <SectionSoma>
                <div>
                    <div>
                        {carrinho.map((produto) => {
                            return<ContaSoma key={produto.id}>
                                <p>{produto.nome}</p>
                                <p>R${produto.preco.toFixed(2)}</p>
                            </ContaSoma>
                        })}
                    </div>
                    <div>
                        <TituloSoma>Total A pagar</TituloSoma>
                        <ContaSoma>R${calcular}</ContaSoma>
                        <button>calcular</button>
                    </div>
                </div>
            </SectionSoma>
        </MainContainer>
    )
}
