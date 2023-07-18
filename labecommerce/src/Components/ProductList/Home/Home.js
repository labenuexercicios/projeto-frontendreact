import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Filters from '../components/Filters';
import productList from '../assets/productList';

const Home = () => {
  const [products, setProducts] = useState(productList);
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({ minPrice: '', maxPrice: '' });
  const [sortOrder, setSortOrder] = useState('');

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { product: product, quantity: 1 },
      ]);
    }
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.product.id !== itemToRemove.product.id)
    );
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };
  
 

  const applyFiltersAndSort = () => {
    let filteredProducts = [...productList];

    if (filters.minPrice !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseInt(filters.minPrice)
      );
    }

    if (filters.maxPrice !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseInt(filters.maxPrice)
      );
    }

    if (sortOrder === 'asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

   
    setProducts(filteredProducts);
  };

  return (
    <div className="home">
      <h1>E-commerce</h1>
      <div className="content">
        <Filters
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
      
        />
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};


      
      {/* <div> // Fiz a chamada no componente InfoProdutos
        <InfoProdutos ordination={ordination} onOrdinationChange={handleOrdinationChange} />
      </div> */}

    
  // <>
    
  //   <HomeStyle>
      
  //     <ProductCard/>
  //     <ProductCard/>
  //     <ProductCard/>
  //     <ProductCard/>
  //     <ProductCard/>
  //     <ProductCard/>

  //   </HomeStyle>
  // </>
  // )


export default Home
