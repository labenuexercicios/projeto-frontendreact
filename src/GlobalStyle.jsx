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
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(16, 41, 255, 1) 1%,
    rgba(255, 255, 255, 1) 100%
  );
`;
