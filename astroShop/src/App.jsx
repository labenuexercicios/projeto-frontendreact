/* eslint-disable no-unused-vars */
import GlobalStyles from './GlobalStyles';
import Filters from './Components/Filters';
import Home from './Components/ProductList/Home';
import ShoppingCart from './Components/ShoppingCart';
import { Container, LeftPanel, MiddlePanel, RightPanel } from './styles';
import productList from '../src/assents/productList'
import { useState } from 'react';

const App = () => {

  const [minFilter, setMinFilter] = useState('');
  const [maxFilter, setMaxFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [cart, setCart] = useState('');
  const [amount, setAmout] = useState('');

  const handleFilterChange = (filterName, value) => {
    if (filterName === 'minFilter') {
      setMinFilter(value);
    } else if (filterName === 'maxFilter') {
      setMaxFilter(value);
    }else if (filterName === 'searchFilter') {
      setSearchFilter(value);
    }
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <LeftPanel>
          <Filters 
            onChange={handleFilterChange}
            minFilter={minFilter} 
            maxFilter={maxFilter}
            searchFilter={searchFilter}
          />
        </LeftPanel>
        <MiddlePanel>
          <Home 
            productList={productList}
            minFilter={minFilter}
            maxFilter={maxFilter}
            searchFilter={searchFilter}
          />
          
        </MiddlePanel>
        <RightPanel>
          <ShoppingCart />
        </RightPanel>
      </Container>
    </>
  );
}

export default App;
