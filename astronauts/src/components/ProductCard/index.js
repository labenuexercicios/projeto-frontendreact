import React from "react"
import { ProductContainer, SuitImage, ProductTitle, Price, BuyButton } from "./styled"

export function ProductCard({product}){

    return(
        <ProductContainer>
        <SuitImage/>
        <ProductTitle>{product.name}</ProductTitle>
        <Price>{product.price}</Price>
        <BuyButton>Comprar</BuyButton>
        </ProductContainer>
    )
}