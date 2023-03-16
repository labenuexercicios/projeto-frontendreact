import React from "react"
import { CardContainer, ButtunAdicionar, Photo } from "./ProductCardStyled"

export function ProductCard (props) {

console.log(props.productList)

    return (
        <CardContainer>
            <Photo src={props.productList.imageUrl} alt=""></Photo>
            <p>{props.productList.name}</p>
            <p>Valor: {props.productList.value}</p>
            <ButtunAdicionar>Adicionar ao Carrinho</ButtunAdicionar>
        </CardContainer>
    )
}

export default ProductCard