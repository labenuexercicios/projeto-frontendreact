import React from "react";
import { ProductAdded, Txt, CartDiv, CartImg, DivButton, ButtonCartProduct } from "./styled";

export function Cart({ item, changeQty, remove, total }) {
  return (
    <CartDiv>
      <CartImg src={item.image} alt={item.name} />
      <ProductAdded key={item.key}>
        <Txt>{item.name}</Txt>
        <Txt>R$ {item.price.toFixed(3)}</Txt>
        <Txt>Quantidade: {item.quantity}</Txt>
        <Txt>Total: R${total.toFixed(3)}</Txt>
      </ProductAdded>
      <DivButton>
        <ButtonCartProduct onClick={() => changeQty(item, "sum")}> + </ButtonCartProduct>
        <ButtonCartProduct onClick={() => changeQty(item, "dec")}> - </ButtonCartProduct>
        <ButtonCartProduct onClick={() => remove(item)}>x</ButtonCartProduct>
      </DivButton>
    </CartDiv>
  );
}
