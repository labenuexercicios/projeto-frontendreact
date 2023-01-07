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
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)

  return (
    <div>
      <GlobalStyled />
      <Container> 
      <Header setName={setName}/>
      <NavBar setType={setType} setOrder={setOrder} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
      <Slide/>
      <Main products={product} type={type} order={order} name={name} minPrice={minPrice} maxPrice={maxPrice}/>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
