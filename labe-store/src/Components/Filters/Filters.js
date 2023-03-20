import React from "react";
import { Div } from "./filtersStyle";

export default function Filters ({searchFilter, setSearchFilter, minFilter, setMinFilter, maxFilter, setMaxFilter}){

    const handleSearch = (e) => {
        setSearchFilter(e.target.value)
    };

    const handleMinFilter = (e) => {
        setMinFilter(e.target.value)
    };

    const handleMaxFilter =(e) => {
        setMaxFilter(e.target.value)
    };
    

    return(
        <Div>
            <h1>Filtro</h1>
            <p>Valor mínimo:</p>
            <input
            type="number"
            value={minFilter}
            onChange={handleMinFilter}/>

            <p>Valor máximo:</p>
            <input
            type="number"
            value={maxFilter}
            onChange={handleMaxFilter}/>

            <p>Busca por nome:</p>
            <input
            type="text"
            value={searchFilter}
            onChange={handleSearch}/>
        </Div>
    )
}