import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
   

    
   }
   body {
    background: #EDEDED;
   }

  :root {
    --ui-light: #BFD1E5;
    --ui-dark: #1A1F16;
    --ui-placeholder: rgba(26, 31, 22, 0.50);
    --ui-white: #FFF;
    --ui-tertiary: #60695C;
    --ui-success: #02D693;
    --font-tertiary: #60695C;
  }
  

`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
