import React from 'react'
import Itens from './Itens/Itens'
import styled from 'styled-components'

const ShoppingCart = () => {
  const CartContainer = styled.div`
    border: 1px solid black;
    width: 20vw;

  `

  return (
    <CartContainer>
        <h3>Shopping Cart</h3>
        <Itens />
    </CartContainer>
  )
}

export default ShoppingCart