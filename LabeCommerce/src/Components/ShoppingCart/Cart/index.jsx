import React from 'react'
import { CartContainer } from './style.jsx'
import Items from '../Items'

export default function Cart() {
  return (


    <CartContainer>
      <h1>Cart</h1>

      <Items/>

      <h4>Valor Total: 0</h4>

    </CartContainer>
  )
}
