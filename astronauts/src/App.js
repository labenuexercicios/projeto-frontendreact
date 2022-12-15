import React from "react";
import { GlobalStyled, Container } from "./GlobalStyled"
import {Header} from "./components/Header"
import { NavBar } from "./components/NavBar";
import { Slide } from "./components/Slide";
import { Main } from "./components/Main";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Container> 
      <Header/>
      <NavBar/>
      <Slide/>
      <Main/>
      </Container>
    </div>
  );
}

export default App;
