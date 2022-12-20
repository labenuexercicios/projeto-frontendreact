import React from "react";
import { CardProduto, ImagemProduto, TextoProduto, ButtonProduto } from "./Style";

export default function Produto (props) {
    return (
    <CardProduto>
        <ImagemProduto src={props.imagem}/>
        <TextoProduto>{props.nome}</TextoProduto>
        <TextoProduto>{"R$ " + props.preco + ",00"}</TextoProduto>
        <ButtonProduto>Adicionar ao Carrinho</ButtonProduto>
    </CardProduto>
    )
}
