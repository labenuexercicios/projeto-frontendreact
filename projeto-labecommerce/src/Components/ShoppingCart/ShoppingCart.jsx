import React from 'react'
import Itens from './Itens/Itens'
import styled from 'styled-components'
import { CartContainer } from './ShoppingCartStyle'

const ShoppingCart = (props) => {
  // console.log(props)

 

  return (
    <CartContainer>
        <h3>Shopping Cart</h3>
        <Itens />
    </CartContainer>
  )
}

export default ShoppingCart