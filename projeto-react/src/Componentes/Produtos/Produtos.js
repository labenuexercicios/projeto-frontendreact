import React, { useState } from "react";
import { ContainerProduto } from "./style";

const Produtos = (props) => {

    return (
            <ContainerProduto>
                <img src={props.produto.imagem} alt={props.produto.alt}/>
                <h4>{props.produto.nome}</h4>
                <h3>R${props.produto.valor}0</h3>
                <button onClick={props.onClick}>ADICIONAR PRODUTO</button>
            </ContainerProduto>
    )
}

export default Produtos