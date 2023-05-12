import {styled} from "styled-components";

export const Produto = styled.figure`
    border: 1px solid black;
    width: 250px;
    height: fit-content;
    img{
        height:300px;
        width: 248px;
    }
`
export const Div = styled.figcaption `
    display: flex;
    flex-direction: column;
    border-top: 1px solid black;
    background-color: rgb(196, 196, 196);
    padding: 10px;
    align-items: flex-start;
    line-height: 30px;
    button{
        width: 60%;
        align-self: center;
        margin-top: 20px;
    }
`