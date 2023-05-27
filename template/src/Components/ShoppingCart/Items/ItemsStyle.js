import { styled } from "styled-components"

export const CartStyle = styled.section`
    display: flex;
    width: 25vw;
    justify-content:start;
    margin-top: 30px;
    align-items: start;
    div{
        margin: 0 10px 10px 10px;
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 10px;
    }
    img{
        width: 150px;
    }
    button{
        font-size: 16px;
        align-self:flex-end;
        justify-self: end;
        border: 0;
        text-decoration: underline;
        background-color: transparent;
    }
`