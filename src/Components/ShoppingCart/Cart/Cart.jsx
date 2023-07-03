import React from 'react';
import { ShoppingCartContainer, CartListContainer, CartTitle, CartTotal, CartIcon, CartCheckout } from './CartStyle';
import Items from '../Items/Items';
import asteroidsImage from '../../img/asteroids.jpg';
import cartIconImage from '../../img/cart.png';
import cartCheckoutImage from '../../img/cart-checkout.png';

export default function Cart(props) {
  const { cart, onRemoveProductFromCart, onCheckoutClick, showAlert } = props;

  const sortedCart = cart.slice().sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const getTotalValue = () => {
    let totalValue = 0;

    for (let product of sortedCart) {
      if (product.value && product.quantity) {
        totalValue += product.value * product.quantity;
      }
    }

    return totalValue;
  };

  const formattedTotal = getTotalValue().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleCheckoutClick = () => {
    if (sortedCart.length > 0) {
      onCheckoutClick();
    }
  };

  return (
    <ShoppingCartContainer style={{ backgroundImage: `url(${asteroidsImage})` }}>
      <CartTitle>
        <div>
          <h3>
            Carrinho
            <CartIcon src={cartIconImage} alt="Cart Icon" />
          </h3>
        </div>
      </CartTitle>
      <CartListContainer>
        {sortedCart.map((product) => (
          <Items
            key={product.id}
            cartItem={product}
            onRemoveProductFromCart={onRemoveProductFromCart}
          />
        ))}
      </CartListContainer>
      <CartTotal>
        <div>
          <h4>Total: {formattedTotal}</h4>
          <CartCheckout
            src={cartCheckoutImage}
            alt="Cart Checkout"
            onClick={handleCheckoutClick}
            disabled={sortedCart.length === 0}
            showAlert={showAlert}
          />
        </div>
        <div>
          <h4>Finalizar Compra</h4>
        </div>
      </CartTotal>
    </ShoppingCartContainer>
  );
}
