import React, { useEffect } from "react";
import Items from "../Items/Items";
import { CartDiv } from "./CartStyle";

function Cart({ amount, setAmount, cart, setCart }) {
  function removeItem(id) {
    cart.map((product) => {
      if (product.id === id && product.quantity >= 1) {
        product.quantity = product.quantity - 1;
        setCart([...cart]);
      }
      if (product.quantity === 0) {
        const newCart = cart.filter(
          (productRemoved) => productRemoved.quantity !== 0
        );
        setCart(newCart);
        if (cart.length === 1) {
          localStorage.removeItem("cartKey");
        }
      }
    });
  }

  useEffect(() => {
    let newValue = 0;
    cart.forEach((product) => {
      newValue += product.value * product.quantity;
    });
    setAmount(newValue);
  }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cartKey", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const restoredCart = localStorage.getItem("cartKey");
    if (restoredCart) {
      setCart(JSON.parse(restoredCart));
    }
  }, []);

  

  return (
    <CartDiv>
      <h1>Cart</h1>
      {cart.map((product) => {
        return (
          <Items
            key={product.id}
            name={product.name}
            value={(product.value * product.quantity).toFixed(2)}
            quantity={product.quantity}
            id={product.id}
            removeItem={removeItem}
          />
        );
      })}
      <p>Valor total: R${amount.toFixed(2)} </p>
    </CartDiv>
  );
}

export default Cart;
