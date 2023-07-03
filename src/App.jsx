import React, { useState, useEffect, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Components/Header/Header';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Footer from './Components/Footer/Footer';
import products from './assets/productsList.jsx';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App() {
  const [minFilter, setMinFilter] = useState('');
  const [maxFilter, setMaxFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (productId) => {
    const productInCartIndex = cart.findIndex((product) => productId === product.id);

    if (productInCartIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productInCartIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const productToAdd = products.find((product) => productId === product.id);
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }

    setAmount(amount + 1);
  };

  const handleRemoveFromCart = (productId) => {
    const productInCartIndex = cart.findIndex((product) => productId === product.id);

    if (productInCartIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productInCartIndex].quantity -= 1;
      if (updatedCart[productInCartIndex].quantity === 0) {
        updatedCart.splice(productInCartIndex, 1);
      }
      setCart(updatedCart);
      setAmount(amount - 1);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (showAlert) {
      window.alert('A Outer Space agradece a sua compra!');
      setShowAlert(false);
    }
  }, [showAlert]);

  const handleCheckoutAlert = () => {
    if (cart.length > 0) {
      setCart([]);
      setAmount(0);
      setShowAlert(true);
    }
  };

  const saveLocalStorage = useCallback(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  useEffect(() => {
    saveLocalStorage();
  }, [saveLocalStorage]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Filters
        minFilter={minFilter}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
        setMinFilter={setMinFilter}
        setMaxFilter={setMaxFilter}
        setSearchFilter={setSearchFilter}
      />
      <Home
        products={products}
        minFilter={minFilter}
        maxFilter={maxFilter}
        nameFilter={searchFilter}
        onAddProductToCart={handleAddToCart}
      />
      <Cart
        cart={cart}
        amount={amount}
        onRemoveProductFromCart={handleRemoveFromCart}
        onCheckoutClick={handleCheckoutAlert}
        showAlert={showAlert}
        onCloseAlert={handleAlertClose}
      />
      <Footer />
    </div>
  );
}
