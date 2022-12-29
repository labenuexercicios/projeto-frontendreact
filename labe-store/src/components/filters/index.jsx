import React from "react";
import { StyledDiv, StyledDivOrdem, StyledDivPrice } from "./styled";

const Filters = ({ numberMin, setNumberMin, setNumberMax, numberMax, cart, prodShopping, setProdShopping }) => {

    console.log(prodShopping)
    return (
        <StyledDiv>
            <div>
                <h2>Preço</h2>
                <StyledDivPrice action="">
                    <input type="number" id="numberMin" name="numberMin" value={numberMin} placeholder="valor minimo" onChange={(e) => {
                        setNumberMin(e.target.value)
                    }} />
                    <input type="number" id="numberMax" value={numberMax} placeholder="valor maximo" onChange={(e) => {
                        setNumberMax(e.target.value)
                    }} />
                </StyledDivPrice>
                <h2>Ordenação</h2>
                <StyledDivOrdem>
                    <button onClick={() => {
                        const nameOrde = prodShopping.sort(item => { return item.name - item.name }
                        )
                        setProdShopping(nameOrde)
                    }}>ordem alfabetica</button>

                    <button onClick={() => { prodShopping.sort(item => { return item.price - item.price }) }}>preco</button>
                </StyledDivOrdem>
                <button onClick={() => {
                    setNumberMin(-Infinity)
                    setNumberMax(Infinity)
                }}>limpar filtros</button>
            </div>
        </StyledDiv>
    )
}

export default Filters
