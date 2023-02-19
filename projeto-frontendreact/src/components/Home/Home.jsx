import React from "react";
import { HomeContainer } from "./styled";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home(){
    return(
        <HomeContainer>
            <ProductCard/>
        </HomeContainer>
    )
}