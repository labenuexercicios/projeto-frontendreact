import React, { useState } from "react";
import { ProductAdded, Txt } from "./styled";

export function Cart({ item, changeQty, remove, total }) {

  return (
    <ProductAdded key={item.key}>
      <Txt>{item.name}</Txt>
      <Txt>Valor:{item.price}</Txt>
      <Txt>Quantidade:{item.quantity}</Txt>
      <Txt>Total = R${total}</Txt>
      <button onClick={() => changeQty(item, "sum")}> + </button>
      <button onClick={() => changeQty(item, "dec")}> - </button>
      <button onClick={() => remove(item)}>x</button>
    </ProductAdded>
    
  );
}
