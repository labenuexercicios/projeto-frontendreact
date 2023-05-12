import React from "react";
import { BoxInsideCard, ImageBox, ImageStyle, InfoBox } from "./ProductCardStyle";

export const ProductCard = ({produto}) => {

    return (
        <BoxInsideCard>
        <ImageBox>
        <ImageStyle src={produto.imageUrl}/>
        </ImageBox>
        <InfoBox>
        <h3>Produto: {produto.name}</h3>
        <h3>Valor: {produto.value}</h3>
        <button>Adicionar ao carrinho</button>
        </InfoBox>
        </BoxInsideCard>
    
    )
}

