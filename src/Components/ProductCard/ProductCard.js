import React from "react";
import { Div, Button, Img } from "./styled";
//import cloro from "../Imagenes/cloro.PNG"

const ProductCard = (props) => {


  console.log(props.product.finalPrice)
  return (
    //  <Container>
    <Div>
      <h2>{props.product.nome}</h2>
      <p>{props.product.finalPrice ? props.product.finalPrice : props.product.preco}</p>
      <Img src={props.product.img} />
      <Button onClick={() => {
        props.handleAddCard(props.product)
        props.actualizarTotal()
      }}>Comprar</Button>
    </Div>
    //  </Container>
  )
}


export default ProductCard;