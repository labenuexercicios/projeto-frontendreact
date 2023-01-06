import React, { useState } from "react";
import { StyledDiv, StyledDivPrice, StyledDivQuant } from "./styled";

const PainelCart = ({ priceTot, cart }) => {


    return (
        <StyledDiv>
            <h3>resumo do pedido</h3>
            <StyledDivQuant>
                <p>{cart.length} produtos</p>
                {/* <h2>{priceTot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2> */}
            </StyledDivQuant>
            <StyledDivPrice>
                <h2>total</h2>
                <h2>{priceTot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
            </StyledDivPrice>
            <div>
                <button>CONTINUAR</button>
            </div>
        </StyledDiv>
    )
}

export default PainelCart
