import React from 'react'
import { useState } from 'react'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import GlobalStyle,{PageStyle} from './globalStyles'
import productsList from './assents/productsList';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import InfoProdutos from './Components/ProductList/InfoProdutos/InfoProdutos'



function App ()  {
    const [ searchFilter, setSearchFilter] = useState('');
    const [minFilter, setMinFilter] = useState(0);
    const [maxFilter, setMaxFilter] = useState(0);
    const [searchResults, setSearchResults] = useState([]);

       
    // const [productsList, setProductsList] = useState(productsList);
    const [amount, setAmount] = useState(0);
    const [cart, setCart] = useState([]);

    // console.log (searchFilter)
    const handleSearch = (event) => {
      const  searchFilter = event.target.value;
      setSearchFilter( searchFilter);
  
    const results = productsList.filter((product) =>
        product.name.toLowerCase().includes( searchFilter.toLowerCase())
      )&&  (minFilter === '' || productsList.price >= parseInt(minFilter)) &&
      (maxFilter === '' || productsList.price <= parseInt(maxFilter))
    
      setSearchResults(results);
    };
     const handleClear = () => {
      setMinFilter('');
      setMaxFilter('');
      setSearchFilter('');
      setSearchResults([]);
    };
      
   
  
  return (
    
    <>
      <GlobalStyle/>

      <Header/>
      <InfoProdutos/>
      <PageStyle>
      <Filter 
        products={searchResults}
        searchFilter={ searchFilter}
        onClear={handleClear}
        minFilter={minFilter}
        maxFilter={maxFilter}
      
        handleSearchFilterChange={handleSearch}
        setMinFilter={setMinFilter}
        setMaxFilter={setMaxFilter}
        setSearchFilter={setSearchFilter}
      
      />
      <Home 
        products={productsList}
        
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        
      />
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />
      <Footer/>
        
      </PageStyle>
      
     
    </>
  )
}

export default App