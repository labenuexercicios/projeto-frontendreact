import React from "react";
import { BoxInsideCard, ImageBox, ImageStyle, InfoBox } from "./ProductCardStyle";

export const ProductCard = () => {
    return (
        <BoxInsideCard>
        <ImageBox>
        <ImageStyle src={"https://picsum.photos/200/300"}/>
        </ImageBox>
        <InfoBox>
        <h3>Produto:</h3>
        <h3>Valor:</h3>
        <button>Adicionar ao carrinho</button>
        </InfoBox>
        </BoxInsideCard>
    
    )
}

