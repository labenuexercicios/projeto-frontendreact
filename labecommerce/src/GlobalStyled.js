import styled,{ createGlobalStyle } from "styled-components";
import { PTmono } from "./fonts/fonts";


const GlobalStyle = createGlobalStyle`
  ${PTmono}
  body {
    font-family: 'PT Mono', monospace;
  }
`;

export default GlobalStyle;
export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  background-image: url("https://starwalk.space/gallery/images/deep-sky-objects-in-october-2021/1920x1080.jpg");
  background-repeat: no-repeat;
  background-size:cover;
`;