import React from "react";
import { H1, StyledDiv, StyledLogo, StyledCart } from "./HeaderStyles";
import logo from "../images/logo.jpg"
import cart from "../images/cart.jpg"
import { Link } from "react-router-dom";

function Header() {
    return (
        <StyledDiv>
            <Link to="/">
                <StyledLogo src={logo} alt={logo} />
            </Link>
            <H1> World of Imagination</H1>
            <Link to="/cart">
                <StyledCart src={cart} alt={cart} />
            </Link>
        </ StyledDiv>
    )
}

export default Header;