import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { AppStyled } from './App.styled'



function App() {

  

  return (
    <>
      <Header />
      <AppStyled>
        <Filters />
        <Home/> 
        <Cart/>
      </AppStyled>
      <Footer />
    </>
  );
}

export default App;
