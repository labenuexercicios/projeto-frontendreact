import { useState } from "react"
import { ContainerCard, Image, Button, Paragraph } from "./ProductCardStyle"
import cart from "../../../images/cart.png"


export default function ProductCard(props) {

    return (
        <ContainerCard>
            <Image src={props.product.imageUrl} alt="product" />
            <Paragraph>{props.product.name}</Paragraph>
            <Paragraph>R${props.product.value.toFixed(2)}</Paragraph>
            <Button onClick={()=>(props.addItemCart())}>
                <img src={cart} alt="" width="35px" />
                </Button>
        </ContainerCard>
    )
}