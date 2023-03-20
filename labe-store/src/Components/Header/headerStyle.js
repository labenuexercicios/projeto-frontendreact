import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    margin-bottom: 1rem;
`

export const H1 = styled.h1`
    margin-left: 1rem;
    color: white;
`

export const InputHeader = styled.input`
    height: 6vh;
    width: 50vw;
    border-radius: 20px;
    margin-left: 2rem;
`

export const DivUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-left: 2rem;
    :hover{
        transform: scale(1.1)
    }
    :active{
        height: 12px;
        color: gray;
    }
`

export const P = styled.p `
    margin-left: 0.4rem;
    color: white;
`

export const Img = styled.img`
    margin-left: 0.8rem;
`