import styled, { createGlobalStyle } from "styled-components";

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
`;
