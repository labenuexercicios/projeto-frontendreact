import React from "react";
import { FilterContainer, StyleInput, Form, StyleButton } from "./filtersStyle"

function Filters({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter
}) {

    const minimumValueInput = (e) => {
        setMinFilter(e.target.value)
    }

    const maximumValueInput = (e) => {
        setMaxFilter(e.target.value)
    }

    const searchNameInput = (e) => {
        setSearchFilter(e.target.value)
    }

    const clearFilters = () => {
        return (
        setMaxFilter(""),
        setMinFilter(""),
        setSearchFilter(""))
    }

    return (
        <FilterContainer>
            <h3>Filtros</h3>
            <Form>
                <label>Valor mínimo:
                    <StyleInput type="number" value={minFilter} onChange={minimumValueInput} min="0"></StyleInput>
                </label>
                <label>Valor máximo:
                    <StyleInput type="number" value={maxFilter} onChange={maximumValueInput} min="0"></StyleInput>
                </label>
                <label>Busca por nome:
                    <StyleInput type="text" value={searchFilter} onChange={searchNameInput}></StyleInput>
                </label>
                <StyleButton onClick={() => {clearFilters()}}>Limpar filtros</StyleButton>
            </Form>
            

        </FilterContainer>
    )
}

export default Filters;