import React, { useState } from 'react';
import productList from '../../../assets/productList';
import ProductCard from '../ProductCard/ProductCard';
// import Filters from './Filters/Filters';
import Cart from '../../ShoppingCart/Cart/Cart';
import Filters from '../../Filters/Filters';
import Header from '../../Header/Header';
import {
   HomeStyle,
   CardPosition
   } from './homeStyle';

const Home = () => {
  const [minFilter, setMinFilter] = useState('');
  const [maxFilter, setMaxFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'minFilter') {
      setMinFilter(value);
    } else if (name === 'maxFilter') {
      setMaxFilter(value);
    } else if (name === 'searchFilter') {
      setSearchFilter(value);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotalValue(totalValue + product.value);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        if (item.quantity === 1) {
          setTotalValue(totalValue - item.value);
          return null;
        } else {
          setTotalValue(totalValue - item.value);
          item.quantity -= 1;
        }
      }
      return item;
    }).filter(Boolean);
    setCart(updatedCart);
  };

  const filterProducts = (products) => {
    return products.filter(product => {
      const meetsMinFilter = minFilter === '' || product.value >= minFilter;
      const meetsMaxFilter = maxFilter === '' || product.value <= maxFilter;
      const meetsSearchFilter = searchFilter === '' || product.name.toLowerCase().includes(searchFilter.toLowerCase());
      return meetsMinFilter && meetsMaxFilter && meetsSearchFilter;
    });
  };

  const filteredProducts = filterProducts(productList);

  return (
    <>
    <Header/>
    <HomeStyle>
      {/* <Filters
        minFilter={minFilter}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
        onInputChange={handleInputChange}
      /> */}
      <Filters/>
      <CardPosition>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </CardPosition>
      <Cart cart={cart} totalValue={totalValue} onRemoveItem={removeFromCart} />
    </HomeStyle>
    </>
  );
};

export default Home;
