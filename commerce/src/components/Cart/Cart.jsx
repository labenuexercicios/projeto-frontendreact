import React from 'react'
import {NavSection} from './style'
import CartItem from '../CartItem/CartItem'

export default function Cart(props) {

  const {carrinho} = props

  let totalItem = 0
  carrinho.map(e=> totalItem += e.amount)
  let totalValor = 0
  carrinho.map(e=> totalValor += e.price * e.amount)

  return(
    <NavSection>
      <h2>Carrinho de compras</h2>

      {props.carrinho.length === 0
      ?
      <p>O carrinho está vazio</p>
      :
      carrinho.map(e => <CartItem key={e.id} item={e} removeProd={props.removeProd} carrinho={props.carrinho} />)}

      Total de produtos: {totalItem} <br />
      Total do carrinho: R$ {totalValor.toFixed(2)} <br />
    </NavSection>
  )
}