import React from 'react';
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import ProductCard from './Components/ProductList/Home/ProductCart/ProductCard'
import Items from './Components/ShoppingCart/Cart/Items/Items'

function App() {
  return (
    <>
      <Filters />
      <Home />
      <ProductCard />
      <Cart />
      <Items />
    </>
  );
}

export default App;
