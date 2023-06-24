import React from 'react'
import { CartStyles } from './CartStyle'

export default function Cart() {
  return (
    <CartStyles>
      <h2>Cart</h2>
      <div>
        <p>x0</p>
        <p>Nome do Produto</p>
        <button>Remover</button>
      </div>
      <p>Valor Total: 0</p>
    </CartStyles>

  )
}
