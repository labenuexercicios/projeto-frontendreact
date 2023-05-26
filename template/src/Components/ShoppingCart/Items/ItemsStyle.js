import { styled } from "styled-components"

export const CartStyle = styled.section`
    div{
        display: flex;
    justify-content:space-between;
    margin-top: 40px;
    align-items: center;
    }
    img{
        width: 150px;
    }
    button{
        font-size: 16px;
        align-self:flex-start;
        border: 0;
        text-decoration: underline;
        background-color: transparent;
    }
    .value{
        align-self:flex-end;
        position: fixed;
        right: 0;
    }
`