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
      <CartIcon src='http://clipart.coolclips.com/480/vectors/tf05275/CoolClips_vc047305.png'></CartIcon>
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
