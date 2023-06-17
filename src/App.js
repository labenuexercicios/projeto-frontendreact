import { createGlobalStyle } from "styled-components";
import Router from "./router/Router";
import React from "react";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden
  }
  body::-webkit-scrollbar {
  width: 5px;               
  }

  body::-webkit-scrollbar-track {
  background-image: url("https://i.pinimg.com/originals/96/48/17/964817c3d30f206246d49bf28ca1a96f.jpg");
  background-attachment: local;       
  }

  body::-webkit-scrollbar-thumb {
  background-color: white;    
  border-radius: 5px;       
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
