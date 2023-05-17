/* eslint-disable no-unused-vars */
import GlobalStyles from './GlobalStyles';
import Filters from './Components/Filters';
import Home from './Components/ProductList/Home';
import ShoppingCart from './Components/ShoppingCart';
import { Container, LeftPanel, MiddlePanel, RightPanel } from './styles';
import productList from '../src/assents/productList'
import { useState } from 'react';

function App() {

  const [minFilter, setMinFilter] = useState('');
  const [maxFilter, setMaxFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [cart, setCart] = useState('');
  const [amount, setAmout] = useState('');

  return (
    <>
      <GlobalStyles />
      <Container>
        <LeftPanel>
          <Filters />
        </LeftPanel>
        <MiddlePanel>
          <Home productList={productList}/>
        </MiddlePanel>
        <RightPanel>
          <ShoppingCart />
        </RightPanel>
      </Container>
    </>
  );
}

export default App;
