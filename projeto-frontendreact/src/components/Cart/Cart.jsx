import React from "react";
import { CartContainer, CartTitle } from "./styled";
import { Items } from "../Items/Items";


export function Cart(){
    return(
        <CartContainer>
            <CartTitle>Carrinho</CartTitle>
            <Items/>
        </CartContainer>
    )
}