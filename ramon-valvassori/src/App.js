import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Filters from './Components/Filters/Filters';
import Home from './Components/Product List/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Items from './Components/ShoppingCart/Items/Items';
import ProductCard from './Components/Product List/ProductCard/ProductCard';
import productList from './Components/assents/productList';

function App() {
  
  
  const [minFilter, setMinFilter] = useState() 
  const [maxFilter, setMaxFilter] = useState()
  const [cart, setCart] = useState()
  const [searchFilter, setSearchFilter] = useState()
  const [amount, SetAmount] = useState()
  return (
    <div className="App">
      <Filters/>
      <Home/>
      <Cart/>
      <ProductCard productList={productList}/>
      <Items/>
    </div>
    
  );
}

export default App;
