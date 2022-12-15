import React from "react"
import { MainContainer, SuitImage } from "./styled"
import roupa from "../../assets/jaqueta.webp"

export function Main(){
    return(
        <MainContainer>
            <SuitImage src={roupa} alt="roupa1"/>
            <SuitImage src={roupa} alt="roupa1"/>
            <SuitImage src={roupa} alt="roupa1"/>
            <SuitImage src={roupa} alt="roupa1"/>
        </MainContainer>
    )
}