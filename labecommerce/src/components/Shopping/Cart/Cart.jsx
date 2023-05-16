import React from "react";
import Itens from "../Items/Itens";
import { CartBoxStyled } from "./CartStyle";

export default function Cart({ amount, setAmount, cart, setCart }) {
  const removeItemFromCart = (id) => {
    cart.map((myProduct) => {
      if (myProduct.id === id && myProduct.quantity >= 1){
        myProduct.quantity = Number(myProduct.quantity) - 1;
        setCart([...cart]);
        setAmount(Number(amount) - Number(myProduct.price));
      }

      if(myProduct.quantity === 0) {
        const newCart = cart.filter(object => object.quantity!== 0) 
        setCart(newCart)
      }
    }) 
  }

  const renderItensOnCart = cart.map((item) => {
    return (
      <Itens
        itemName={item.name}
        itemPrice={item.price}
        itemQuantity={item.quantity}
        itemId = {item.id}
        removeItemFromCart={removeItemFromCart}
        key={item.id}
      />
    );
  });

  
  // console.log(cart)
  return (
    <CartBoxStyled>
      <h2>Carrinho</h2>
      {renderItensOnCart}
      <p>Valor total: R${Number(amount).toFixed(2)}</p>
    </CartBoxStyled>
  );
}
