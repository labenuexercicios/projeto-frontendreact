import React from "react";
import { ContainerHeader, HeaderText, ListHeader } from "./HeaderStyle";

function Header() {
    return (
        <ContainerHeader>
            <HeaderText>
                GALAXY
                 C O M M E R C E MARVEL
            </HeaderText>
            <ListHeader>
                <li>Home</li>
                <li>Contato</li>
                <li>Sobre nós</li>
            </ListHeader>
        </ContainerHeader>
    )
}

export default Header;