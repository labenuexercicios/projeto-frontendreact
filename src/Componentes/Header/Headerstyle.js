import styled from "styled-components";

export const StyleofHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-column: 1/4;
    align-items: center;
    border-bottom: 3px solid black;
    border-radius: 10px;
`

export const Styleofinputheader = styled.header`
    display: grid;
    grid-column: 1/2;
    grid-row: 2/3;

`

export const Styleofheaderright = styled.header`
    display: grid;
    grid-column: 3/4;
    grid-row: 2/3;
    text-align: center;
    padding: 20px 0;
    color: black;
    text-decoration: none;
    font-weight: bold;

`