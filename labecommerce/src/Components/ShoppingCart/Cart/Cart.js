import React from 'react';
import Items from '../Items/Items';
import {
  CartContainer,
  TotalValue
} from './cartStyle';

const Cart = ({ cart, totalValue }) => {
  return (
    <CartContainer>
      <h2>Carrinho</h2>
      {cart.length > 0 ? (
        <>
          <Items cart={cart} />
          <TotalValue>Total: R$ {totalValue.toFixed(2)}</TotalValue>
        </>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </CartContainer>
  );
};

export default Cart;
