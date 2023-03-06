import React from "react";
import { Div1, H2, Button } from "./styled";


const Cart = (props) => {


  return (

    <Div1>
      <H2>Carrinho</H2>
      <H2>Valor Total: R$ {props.total}</H2>
      {props.carrito.map((producto) => (
        <div key={producto.id}>
          <H2>Nome {producto.nome}</H2>
          <H2>Preco
          R$ {producto.preco}</H2>
          <Button onClick={() => {
            props.handleDeleteProduct(producto.id)
         }}>Restar</Button>
          <H2>Cantidad: {producto.quantity}</H2>
        </div>
      ))}
    </Div1>

  )
}


export default Cart;