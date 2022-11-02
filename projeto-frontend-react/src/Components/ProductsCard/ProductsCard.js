import React from "react";
import { Card } from "./styles";


export function ProductsCard() {
    return (
        <Card>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="imagem produto"></img>
            <h4>Título</h4>
            <p>Preço: </p>
            <button type="submit">Adicionar ao carrinho</button>
        </Card>
    )
}