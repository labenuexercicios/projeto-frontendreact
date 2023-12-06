import './App.css';
import Filters from './Components/Filters/Filters';
import { GlobalStyle } from './Components/GlobalStyle';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { StyledContainer } from './Components/ProductList/Home/HomeStyle';
import listOfProducts from "./Components/assents/productsList";
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';

export default function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [order, setOrder] = useState("");
  

    useEffect(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }, []);
  
   
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
  
  const filteredProducts = listOfProducts
    .filter(item => item.value && item.value.includes('R$ ') && parseFloat(item.value.replace('R$ ', '')) >= minFilter)
    .filter(item => item.value && item.value.includes('R$ ') && (!maxFilter || parseFloat(item.value.replace('R$ ', '')) <= maxFilter))
    .filter(item => item.name.toLowerCase().includes(searchFilter.toLowerCase()));


  return (

    <div className="App">
     <Header />
      <StyledContainer>
     
        <GlobalStyle />
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          listOfProducts={listOfProducts} 
          cart={cart}
          setCart={setCart}
          setAmount={setAmount}
          order={order}
          setOrder={setOrder}
          filteredProducts={filteredProducts}
          minFilter={minFilter}
        />

        <Cart
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
      </StyledContainer>
    </div>
  );
}


