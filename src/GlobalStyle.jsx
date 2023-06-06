import styled, { createGlobalStyle } from "styled-components";
import Backgroud from "/Img/general/Background.png";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}
`;
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: centrer;
  justify-content: center;
  background-color: black;
  background-image: url(${Backgroud});
  background-size: cover;
  background-repeat: no-repeat;
  gap: 30px;
`;
