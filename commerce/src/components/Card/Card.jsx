import React from "react";
import { CardBox, CardImg, CardButton } from "./style";

export default function Card(props) {
  return(
    <CardBox>
      <h3>{props.name}</h3>
      <CardImg src={props.imageUrl}/>
      <h3>Preço: R$ {props.price.toFixed(2)}</h3>

      <CardButton onClick={() => props.addProd(props)}>Adicionar ao carrinho</CardButton>
    </CardBox>
  )
}