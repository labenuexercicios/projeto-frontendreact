//import logo from './logo.svg';
import './App.css';
import Filters from './Components/Filters/Filters';
import { GlobalStyle } from './Components/GlobalStyle';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { StyledContainer } from './Components/ProductList/Home/HomeStyle';

export default function App() {
  return (

    <div className="App">
      <StyledContainer>
        <GlobalStyle />
        <Filters />
        <Home />
        <Cart />
      </StyledContainer>
    </div>
  );
}


