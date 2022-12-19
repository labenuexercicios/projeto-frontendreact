import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    background-color: #e9e9e9;
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
