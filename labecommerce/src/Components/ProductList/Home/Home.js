import React, { useState, useEffect} from 'react';
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
import Footer from '../../Footer/Footer';
import InfoProdutos from '../InfoProdutos/InfoProdutos';
import { filterProducts, sortProducts } from '../../../helper';

const Home = () => {
  const [minFilter, setMinFilter] = useState('');
  const [maxFilter, setMaxFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sortBy, setSortBy] = useState('');

  const applyFilters = (minValue, maxValue, searchValue) => {
    const filtered = productList.filter((product) => {
      const { value, name } = product;
      return (
        value >= minValue &&
        value <= maxValue &&
        name.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const filtered = filterProducts(productList, minFilter, maxFilter, searchFilter);
    const sorted = sortProducts(filtered, sortBy);
    setFilteredProducts(sorted);
  }, [minFilter, maxFilter, searchFilter, sortBy]);

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

  
  const handleFilterChange = (filterName, value) => {
    if (filterName === 'minPrice') {
      setMinFilter(value);
    } else if (filterName === 'maxPrice') {
      setMaxFilter(value);
    }
  };

  const handleSearchChange = (searchValue) => {
    setSearchFilter(searchValue);

  };

  const handleSortChange = (sortValue) => {
  setSortBy(sortValue);

 };


  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        return [...prevCart];
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  return (
    <>
    <Header/>
    <InfoProdutos
       ordination={sortBy}
       onOrdinationChange={(e)=> setSortBy (e.target.value)}
       //passando os produtos filtrados e ordenados
       productsList={filteredProducts}
    />
    <Filters
      minFilter={minFilter}
      maxFilter={maxFilter}
      searchFilter={searchFilter}
      onInputChange={handleInputChange}
      onFilterChange={handleFilterChange}
      onSearchChange={handleSearchChange}
      onSortChange={handleSortChange}
      onApplyFilters={applyFilters}
    />
    <HomeStyle>
      <CardPosition>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
        
      </CardPosition>
      {/* <Cart cart={cart} totalValue={totalValue} onRemoveItem={removeFromCart} /> */}
      <Cart cart={cart} setCart={setCart} 
      />
    
    </HomeStyle>
    <Footer/>
    </>
  );
};

export default Home;
