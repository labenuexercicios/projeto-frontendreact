import styled from "styled-components";

export const ProductContainer = styled.div`
width: 16vw;
height: 27vw;
margin: 2rem;
display:grid; 
align-items: center;
justify-items: start;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
`

export const SuitImage = styled.img`
width: 16vw;
height: 23vw;
border: black solid 1px;
margin: auto;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
grid-column: 1/3;
grid-row: 1;
`

export const ProductTitle = styled.h3`
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 1.1rem;
color: #283d3e;
grid-column: 1/2;
grid-row: 2/3;

`
export const Price = styled.h3`

font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 0.9rem;
color: #283d3e;
grid-column: 1/2;
grid-row: 3/4;
`

export const BuyButton = styled.button`
  background-color: #d62e2e;
  border-radius: 8px;
  padding: 16px;
  width: fit-content;
  border: none;
  color: white;
  cursor: pointer;
  grid-column: 2/3;
  grid-row: 2/4;
  justify-self: end;
  :hover {
    background-color: #b82828;
  }
`