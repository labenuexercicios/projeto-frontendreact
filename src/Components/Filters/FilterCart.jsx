import React from "react";
import { ContainerFilter, FilterForm, ValuesInput, StyledLabel, Filtrar } from "./styles";
import Money from "../img -project/money-bag.gif"
import Search from "../img -project/search.gif"

const FilterCart = (props) => {
    return (
        <ContainerFilter>
            <h1>Filtros</h1>
            <FilterForm>
                <StyledLabel htmlFor="minimum">
                    <img src={Money} height={38} />
                    Valor mínimo:
                    <ValuesInput
                        placeholder="R$"
                        type='number'
                        id="minimum"
                        min="0"
                        value={props.minValue}
                        onChange={(e) => props.setMinValue(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="maximum">
                    <img src={Money} height={38} />
                    Valor máximo:
                    <ValuesInput
                        placeholder="R$"
                        type='number'
                        id="maximum"
                        min="0"
                        value={props.maxValue}
                        onChange={(e) => props.setMaxValue(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="search">
                    <img src={Search} height={38} />
                    Busca por nome:
                    <ValuesInput
                        type='text'
                        id="search"
                        value={props.query}
                        onChange={(e) => props.setQuery(e.target.value)}
                    />
                </StyledLabel>
            </FilterForm>
        </ContainerFilter >
    )
}

export default FilterCart
