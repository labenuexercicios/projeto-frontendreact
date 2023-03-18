import styled, { createGlobalStyle } from "styled-components";
import universe from "../src/images/universe_bg3.png"

export const GlobalStyled = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`

export const Application = styled.div`
  display: flex;
`

export const Container = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 700;
  background-image: white;
  background-attachment: local;
  background-size: cover;
  height: 300vh;
`

export const Banner = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;

`
export const WelcomePage = styled.h1`
  font-size: 3rem;

`