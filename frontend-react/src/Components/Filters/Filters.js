import { StyledFilter, StyledH2, StyledP, StyledInput } from "./FiltersStyle";
//import { useState } from "react";


export default function Filters({ minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter }) {

    const handleMinFilter = (event) => {
        console.log(event.target.value)
        setMinFilter(event.target.value)
    }
    const handleMaxFilter = (event) => {
        console.log(event.target.value)
        setMaxFilter(event.target.value)
    }
    const handleSearchFilter = (event) => {
        console.log(event.target.value)
        setSearchFilter(event.target.value)
    }



    return (

        <StyledFilter>
            <StyledH2>Filters</StyledH2>

            <StyledP>Valor minímo:</StyledP>

            <StyledInput value={minFilter}
                onChange={handleMinFilter}
                min={0}>
            </StyledInput>

            <StyledP>Valor máximo:</StyledP>
            <StyledInput value={maxFilter} onChange={handleMaxFilter} min={0}></StyledInput>

            <StyledP>Busca por nome:</StyledP>
            <StyledInput value={searchFilter} onChange={handleSearchFilter}></StyledInput>

        </StyledFilter>
    );
}