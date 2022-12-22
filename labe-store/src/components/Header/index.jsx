import { React, useState } from "react";
import { BoxButtons, BoxDiv, BoxForm, InputProductsSearch, StyledHeader, Title } from "./styled";
import { BsFillCartFill } from "react-icons/bs";


const Header = ({ setName, setShowCart }) => {

    return (
        <StyledHeader>
            <BoxDiv>
                <Title>Labe Store</Title>
            </BoxDiv>
            <BoxForm>
                <form >
                    <InputProductsSearch type="text" placeholder="Digite o nome do produto"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </form>
            </BoxForm>
            <BoxButtons>
                <button onClick={() => { setShowCart(true) }}><BsFillCartFill /></button>
            </BoxButtons>
        </StyledHeader>
    )
}

export default Header
