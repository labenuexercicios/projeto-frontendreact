import React from "react";

import { ContainerProduto, ImagemCardProduto } from "./styles";


export default function CardProduto(props) {

const {imagem, nome, preco, botao, adicionarAoCarrinho, produto} = props





return( 
    <ContainerProduto>  
        <ImagemCardProduto src={imagem} alt="foto do produto"/>
        <p>{nome}</p>
        <p> R$ {preco}</p>
        {botao}
        <button onClick={()=>adicionarAoCarrinho(produto)} >Adicionar ao carrinho</button>

    </ContainerProduto>
)

}