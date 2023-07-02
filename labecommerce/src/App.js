import React, { useEffect } from 'react'
import { useState} from 'react'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import GlobalStyle,{PageStyle} from './globalStyles'
import productsList from './assents/productsList';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import InfoProdutos from './Components/ProductList/InfoProdutos/InfoProdutos'
import ProductCard from './Components/ProductList/ProductCard/ProductCard'




function App ()  {
    const [ searchFilter, setSearchFilter] = useState('');
    const [minFilter, setMinFilter] = useState(0);
    const [maxFilter, setMaxFilter] = useState(0);
    const [searchResults, setSearchResults] = useState([]);
    const [amount, setAmount] = useState(0);
    const [cart, setCart] = useState([]);
    const [Items, setItems] = useState([]);
   

    // const [productsList, setProductsList] = useState(productsList);

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


    const addToCart = (product)=>{
      const newProduct = cart.find ((item)=>item.id === product.id)
      if(newProduct===undefined){
        setCart([...cart,{product, amount:1}])
      }else{
        const newCart = cart.map((item)=>{
          if(item.id === product.id){
            return {...newProduct, amount:newProduct.amount+1}
          }else{
            return item
          }

        })
        setCart(newCart)
      }

      const productsCard = productsList.map((product)=>{
        return(
          <ProductCard
          key={product.id}
          product={product}
          />
        )
      })
      const Cart = cart.map((product)=>{
        return(
          <Cart
          key={product.id}
          product={product}
          />
        )
      })
    
    }
 
    
  
return (
    
    <>
      <GlobalStyle/>
     
      <Header/>
      <InfoProdutos productsList={productsList}/>
      <PageStyle>
      <Filter 
        searchResults={searchResults}
        searchFilter={ searchFilter}
        onClear={handleClear}
        minFilter={minFilter}
        maxFilter={maxFilter}
        handleSearchFilterChange={handleSearch}
        setMinFilter={setMinFilter}
        setMaxFilter={setMaxFilter}
        setSearchFilter={setSearchFilter}
        products={productsList}
       
      
      />
      <Home 
        productsList={productsList}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}

      
        
      />
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        productsList={productsList}
     
       
      />
      <Footer/>
        
      </PageStyle>
      
     
    </>
  )
}

export default App