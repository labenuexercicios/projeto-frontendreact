import React from "react";
import styled from "styled-components";import { CardProduct } from "../ProductsList/CardProduct";

export const FilterPanel1 = styled.div`
    background-color: red;
    min-height: 60vh;
`
export const Sctn = styled.div`
    background-color: red;
    min-height: 60vh;
`




export function FilterPanel(){

    return(
        <FilterPanel1>
            <input type="text"/>
        </FilterPanel1>
    )
}


export function SearchClient(){

    return(
        <Sctn>
            <CardProduct>

            </CardProduct>  
        </Sctn>
    )
}

export function ResponseSection(){

    return(
        <FilterPanel1>
            <input type="text"/>
        </FilterPanel1>
    )
}


export const ListItens = styled.div`
    background-color: red;
    min-height: 60vh;
`
