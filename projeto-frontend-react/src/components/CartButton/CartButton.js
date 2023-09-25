import React from "react";
import {CartButtonContainer} from "./CartButtonStyle";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function CartButton() {
  return (
    <>
      <CartButtonContainer type="button" >
        <AiOutlineShoppingCart />
        <span className="cart-status">1</span>
      </CartButtonContainer>
    </>
  );
}

export default CartButton;
