import { createGlobalStyle, styled } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  overflow-x: hidden;
  /* background-color: yellow; */
}
`;

export const Principal = styled.main`
  display: flex;
  gap: 20px;
  border: 3px solid black;
`;



