import styled from "styled-components"

export const Txt = styled.section `
    width: 80%;
    margin: 0 auto;
    margin-top: 60px;
    font-family: 'Poppins', sans-serif;
    font-size: 61px;
    font-weight: 300;
    @media screen and (min-width : 481px) and (max-width : 800px) {
        font-size: 12px;
        text-align: center;
        margin-top: 20px;
    }
    @media screen and (min-width : 200px) and (max-width : 480px) {
        font-size: 12px;
        text-align: center;
        margin-top: 20px;
    }
`

export const Negrito = styled.span `
    font-weight: 700;
`
export const Rosa = styled.span `
    font-weight: 300;
    color: #FF008A;
`