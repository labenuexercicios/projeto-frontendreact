import React, { useState } from "react";
import { HeaderContainer, ImgLogo, ImgCart} from "./styled";
import Logo from "../../assets/images/Logo.png"
import CartIcon from "../../assets/images/shopping-cart.png"

export function Header({ onCartClick }) {

    return (
        <>
            <HeaderContainer>              
                    <ImgLogo src={Logo} alt="logo" />
                <ImgCart src={CartIcon} onClick={onCartClick}/>                
            </HeaderContainer>
        </>
    )
}