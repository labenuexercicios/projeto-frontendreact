import React from "react";
import { ContainerDiv, InputNumberMax, InputNumberMin, LabelInputNumber, LabelInputOrdenacao, StyledButton, StyledDiv, StyledDivOrdem, StyledDivPrice, StyledOption, StyledSelect } from "./styled";

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
                    <StyledSelect placeholder="teste" name="sort" value={sort} onChange={(e) => { setSort(e.target.value) }}>{sort}
                        <StyledOption value=""></StyledOption>
                        <StyledOption value="title">Titulo</StyledOption>
                        <StyledOption value="price">Preço</StyledOption>
                    </StyledSelect>
                </StyledDivOrdem>
                <StyledButton onClick={() => {
                    setNumberMin("")
                    setNumberMax("")
                    setSort("")
                }}>limpar filtros</StyledButton>
            </StyledDiv>
        </ContainerDiv>
    )
}

export default Filters
