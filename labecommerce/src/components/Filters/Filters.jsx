import React from "react";
import { FilterBoxStyle } from "./FiltersStyle";

export default function Filters({ minFilter, setMinFilter, maxFilter, setMaxFilter, seachFilter, setSearchFilter }) {

    const conditionSetMinFilter = (e) => {
        const value = parseInt(e.target.value);
        if (value <= 0){
            alert("Valor mínimo para o filtro é 0")
            setMinFilter("")
        } else {
            setMinFilter(e.target.value)
        }
    }
    const conditionSetMaxFilter = (e) => {
        const value = parseInt(e.target.value);
        if (value <= 0){
            alert("Valor mínimo para o filtro é 0")
            setMaxFilter("")
        } else {
            setMaxFilter(e.target.value)
        }
    }
    return (
        <FilterBoxStyle>
            <h2>Filtros</h2>
            <label>
                Valor mínimo:
                <br />
                <input value={minFilter} onChange={conditionSetMinFilter} type="number"/>
            </label>

            <label>
                Valor máximo:
                <br />
                <input value={maxFilter} onChange={conditionSetMaxFilter} type="number"/>
            </label>

            <label>
                Busca por nome:
                <br />
                <input value={seachFilter} onChange={(e) => setSearchFilter(e.target.value)} />
            </label>
        </FilterBoxStyle>
    )
}