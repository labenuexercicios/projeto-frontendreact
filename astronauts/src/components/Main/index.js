import React from "react"
import { MainContainer } from "./styled"
import { ProductCard } from "../ProductCard"
import roupa from "../../assets/jaqueta.webp"

export function Main(){
    const product={
        name: "Roupa1",
        price: `R$: ${500.00}`
    }
    return(
        <MainContainer>
            <ProductCard image={roupa} alt={"roupa1"} product={product}/>
        </MainContainer>
    )
}