import React, { createContext, useContext, useEffect, useState } from 'react'
import Items from './Items/Items'
import { CartStyle , Lista, Button } from './cartStyle'


const Cart = ( {cart, setCart, amount, setAmount} ) => {
  
  useEffect (() => {
    // Renderiza o total de compras do carrinho sempre que o carrinho altera
    const parsedCart = JSON.parse(JSON.stringify(cart))
    const newTotalPrice = parsedCart.reduce((total, item) => total + item.price * item.amount, 0);
    setAmount(newTotalPrice.toFixed(2));

  }, [cart]);

  const clearCart = () => {
    setCart([])
  }

  const removerItem = (produto) => {
    const ProductToDelete = cart
    .find((item) => produto.id === item.id)
    
    if(ProductToDelete.amount > 1) {
      const newCart = cart.map((item) => {
        if(item.id === produto.id){
          return {...ProductToDelete, amount:ProductToDelete.amount-1}
        } else {
          return item
        }
      })
      setCart(newCart)

    } else {
      const newCart = cart.filter((item) => {
        return item.id !== produto.id
      })
      setCart(newCart)
    }
  }

  return (
    <CartStyle>
        <h4><i class="fa fa-shopping-cart" aria-hidden="true"></i>Carrinho</h4>
      <Lista>
  
        <Items 
        cart={cart}
        removerItem={removerItem}/>

        
      </Lista>
      <div>
          <h4>Total: R$ {amount}</h4>
          <Button onClick={clearCart}><i class="fa fa-trash-o" aria-hidden="true"/></Button>
      </div>
        
    </CartStyle>
  )
}

export default Cart
