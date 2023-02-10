import React, { useState } from "react";
import { Div, H3, Button } from "./styled";


const Cart = (props) => {


  return (

    <Div>
      <H3>Carrito</H3>
      <H3>Valor Total:{props.total}</H3>
      {props.carrito.map((producto) => (
        <div key={producto.id}>
          <H3>Nome</H3>
          {producto.nome}
          <H3>Preco</H3>
          {producto.preco}
          <Button onClick={() => {
            props.handleDeleteProduct(producto.id)
            props.actualizarTotal()
          }}>Restar</Button>
          <H3>Cantidad: {producto.quantity}</H3>
        </div>
      ))}
    </Div>

  )
}


export default Cart;