import styled from "styled-components";

export const AddProduct = styled.section `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-left: 10px;
    button{
        background-color: red;
        border-radius: 30px;
        height: 25px;
        width: 25px;
        margin-top: 8px;
        transition: 0.5s;
        :hover{
            background-color: green;
            color: white;
        }
    }
`