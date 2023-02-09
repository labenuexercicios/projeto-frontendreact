import { CardStyle } from "./ProductCardStyle"
import React from "react"


const ProductCard = (props) => {

    return (
        <>
            <CardStyle >
                <img src={props.imagem}/>
                <p>{props.name}</p>
                <p>{props.value}</p>
            </CardStyle>
        </>
    )
}

export default ProductCard