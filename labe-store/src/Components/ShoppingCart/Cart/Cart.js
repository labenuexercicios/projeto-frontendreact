import React from "react";
import { DivCart } from "./cartStyle";
import Items from "../Items/Items";

export default function Cart(){
    return(
        <DivCart>
            <h1>Carrinho</h1>
            <Items/>
        </DivCart>
    )
}