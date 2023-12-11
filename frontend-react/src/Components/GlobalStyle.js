import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'blanka';
    font-style: normal;
    font-weight: 400;
    src: local('Blanka'), url(https://fonts.cdnfonts.com/s/18915/Blanka-Regular.woff) format('woff');
  }

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'blanka', fallback;
  
   
 }

 body {
   background-color: black;
   color: whitesmoke;
 
 }

 .App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
`


