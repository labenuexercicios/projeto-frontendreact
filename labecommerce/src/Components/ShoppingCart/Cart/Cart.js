import React from 'react'
import { CartStyle } from './cartStyle'

export default function Cart() {
    return (
        <CartStyle>
            <h2>Cart</h2> 
            <p>x0 Nome do produto</p>
            <button>Remover</button>
            <p>Valor Total<input></input></p>
        </CartStyle>
    )
}
