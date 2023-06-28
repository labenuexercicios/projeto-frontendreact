import React from 'react'
import Items from './Items/Items'
import { CartStyle , Lista } from './CartStyle'
import ProductList from '../../../assets/ProductList'

const Cart = ( {cart, setCart, amount, setAmount, renderCart, addToCart} ) => {
  
  

  

  return (
    <CartStyle>
      
      <Lista>
        <h4>Carrinho</h4>
        {renderCart}

        <h5>Total: {amount}</h5>
      </Lista>
        
    </CartStyle>
  )
}

export default Cart
