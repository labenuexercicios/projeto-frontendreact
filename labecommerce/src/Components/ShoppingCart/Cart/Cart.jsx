import React from "react";
import Items from "../Items/Items";
import { CartDiv } from "./CartStyle";

function Cart({ amount, setAmount, cart, setCart }) {
  return (
    <CartDiv>
      <Items />
    </CartDiv>
  );
}

export default Cart;
