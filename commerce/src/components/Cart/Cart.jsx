import React from 'react'
import {NavSection} from './style'

export default function Cart(props) {
  return(
    <NavSection>
      <h2>Carrinho de compras</h2>

      {props.carrinho.length === 0 ? <p>O carrinho está vazio</p> : <p>produtos</p>}
    </NavSection>
  )
}