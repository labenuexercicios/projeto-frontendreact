import styled from "styled-components";

export const ProductContainer = styled.div`
width: 23vw;
height: 32vw;
display:flex; 
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
`

export const SuitImage = styled.img`
width: 23vw;
height: 30vw;
border: black solid 1px;
margin: auto;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
`

export const ProductTitle = styled.h3`
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 1rem;
color: #283d3e;
`
export const Price = styled.h3`
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 1.5rem;
color: #283d3e;
`

export const BuyButton = styled.button`
background-color: #d62e2e;
  border-radius: 8px;
  padding: 16px;
  width: 100px;
  border: none;
  color: white;
  cursor: pointer;
`