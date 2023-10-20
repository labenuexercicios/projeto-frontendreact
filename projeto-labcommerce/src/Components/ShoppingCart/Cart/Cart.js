// Cart.js

import { CartContainer } from "./CartStyle";
import Items from "../Items/Items";
import { useState } from "react";

function Cart(props) {
  const removeFromCart = (productId) => {
    const updatedCart = props.cartProducts.filter((product) => product.id !== productId);
    props.setCartProducts(updatedCart);
  };

  const clearCart = () => {
    props.setCartProducts([]);
  };

  function calculateTotalPrice(cartProducts) {
    return cartProducts.reduce((total, product) => total + product.totalPrice, 0);
  }

  const totalCartPrice = calculateTotalPrice(props.cartProducts);

  return (
    <CartContainer>
      <h2>Cart</h2>
      <p><b>Products:</b></p>
      <Items
        cartProducts={props.cartProducts}
        removeFromCart={removeFromCart}
      />
      <button onClick={clearCart}>Clear Cart</button>
      <p><b>Total price:</b> US${totalCartPrice.toFixed(2)}</p>
    </CartContainer>
  );
}

export default Cart;
