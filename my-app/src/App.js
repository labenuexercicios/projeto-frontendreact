import {createGlobalStyle} from "styled-components"
import MainPage from './Components/MainPage';

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;
}

li{
  list-style: none;
}`

function App() {
  return (
    <>
    <GlobalStyled/>
    <MainPage/>
    </>
  );
}

export default App;