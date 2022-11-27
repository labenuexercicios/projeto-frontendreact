import React from 'react'
import { ContainerCart } from './CartPage.styled'
import { CardCart } from '../../components/CardCart/CardCart'

const CartPage = (props) => {

  const {camisetas} = props

  return (
    <ContainerCart>
      {camisetas
      .map ((camiseta) => {
        return <CardCart key={camiseta.id} camiseta={camiseta} />
      })}
    </ContainerCart>
  )
}

export default CartPage