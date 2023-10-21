import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  font-family: 'Mina', sans-serif; 
*{
  margin: 0;
  padding: 0;

}

.App{
  width:100%;
  min-height: 100vh;
  margin: 0, auto;
  box-sizing: 0 2px 6px purple;
  padding: 0 15px;
  box-sizing: border-box;
}`;

export default GlobalStyle; 