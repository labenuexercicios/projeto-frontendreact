import React from "react";
import Itens from "../Items/Itens";
import { CartBoxStyled } from "./CartStyle";

export default function Cart ({amount, setAmount, cart, setCart}) {

    return (
        <CartBoxStyled>
            <p>Cart</p>
            <Itens />
        </CartBoxStyled>
    )
}