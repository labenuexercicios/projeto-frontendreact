import React from "react";
import Items from "../Items/Items";
import { CartaoStyle, TituloCart } from "./CartStyle";

function Cart({ amount, setAmount, cart, setCart }) {
  return (
    <CartaoStyle>
      <TituloCart>CART</TituloCart>
      <Items />
      <p>Valor total:{cart} </p>
    </CartaoStyle>
  );
}

export default Cart;
