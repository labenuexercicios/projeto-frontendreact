import React from "react";
import { Header, Figura, Logo, Titulo, Menu, ItensMenu } from "./Style";
import logo from '../../Assets/Images/logo.png'

export default function Cabecalho () {
    return(
        <Header>
            <Figura>
                <Logo src={logo} />
                <Titulo>AstroDev Shop</Titulo>
            </Figura>
            <nav>
                <Menu>
                    <ItensMenu>Home</ItensMenu>
                    <ItensMenu>Comprar</ItensMenu>
                    <ItensMenu>Sobre Nós</ItensMenu>
                    <ItensMenu>Contato</ItensMenu>
                </Menu>
            </nav>
        </Header>
    )
}
