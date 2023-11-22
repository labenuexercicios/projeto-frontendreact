import './App.css';
import Filters from './Components/Filters/Filters';
import { GlobalStyle } from './Components/GlobalStyle';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { StyledContainer } from './Components/ProductList/Home/HomeStyle';
import listOfProducts from "./Components/assents/productsList";
import { useState, useEffect } from 'react';


export default function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [order, setOrder] = useState("");
  const [sortedProducts, setSortedProducts] = useState([...listOfProducts]);
  const [sortedList, setSortedList] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
    

  return (

    <div className="App">
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
          sortedProducts={sortedProducts}
          setSortedProducts={setSortedProducts}
          sortedList={sortedList}
          setSortedList={setSortedList}
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


