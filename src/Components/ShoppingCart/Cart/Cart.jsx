import React from 'react'
import Items from '../Items/Items'
import { CartaoStyle, TituloCart } from "./CartStyle";


function Cart() {
  return (
    <CartaoStyle>
      <TituloCart>CART</TituloCart>
      <Items />
      <p>Valor total:</p>
    </CartaoStyle>
  )
}

export default Cart