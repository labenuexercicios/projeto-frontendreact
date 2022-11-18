import React from "react";
import { Card } from "./styles";


export function ProductsCard(props) {
    const {product} = props
   
    return (
        <Card>
            <img src={product.image} alt="imagem produto"></img>
            <span>{product.name}</span>
            <p>R$ {product.price}</p>
            <button>Adicionar ao carrinho</button>
        </Card>
    )
}