import React from "react";
import {createGlobalStyle} from "styled-components"
import Geral from "./Components/Geral/Geral";

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;
}

li{
  list-style: none;
}`

function App() {
  return (
    <>
    <GlobalStyled/>
    <Geral/>
    </>
  );
}

export default App;
