import styled from "styled-components"

export const H4 = styled.p`
    font-size: 1.3em;
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0.1rem;
    height: 56vh;
    align-items: center;
    margin-top: 2rem;
    :hover{
        border: 4px solid black;
        height: 52vh;
        transform: scale(1.1);
        border-radius: 8px;
        background-color: #ffffff;
        color: black
    }
`

export const Button = styled.button`
    width: 7vw;
    border-radius: 5px;
    height: 4vh;
    background-color: black;
    color: white;
    :hover{
        transform: scale(1.1);
        background-color: gray;
        color: white;
    }
    :active{
        font-size:12px;
    }
`