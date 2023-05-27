import { Styled, styled } from "styled-components"

export const FinishMessage = styled.div`
z-index: 30;
background-color: white;
position: fixed;
top: 25vh;
right: 30vw;
width: 600px;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 5%;
`
export const Background = styled.section`
z-index: 30;
position: fixed;
top: 0;
right: 0;
background: #00000083;
width: 100vw;
height: 100%;
`