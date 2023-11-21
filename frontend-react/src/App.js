//import logo from './logo.svg';
import './App.css';
import Filters from './Components/Filters/Filters';
import { GlobalStyle } from './Components/GlobalStyle';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { StyledContainer } from './Components/ProductList/Home/HomeStyle';
import { useState } from 'react';
import listOfProducts from "./Components/assents/productsList";


export default function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [order, setOrder] = useState("");
  const [sortedProducts, setSortedProducts] = useState([...listOfProducts]);
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


