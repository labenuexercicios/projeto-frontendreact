import React from "react"
import { ProductContainer, SuitImage, ProductTitle, Price, BuyButton } from "./styled"

export function ProductCard({addProduct, product}){


    return(
        <ProductContainer key={product.key}>
        <SuitImage src={product.image} alt={product.name}/>
        <ProductTitle>{product.name}</ProductTitle>
        <Price>R$ {product.price}</Price>
        <BuyButton onClick={() => addProduct(product)}>Comprar</BuyButton>
        </ProductContainer>
    )
}