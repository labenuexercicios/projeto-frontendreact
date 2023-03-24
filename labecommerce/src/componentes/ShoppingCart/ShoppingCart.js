import React from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import { CartIcon, CartListContainer, ShoppingCartContainer } from './styledCart'


export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for(let product of this.props.productsInCart) {
      totalValue += product.price * product.quantity
    }

    return totalValue
  }

  render() {
    return <ShoppingCartContainer>
      <CartIcon src='https://www.pikpng.com/pngl/m/463-4637195_carrinho-de-compras-green-shopping-cart-vector-clipart.png'></CartIcon>
      <CartListContainer>
        {this.props.productsInCart.map((product) => {
          return <ShoppingCartItem 
                    cartItem={product} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </CartListContainer>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </ShoppingCartContainer>
  }
}
