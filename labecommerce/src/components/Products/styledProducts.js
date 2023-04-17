import styled from "styled-components";

export const CardContainer = styled.div`
  /* border: 1px solid burlywood; */
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  text-align: center;

  p {
    margin: 4px 0;
    color: white;
    font-weight: bolder;
    font-family: 'VT323', monospace;
    
  }
`

export const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  height: 5vh;
  border: none;
  background-color: black;
  color: white;
  font-family: 'VT323', monospace;
  :hover{
    background-color: orangered;
  }
`
export const ProductsContainer = styled.div`

`;

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
 color: white;
  
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  
`

export const ImageProducts = styled.img`
width: 250px;
`