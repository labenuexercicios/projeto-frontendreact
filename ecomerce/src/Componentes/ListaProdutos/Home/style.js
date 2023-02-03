import styled from "styled-components"

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 10px;
    #input{
        display: flex;
        align-self: end;
    }
    #containerProdutos{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }
`