import React from "react";
import { CardBox, CardImg, CardButton } from "./style";

export default function Card(props) {
  // console.log(props.addProd)
  return(
    <CardBox>
      <h3>{props.name}</h3>
      <CardImg src={props.img}/>
      <h3>Preço: R$ {props.preco.toFixed(2)}</h3>

      <CardButton onClick={() => props.addProd(props)}>Adicionar ao carrinho</CardButton>
    </CardBox>
  )
}