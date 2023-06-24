import React from 'react'
import Items from './Items/Items'
import { CartStyle , Lista } from './CartStyle'

const Cart = () => {
  return (
    <CartStyle>
      
      <Lista>
        <h4>Carrinho</h4>
        <Items />
        <Items />
        <Items />
        <Items />
        <h5>Total: </h5>
      </Lista>
        
    </CartStyle>
  )
}

export default Cart
