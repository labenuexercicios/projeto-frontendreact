import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { AppStyled } from './App.styled'
import ProductList from './assets/ProductList';


function App() {

  return (
    <div>
      <Header />
      <AppStyled>
        <Filters />
        <Home 
        name={ProductList.name} 
        id={ProductList.id}
        price={ProductList.price}
        description={ProductList.description}
        image={ProductList.image} /> 
        <Cart/>
      </AppStyled>
      <Footer />
    </div>
  );
}

export default App;
