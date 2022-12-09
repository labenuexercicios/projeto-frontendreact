import React from 'react'
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
    ContaSoma,
    ImgRemover,
    SpanRemove
} from './styled'
import aumentar from "../../assets/aumentar.png"
import diminuir from "../../assets/diminuir.png"
import remover from "../../assets/remover.png"

export const Carrinho = ({ carrinho, soma, aumentarQuantidade, diminuirQuantidade, removerDoCarrinho, salvar }) => {
    return (
        <MainContainer>
            <SectionContainer>
                {carrinho.map((produto) => {
                    return (
                        <Card onLoad={salvar} key={produto.id}>
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
                                    {produto.quantidade > 1 ? <button onClick={() => diminuirQuantidade(produto)}><img src={diminuir} alt="imagem diminuir" /></button> : <SpanRemove><button onClick={() => removerDoCarrinho(produto)}><ImgRemover src={remover} alt="remover"></ImgRemover></button></SpanRemove>}
                                </SpanBotao>
                                <span>
                                    <Quant>x{produto.quantidade}</Quant>
                                </span>
                                <SpanBotao>
                                    <button onClick={() => aumentarQuantidade(produto)}><img src={aumentar} alt="imagem aumentar" /></button>
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
                            return <ContaSoma key={produto.id}>
                                <span>{produto.nome}</span>
                                <br></br>
                                <span>R${produto.preco.toFixed(2)}</span>
                            </ContaSoma>
                        })}
                    </div>
                    <div>
                        <TituloSoma>Total A pagar</TituloSoma>
                        <ContaSoma>R${soma ? soma.toFixed(2) : 0}</ContaSoma>
                    </div>
                </div>
            </SectionSoma>
        </MainContainer>
    )
}
