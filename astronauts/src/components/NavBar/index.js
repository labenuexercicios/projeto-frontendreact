import React from "react"
import { NavBarContainer, NavLink, Menu } from "./styled"

export function NavBar(){
    return(
        <NavBarContainer>
            <Menu>
                <NavLink>Novidades</NavLink>
                <NavLink>Trajes</NavLink>
                <NavLink>Acessórios</NavLink>
                <NavLink>Promo</NavLink>
            </Menu>
        </NavBarContainer>
    )
}