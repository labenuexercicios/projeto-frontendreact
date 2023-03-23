import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: silver;
`

export const Application = styled.main`
  display: flex;
  flex-direction: column;
  background-color: silver;
  height: 140vh;
  width: 100vw;
  gap: 2rem;

`

export const Container = styled.div`
  line-height: 1.5;
  font-weight: 600;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: silver;
  @media screen and (max-width: 400px) {  
    height: 370vh;
  }
`

export const ProductDiv = styled.div`
  display: flex;
`

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 400px) {  
    padding-top: 130vh;
  }
`
