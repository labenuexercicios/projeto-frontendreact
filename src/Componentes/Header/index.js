import React from "react"
import { HeaderStyle, ImageHeader, PHeader } from "./styled"
import logo from "../Image/Logo.png"




export function Header() {

return(
    <div>
        <HeaderStyle>
            <ImageHeader src={logo}/>

            <PHeader>Clique aqui para se cadastrar!</PHeader>
         
        
        </HeaderStyle>
    </div>



)



}