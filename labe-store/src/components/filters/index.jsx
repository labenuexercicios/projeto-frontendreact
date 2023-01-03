import React from "react";
import { ContainerDiv, InputNumberMax, InputNumberMin, LabelInputNumber, LabelInputOrdenacao, StyledDiv, StyledDivOrdem, StyledDivPrice } from "./styled";

const Filters = ({ numberMin, setNumberMin, setNumberMax, numberMax, cart, prodShopping, setProdShopping, sort, setSort }) => {

    return (
        <ContainerDiv>
            <StyledDiv>
                <StyledDivPrice action="">
                    <LabelInputNumber htmlFor="price">Filtrar por preço:</LabelInputNumber>
                    <InputNumberMin type="number" id="numberMin" name="numberMin" value={numberMin} placeholder="valor minimo" onChange={(e) => {
                        setNumberMin(e.target.value)
                    }} />
                    <InputNumberMax type="number" id="numberMax" value={numberMax} placeholder="valor maximo" onChange={(e) => {
                        setNumberMax(e.target.value)
                    }} />
                </StyledDivPrice>
                <StyledDivOrdem>
                    <LabelInputOrdenacao htmlFor="sort">Ordenar por:</LabelInputOrdenacao>
                    <select name="sort" value={sort} onChange={(e) => { setSort(e.target.value) }}>
                        <option value="Title">Titulo</option>
                        <option value="price">Preço</option>
                    </select>
                </StyledDivOrdem>
                <button onClick={() => {
                    setNumberMin("")
                    setNumberMax("")
                }}>limpar filtros</button>
            </StyledDiv>
        </ContainerDiv>
    )
}

export default Filters
