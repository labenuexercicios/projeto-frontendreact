import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 5em;
`

export const BoxDiv = styled.div`
    display: flex;
    height: 100%;
    width: 25%;
    align-items: center;
`
export const Title = styled.h1`
    font-size:4vw
`

export const BoxForm = styled(BoxDiv)`
    width: 50%;
    justify-content:center;
`

export const BoxButtons = styled(BoxDiv)`
    justify-content:space-around;
    `
export const InputProductsSearch = styled.input`
    width: 30vw;
    height:5vh;
    font-size:1vw;
    border: 1px solid #ccc;
`

export const Icon = styled.img`
    height: 5vh;
`

export const Buttons = styled.button`
    appearance: auto;
    height: 5vh;
    width: 3vw;
    border-style: none;
    background-color:transparent;
    cursor: pointer;
`
export const ButtonsTitle = styled.button`
    appearance: auto;
    background-color:transparent;
    border-style: none;
    cursor: pointer;
`
