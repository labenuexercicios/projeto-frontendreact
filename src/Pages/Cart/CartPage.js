import React from 'react'
import { ContainerCart} from './CartPage.styled'
import { CardCart } from '../../components/CardCart/CardCart'

const CartPage = (props) => {

  const {cart,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    removeProductCart
  } = props



  return (
    <ContainerCart>
      {cart
      .map ((camiseta) => {
        return <div><CardCart key={camiseta.id} 
        camiseta={camiseta} 
        increaseQuantityInCart={increaseQuantityInCart}
        decreaseQuantityInCart={decreaseQuantityInCart}
        removeProductCart={removeProductCart}
        /><hr/></div>
      })}
      
    </ContainerCart>
  )
}

export default CartPage