import React from "react";
import { BoxImage, Button, CardBox, ProductImage, ProductInfoBox } from "./ProductCardStyle";


export default function ProductCard ({product}) {
    return(
        <CardBox>
            <BoxImage>
                <ProductImage src={product.imageUrl}/>
            </BoxImage>
            <ProductInfoBox>
                <p>{product.name}</p>
                <p>Preço: R${product.price}</p>
                <Button>Adicionar ao carrinho</Button>
            </ProductInfoBox>
        </CardBox>
    )
}