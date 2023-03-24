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
    height: 22vh;
    width: 8vw;
    border-radius: 10px;
    gap: 0.7rem;
    text-align: center;
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

export const NameProduct = styled.h3`
    text-align: center;
`

export const H3 = styled.h3`
  font-size: 0.8em;
`