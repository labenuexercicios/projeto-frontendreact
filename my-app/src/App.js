import { createGlobalStyle } from "styled-components";
import Header from "./Header/Header";
import Homepage from "./Homepage/Homepage"


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
    return(
    <>
        <GlobalStyle />
        <Header />
         <Homepage />
    </>
    )
}

export default App;