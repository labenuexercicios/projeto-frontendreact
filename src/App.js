import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Main } from "./Components/Main/Main.js";
import { Footer } from "./Components/Main/Components/Footer/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
