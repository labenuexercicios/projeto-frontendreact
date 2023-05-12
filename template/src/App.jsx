import './App.css';
import styled, {createGlobalStyle} from "styled-components";
import {Filter} from './Components/Filters/Filters';
import {Home} from './Components/ProductList/Home/Home';
import {Cart} from './Components/ShoppingCart/Cart/Cart';
import {produtos} from './assets/productList';

const GlobalStyle = createGlobalStyle`
  *{margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Main>
      <Filter/>
      <Home produtos={produtos}/>
      <Cart/>
    </Main>
    </>
    
  );
}

export default App;
