
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import Filters from './components/Filters';
import { useState, useEffect } from 'react';

function App() {
  const { products } = data;

  const storedItems = JSON.parse(localStorage.getItem('cartPrd')) || [];
  
  const [cartPrd, setcartPrd] = useState(storedItems);
  const [Search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  
  useEffect(() => {
    localStorage.setItem('cartPrd', JSON.stringify(cartPrd));
  }, [cartPrd]);

  const Add = (product) => {
    const exist = cartPrd.find((x) => x.id === product.id);
    if (exist) 
    {
      setcartPrd
      (
        cartPrd.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      );
    } else {
      setcartPrd([...cartPrd, { ...product, qty: 1 }]);
    }
  };

  const removePrd = (product) => {
    const exist = cartPrd.find((x) =>  x.id === product.id);
    if  (exist.qty === 1) 
    {
      setcartPrd(cartPrd.filter((x) => x.id !== product.id));
    }  else  {
      setcartPrd
      (
        cartPrd.map((x) =>  (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
      );
    }
  };

  const hndlSearchInput = (query) => 
  {
    setSearch(query);
  };

  const minPriceInp = (min) => 
  {
    setMinPrice(min);
  };

  const maxPriceInp = (max) => 
  {
    setMaxPrice(max);
  };

  const onClear = () => 
  {
    setSearch('');
    setMinPrice(0);
    setMaxPrice(Infinity);
  };

  return (
    <div className="App">
      
      <div className="row">
        <Filters
          onSearch={hndlSearchInput}
          onMinPriceCh={minPriceInp}
          onMaxPriceCh={maxPriceInp}
        />
        <Main
          products={products}
          Add={Add}
          Search={Search}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onClear={onClear}
        />
        <Cart cartPrd={cartPrd} removePrd={removePrd}></Cart>
      </div>
    </div>
  );
}

export default App;
