import styled from "styled-components"

export const HeaderContainer = styled.header`
    border: 2px solid black;
    display: flex;
    justify-content: space-between;

    .grupo-botao{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    button {
        background-color: #518FD8;
        border: none;
        width: 70px;
        height: 50px;
        margin: 0 4px;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(0.95);
        }
    }
`