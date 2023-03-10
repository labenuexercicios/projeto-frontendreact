import React from "react";
import { Div2, Button, Img, H2, P } from "./styled";

const ProductCard = (props) => {

  return (

    <Div2>
      <H2>{props.product.nome}</H2>
      <P>{props.product.finalPrice ? 
      props.product.finalPrice : "R$ " + props.product.preco}</P>
      <Img src={props.product.img} />
      <Button onClick={() => {
        props.handleAddCard(props.product)
      }}>Comprar</Button>
    </Div2>

  )
}


export default ProductCard;