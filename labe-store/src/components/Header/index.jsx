import React from "react";
import { BoxButtons, BoxDiv, BoxForm, InputProductsSearch, StyledHeader, Title } from "./styled";
import { BsFillCartFill } from "react-icons/bs";


const Header = () => {
    return (
        <StyledHeader>
            <BoxDiv>
                <Title>Labe Store</Title>
            </BoxDiv>
            <BoxForm>
                <form >
                    <InputProductsSearch type="text" placeholder="Digite o nome do produto" />
                </form>
            </BoxForm>
            <BoxButtons>
                <button><BsFillCartFill /></button>
            </BoxButtons>
        </StyledHeader>
    )
}

export default Header
