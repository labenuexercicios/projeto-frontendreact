import React from "react";
import { ContainerFilter, FilterForm, ValuesInput, StyledLabel } from "./styles";
import Money from "../img -projeto/money-bag.gif"
import Search from "../img -projeto/search.gif"

const Filter = () => {
    return (
        <ContainerFilter>
            <h1>Filtros</h1>
            <FilterForm>
                <StyledLabel htmlFor="minimum">
                    <img src={Money} height={38}/>
                    Valor mínimo:
                    <ValuesInput type='number' id="minimum" />
                </StyledLabel>
                <StyledLabel htmlFor="maximum">
                    <img src={Money} height={38}/>
                    Valor máximo:
                    <ValuesInput type='number' id="maximum"/>
                </StyledLabel>
                <StyledLabel htmlFor="search">
                <img src={Search} height={38}/>
                    Busca por nome:
                    <ValuesInput type='text'id="search"/>
                </StyledLabel>
            </FilterForm>
        </ContainerFilter >
    )
}

export default Filter