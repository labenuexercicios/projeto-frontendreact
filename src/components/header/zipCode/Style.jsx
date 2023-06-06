import styled from "styled-components"

export const ZipCodeImgStyled = styled.img`
    width: 20px;
    height: 20px; 
`
export const ZipCodeButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;
  color: #fff;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
  background-origin: border-box;
  font-size: 12px;
  width: 80px;
`
export const ContainerStyled = styled.div`
    display: flex;   
    align-self: flex-start;
    gap: 10px;
    align-items: center;
    @media screen and (max-width: 500px) {
        display: none;
    }      
`