import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  body{
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
  }`;
