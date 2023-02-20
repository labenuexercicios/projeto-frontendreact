import React from "react";
import { Card, ImageCard, TextCard, AddCart} from "./styled.";

export function ProductCard(){
    return(
        <Card>
            <ImageCard src="" alt="" />
            <TextCard>Produto</TextCard>
            <TextCard>R$ 200</TextCard>
            <AddCart>Adicionar ao Carrinho</AddCart>
        </Card>
    )
}