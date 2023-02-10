import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
export const GeneralContainerStyled = styled.div `
    display: flex;
    flex-direction: column;
`