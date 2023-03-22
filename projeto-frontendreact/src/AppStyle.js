import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const Application = styled.main`
  display: flex;
`

export const Container = styled.div`
  line-height: 1.5;
  font-weight: 600;
  width: 100vw;
  height: 230vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: silver;

  @media screen and (max-width: 400px) {  
    height: 500vh;
  }
`



export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 400px) {  
    padding-top: 270vh;
  }
`
