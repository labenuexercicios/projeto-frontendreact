import React from "react"
import { HeaderStyle, ImageHeader, PHeader,HeaderMenu, MenuEntrar, MenuType } from "./styled"
import logo from "../Image/Logo.png"




export function Header() {

return(
    <div>
        <HeaderStyle>
            <a href="#"><ImageHeader src={logo}/></a>

            
            <HeaderMenu>
            <MenuType><a href="#"><MenuEntrar><b>ENTRAR</b></MenuEntrar></a></MenuType>
            <PHeader>Não tem conta?</PHeader>
            <PHeader>Clique <a href="#"><b><u>aqui</u></b></a> para se cadastrar!</PHeader>
            </HeaderMenu>
        
        </HeaderStyle>
    </div>



)



}