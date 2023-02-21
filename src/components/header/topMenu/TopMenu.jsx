import { useState } from "react";
import { FirstStyledContainer, SecondStyledContainer } from "./TopMenuStyled"

export default function TopMenu({cart, setCart, showCart, setShowCart}) {

    return (
        <FirstStyledContainer>
            <SecondStyledContainer>
                <a>STORES</a>
                <a>Free Shipping*</a>
                <a>Franchise</a>
                <a>Contact us</a>
            </SecondStyledContainer>
            <SecondStyledContainer>
                <a>Enter your zip code: Change here</a>
                <a>welcome, USER Login</a>
                <a>Orders</a>
                <a>Gift list</a>
            </SecondStyledContainer>
        </FirstStyledContainer>
    )
}
