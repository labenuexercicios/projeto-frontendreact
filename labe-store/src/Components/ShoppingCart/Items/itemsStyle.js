import styled from "styled-components";

export const DivItens = styled.div`
    border: 1px solid black;
    background-color: white;
    margin-bottom: 2rem;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 14vw;
    border-radius: 10px;
    :hover{
        transform: scale(1.1);
        border: 4px solid black;
    }
`

export const ButtonRemove = styled.button`
    background-color: black;
    color: white;
    height: 3.5vh;
    border-radius: 8px;
    :active{
        font-size: 12px;
    }
`