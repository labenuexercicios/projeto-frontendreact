import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;

   font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
   color-scheme: light dark;
   color: rgba(255, 255, 255, 0.87);
   background-color: #242424;
  }
`

export const Application = styled.div`
  display: flex;
`
