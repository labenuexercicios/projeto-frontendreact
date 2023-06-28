import React, { useState } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { AppStyled } from './App.styled'
import ProductList from './assets/ProductList';
import ProductCard from './Components/ProductList/Home/ProductCard/ProductCard';


function App() {

  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState('')
  const [amount, setAmount] = useState('')

  const renderArray = ProductList
  .map((item, index) => {
    return <ProductCard key={index} item={item}/>
  })

  console.log(renderArray)


  return (
    <div>
      <Header searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
      <AppStyled>
        <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter}/>
        <Home renderArray={renderArray}/> 
        <Cart cart={cart} setCart={setCart} amount={amount} setAmount={setAmount}/>
      </AppStyled>
      <Footer />
    </div>
  );
}

export default App;
