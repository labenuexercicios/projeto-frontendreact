import React from "react";
import { StyledDiv, StyledDivOrdem, StyledDivPrice } from "./styled";

const Filters = ({ numberMin, setNumberMin, setNumberMax, numberMax, cart, prodShopping, setProdShopping, sort, setSort }) => {

    return (
        <StyledDiv>
            <div>
                <StyledDivPrice action="">
                    <label htmlFor="price">Filtrar por preço:</label>
                    <input type="number" id="numberMin" name="numberMin" value={numberMin} placeholder="valor minimo" onChange={(e) => {
                        setNumberMin(e.target.value)
                    }} />
                    <input type="number" id="numberMax" value={numberMax} placeholder="valor maximo" onChange={(e) => {
                        setNumberMax(e.target.value)
                    }} />
                </StyledDivPrice>
                <StyledDivOrdem>
                    <label htmlFor="sort">Ordenar por:</label>
                    <select name="sort" value={sort} onChange={(e) => { setSort(e.target.value) }}>
                        <option value="Title">Titulo</option>
                        <option value="price">Preço</option>
                    </select>
                </StyledDivOrdem>
                <button onClick={() => {
                    setNumberMin("")
                    setNumberMax("")
                }}>limpar filtros</button>
            </div>
        </StyledDiv>
    )
}

export default Filters
