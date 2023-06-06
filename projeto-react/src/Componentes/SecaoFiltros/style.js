import styled from "styled-components";


export const DivFiltros=styled.div`
    display: grid;
    align-items: baseline;
    height: 340px;
    border: 1px solid black;
    color:black;
    gap:10px;
    padding: 10px;

    button{
        margin-top: 10px;
        border-radius: 10px;
        background-color: purple;
        color: white;
        border: 1px solid black;
        box-shadow: 1px 1px rgba(1, 1, 1, 0.2);
        padding-top: 8px;
        padding-bottom: 8px;
    }
    input{
        padding: 6px 10px;
    }
`