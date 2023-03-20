import React from "react";
import { DivCard, Button, H4 } from "./productCardStyle"


export default function ProductCard(props){


    return(
        <DivCard>
            {props.product.imageUrl}
            <H4>{props.product.name}</H4>
            <H4> R$ {props.product.value.toFixed(2)}</H4>
            <Button>ADICIONAR</Button>
        </DivCard>
    )
}