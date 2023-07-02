import React, { useEffect } from 'react'
import Items from './Items/Items'
import { CartStyle , Lista } from './CartStyle'


const Cart = ( {cart, setCart, amount, setAmount} ) => {
  
  useEffect (() => {
    // Renderiza o total de compras do carrinho sempre que o carrinho altera
    const parsedCart = JSON.parse(JSON.stringify(cart))
    const newTotalPrice = parsedCart.reduce((total, item) => total + item.price * item.amount, 0);
    setAmount(newTotalPrice.toFixed(2));

  }, [cart]);

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

        <h4>Total: R$ {amount}</h4>
      </Lista>
        
    </CartStyle>
  )
}

export default Cart
