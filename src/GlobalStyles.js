import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap');


:root {
    --primeira: #FD841F;
    --segunda: #E14D2A;
    --terceira: #CD104D;
    --quarta: #9C2C77;
}

body{
  padding: 0;
  margin: 0; 
  font-family: 'Poppins', sans-serif;
}

`;
