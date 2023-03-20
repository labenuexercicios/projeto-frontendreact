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
  flex-grow: 2;
  background-color: silver;
`

export const Banner = styled.section`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
`
