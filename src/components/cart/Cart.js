import React from "react";
import { CartItem, TotalValue } from "./styled";

function Cart({ cartList, setCartList }) {
  let totalValue = 0;

  const removeGame = (item) => {
    const findGameFromCart = cartList.filter((i) => i !== item);
    setCartList(findGameFromCart);
  };

  const totalValueSum = () => {
    for (let i = 0; i < cartList.length; i++) {
      totalValue += parseInt(cartList[i].totalprice);
    }
    return;
  };

  totalValueSum();

  return (
    <>
      {cartList.map((item) => {
        return (
          <CartItem key={item.id}>
            <div>
              <p>{item.quantity}x</p>
              <p>{item.name}</p>
              <p>R$ {item.totalprice}</p>
              <button onClick={() => removeGame(item)}>X</button>
            </div>
          </CartItem>
        );
      })}
      <TotalValue>
        <span>Valor Total: R$ {totalValue}</span>
      </TotalValue>
    </>
  );
}

export default Cart;
