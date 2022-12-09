import React, { useState } from "react";
import { CartItem, TotalValue } from "./styled";

function Cart({ cartList, setCartList }) {
  let totalValue = 0;

  const removeGame = (item) => {
    const findGameFromCart = cartList.filter((i) => i !== item);
    setCartList(findGameFromCart);
  };

  const totalValueSom = () => {
    for (let i = 0; i < cartList.length; i++) {
      totalValue += cartList[i].totalprice;
    }
    return;
  };

  totalValueSom()

  return (
    <>
      {cartList.map((item) => {
        return (
          <CartItem key={item.id}>
            <div>
              <p>{item.quantity}x</p>
              <p>{item.name}</p>
              <p>R$ {item.totalprice}</p>
              <button onClick={() => removeGame(item)}>Remover</button>
            </div>
          </CartItem>
        );
      })}
      <TotalValue>
        <p>Valor Total: R$ {totalValue} </p>
      </TotalValue>
    </>
  );
}

export default Cart;
