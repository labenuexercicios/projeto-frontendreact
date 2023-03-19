import React from "react"
import { HeaderStyle, ImageHeader, PHeader,HeaderMenu, MenuEntrar } from "./styled"
import logo from "../Image/Logo.png"




export function Header() {

return(
    <div>
        <HeaderStyle>
            <ImageHeader src={logo}/>

            
            <HeaderMenu>
            <MenuEntrar>ENTRAR</MenuEntrar>
            <PHeader>Não tem conta?</PHeader>
            <PHeader>Clique aqui para se cadastrar!</PHeader>
            </HeaderMenu>
        
        </HeaderStyle>
    </div>



)



}