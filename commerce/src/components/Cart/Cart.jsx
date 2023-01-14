import React from 'react'
import {NavSection} from './style'
import CartItem from '../CartItem/style'

export default function Cart(props) {

  const {carrinho} = props

  return(
    <NavSection>
      <h2>Carrinho de compras</h2>

      {props.carrinho.length === 0 ? <p>O carrinho está vazio</p> : carrinho.map(e => <CartItem />)}
    </NavSection>
  )
}