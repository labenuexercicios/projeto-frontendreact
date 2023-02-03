import React from "react"
import { StyledHeader, StyledCart } from "./styleHeader"
import carrinho from "../../assets/-shopping-cart_90604.png"

export const Header = () => {

return(
    <StyledHeader>
        <h2>INÍCIO</h2>
        <StyledCart src={carrinho}/> 
    </StyledHeader>
)
}