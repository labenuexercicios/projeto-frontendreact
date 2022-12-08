import React from "react";
import { Container, ComprasName, Compra,  ComprasPrice, ComprarButton, } from './styles'


export default function CardCompras(props) {
  const {compra, comprar} = props
    return (
        <Container>
       <div>
        <ComprasPrice>{`${compra.price}$`}</ComprasPrice>
        <ComprasName>{compra.name}</ComprasName>
      </div>
      <div>
        <Compra src={`${props.compra.url}`} alt="" />
        <ComprarButton onClick={()=> comprar(compra.id)}>Comprar</ComprarButton>
      </div>
        </Container>
    )

}
