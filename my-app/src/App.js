import React, { useState } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { AppStyled } from './App.styled'
import ProductList from './assets/ProductList';
import ProductCard from './Components/ProductList/Home/ProductCard/ProductCard';



function App() {

  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [amount, setAmount] = useState(0)
  const [valorMin, setValorMin] = useState('')
  const [valorMax, setValorMax] = useState('')
  const [cart, setCart] = useState([])

  
  

  const handleValorMin = (event) => {
    setValorMin(event.target.value);
  }

  const handleValorMax = (event) => {
    setValorMax(event.target.value);
  }


  const filteredProducts = ProductList.filter((item) => {
    if(item.price >= valorMin && item.price <= valorMax){
      return <ProductCard/>
    } else if (valorMin === '' || valorMax === ''){
      return item
    } else {
      return ('')
    }
  })

  
  const addToCart = (produto) => {
    const newProduct = cart
    .find((item) => produto.id === item.id)

    if(newProduct === undefined) {
      setCart([...cart, {...produto, amount: 1}])
    } else {
      const newCart = cart.map((item) => {
        if(produto.id === item.id){
          return{...newProduct, amount:newProduct.amount + 1}
        } else {
          return item
        }
      })

      setCart(newCart)
    }
  }

  
  return (
    <div>
      <Header 
      searchFilter={searchFilter} 
      setSearchFilter={setSearchFilter}/>

      <AppStyled>
        
        <Filters 
        minFilter={minFilter} 
        setMinFilter={setMinFilter} 
        maxFilter={maxFilter} 
        setMaxFilter={setMaxFilter}
        ProductList={ProductList}
        handleValorMax={handleValorMax}
        handleValorMin={handleValorMin}
        valorMin={valorMin}
        valorMax={valorMax} />

        <Home 
        addToCart={addToCart} 
        ProductList={ProductList}
        filteredProducts={filteredProducts}
        /> 

        <Cart 
        cart={cart} 
        setCart={setCart} 
        amount={amount} 
        setAmount={setAmount}/>

      </AppStyled>
      
      <Footer />
    </div>
  );
}

export default App;
