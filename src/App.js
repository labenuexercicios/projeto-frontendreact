import React, { useState } from "react";
import { createGlobalStyle } from 'styled-components';
import {Header} from "./Components/Header/Header";
import { PrincipalCard } from "./Components/PrincipalCard/PrincipalCard";


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
function App() {
  const [search, setSearch] = useState("")
  
  return (
    <>
      <GlobalStyle />
      <Header
      search={search}
      setSearch={setSearch}
      />
      <PrincipalCard/>
    </>
  )
}

export default App;
