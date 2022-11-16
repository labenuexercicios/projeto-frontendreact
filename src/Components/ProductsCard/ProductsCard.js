import React from "react";
import { Card } from "./styles";
import tshirt1 from "../../assets/tshirtBitocas.svg"



export function ProductsCard(props) {
    //const [productsList] = props
    
    return (
        <Card>
            <img src={tshirt1} alt="imagem produto"></img>
            <h4>Título</h4>
            <p>Preço: </p>
            <button type="submit">Adicionar ao carrinho</button>
        </Card>
    )
}