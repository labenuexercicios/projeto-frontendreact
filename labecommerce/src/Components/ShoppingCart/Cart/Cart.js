import React from 'react'
import{Carts} from './cartStyle'

const Cart = () => {
  return (
    <Carts>
      <h2>Cart</h2>
      <quantidade>x0</quantidade>
      <p>Nome do Produto <button>Remover</button></p>
      <p>Valor Total:0</p>
      
    </Carts>
  )
}

export default Cart
