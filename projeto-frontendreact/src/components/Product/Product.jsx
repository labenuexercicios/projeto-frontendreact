import React from "react";
import { Card, ImageCard, TextCard, AddCart} from "./styled";

export function Product({ product, handleAddToCart }){

   
    return(
        <Card>  
            <ImageCard src={product.imageUrl} alt={product.name} />
            <TextCard>{product.name}</TextCard>
            <TextCard>R$ {product.value}</TextCard>
            <AddCart onClick={() => handleAddToCart(product)} >Adicionar ao Carrinho</AddCart>
        </Card>
    )
}