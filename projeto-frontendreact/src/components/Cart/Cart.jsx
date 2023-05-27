import React from "react";
import { CartContainer, CartTitle, Div } from "./styled";
import { Items } from "../Items/Items";



export function Cart({ cart, setCart, amount, setAmount }){
    return(
        <CartContainer >
            <CartTitle>Carrinho</CartTitle>
            <Items cart={cart} setCart={setCart} amount={amount} setAmount={setAmount}/>
            <Div>Total: R$ {amount.toFixed(2)}</Div>
        </CartContainer>
    )
}