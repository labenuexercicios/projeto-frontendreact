import { createGlobalStyle } from "styled-components";
import {Pagina} from './Pagina';
import GlobalFonts from './fonts/fonts';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalFonts/>
      <Pagina/>
    </div>
  );
}

export default App;
