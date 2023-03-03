import React from 'react';
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { GlobalStyles } from './GlobalStyles';
import styled from 'styled-components';


const Principal = styled.section`
  display: flex;
  justify-content: space-between;
`

function App() {
  return (
    <Principal>
      <GlobalStyles/>
      <Filters/>
      <Home/>
      <Cart/>
    </Principal>
  );
}

export default App;
