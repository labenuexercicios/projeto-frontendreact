import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
background-color: silver;
`

export const Application = styled.main`
  display: flex;
  flex-direction: column;
  background-color: silver;
  height: 140vh;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: 1300){
    width: 120vw;
  }
`

export const Container = styled.div`
  line-height: 1.5;
  font-weight: 600;
  width: 100%;
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
