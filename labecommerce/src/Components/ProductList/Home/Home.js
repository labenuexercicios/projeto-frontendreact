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

  // const sorted = sortProducts(productList, sortValue);
  // setFilteredProducts(sorted);
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
  const sortProducts = (products, sortBy) => {
    return [...products].sort((a, b) => {
      if (sortBy === 'asc') {
        return a.value - b.value;
      } else if (sortBy === 'desc') {
        return b.value - a.value;
      } else {
        return 0;
      }
    });
  };
  
    // const filtered = productList.filter((product) => {
    //   const { value, name } = product;
    //   return (
    //     value >= minValue &&
    //     value <= maxValue &&
    //     name.toLowerCase().includes(searchValue.toLowerCase())
    //   );
    // });

    // setFilteredProducts(filtered);
  


  return (
    <>
    <Header/>
    <InfoProdutos/>
    <Filters
      minFilter={minFilter}
      maxFilter={maxFilter}
      searchFilter={searchFilter}
      onInputChange={handleInputChange}
      // onApplyFilters={applyFilters}
      onFilterChange={handleFilterChange}
      onSearchChange={handleSearchChange}
      onSortChange={handleSortChange}
      onApplyFilters={applyFilters}
    />
    <HomeStyle>
      {/* <Filters
        minFilter={minFilter}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
        onInputChange={handleInputChange}
      /> */}
      <CardPosition>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          />
        ))}
        
      </CardPosition>
      {/* <Cart cart={cart} totalValue={totalValue} onRemoveItem={removeFromCart} /> */}
      <Cart cart={cart} setCart={setCart} />
    </HomeStyle>
    <Footer/>
    </>
  );
};

export default Home;
