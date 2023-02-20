import React from "react";
import { Card, ImageCard, TextCard, AddCart} from "./styled.";

export function ProductCard({ product }){
    return(
        <Card>  
            <ImageCard src={product.imageUrl} alt={product.name} />
            <TextCard>{product.name}</TextCard>
            <TextCard>{product.value}</TextCard>
            <AddCart>Adicionar ao Carrinho</AddCart>
        </Card>
    )
}