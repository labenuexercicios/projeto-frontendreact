import React from "react";
import { CartContainer } from "./styled";
import { Items } from "../Items/Items";


export function Cart(){
    return(
        <CartContainer>
            <Items/>
        </CartContainer>
    )
}