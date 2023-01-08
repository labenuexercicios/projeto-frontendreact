import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
`

export const Container = styled.div`
display:flex;
flex-direction: column;
width: 100vw;
`
export const FixedMenu = styled.div`
position: fixed;
background-color:  #F5F5F5;
z-index: 1;
`