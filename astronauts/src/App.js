import React, { useState } from "react";
import { GlobalStyled, Container } from "./GlobalStyled"
import {Header} from "./components/Header"
import { NavBar } from "./components/NavBar";
import { Slide } from "./components/Slide";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import product from "./data"

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("")
  const [order, setOrder] = useState("")
  return (
    <div>
      <GlobalStyled />
      <Container> 
      <Header setName={setName}/>
      <NavBar setType={setType} setOrder={setOrder}/>
      <Slide/>
      <Main products={product} type={type} order={order} name={name}/>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
