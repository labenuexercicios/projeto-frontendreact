import React, {useState} from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { createGlobalStyle } from "styled-components";
import { Body } from "./styled";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [searchByName, setSearchByName] = useState("");
  return (
    <div>
      <Body>
        <Header searchByName={searchByName} setSearchByName={setSearchByName}/>
        <Main />
        <Footer />
        <GlobalStyled />
      </Body>
    </div>
  );
}

export default App;
