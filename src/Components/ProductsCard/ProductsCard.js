import React from "react";
import { Card } from "./styles";


export function ProductsCard(props) {
    //const [productsList] = props
    
    return (
        <Card>
            <img src="" alt="imagem produto"></img>
            <h4>Título</h4>
            <p>Preço: </p>
            <button type="submit">Adicionar ao carrinho</button>
        </Card>
    )
}