import { useState } from "react"
import { ContainerCard, Image, Button, Paragraph } from "./ProductCardStyle"


export default function ProductCard(props) {

    return (
        <ContainerCard>
            <Image src={props.product.imageUrl} alt="product" />
            <Paragraph>{props.product.name}</Paragraph>
            <Paragraph>R${props.product.value}</Paragraph>
            <Button onClick={()=>(props.addItemCart())}>Adicionar ao Carrinho</Button>
        </ContainerCard>
    )
}