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
    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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

   
      const handleminFilterChange = (event) => {
      setMinFilter(event.target.value);
    };
  
      const handlemaxFilterChange = (event) => {
      setMaxFilter(event.target.value);
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
        onMinFilterChange={handleminFilterChange}
        onMaxFilterChange={handlemaxFilterChange}
        onSearch={handleSearch}
      
        />
        <Home products={productsList}/>
        <Cart/>
        <Footer/>
        
      </PageStyle>
      
     
    </>
  )
}

export default App