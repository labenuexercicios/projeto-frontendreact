import React from "react";
import { DivContainer, H1, Img, InputHeader, P, DivUser } from "./headerStyle";

export default function Header(){
    return(
        <DivContainer>
            <H1>LabeStore</H1>
            <Img/>
            <InputHeader className="input-header" placeholder="Olá, o que você procura?"></InputHeader>

            <DivUser>
                <img/>
                <P>Minha conta</P>
            </DivUser>
        </DivContainer>
    )
}