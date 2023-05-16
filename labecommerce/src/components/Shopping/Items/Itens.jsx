import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function Itens ( {itemName,itemPrice,itemQuantity, removeItemFromCart, itemId}) {
    return (
        <p>{itemName} R${itemPrice.toFixed(2)} Quantidade: {itemQuantity}<button onClick={()=>removeItemFromCart(itemId)}>remover</button></p>
       
    )
}