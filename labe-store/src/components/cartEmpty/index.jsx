import React from "react";
import { DivContainer, StyledText } from "./styled";

const CartEmpty = () => {
    return (
        <DivContainer>
            <StyledText>Seu carrinho de compras está vazio.</StyledText>
        </DivContainer>
    )
}

export default CartEmpty;
