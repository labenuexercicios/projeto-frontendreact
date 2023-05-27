import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Filter } from './components/Filter/Filter'
import { Home } from './components/Home/Home'
import { Cart } from './components/Cart/Cart'
import productsList from './assets/producstList'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;
const Container = styled.div`
  background-color: black;
  display: flex;
  height: 110vh;
  width: 100vw;
  position: relative;
`;


function App() {
  const [minFilter, setMinFilter]=useState()
  const [maxFilter, setMaxFilter]=useState()
  const [searchFilter, setSearchFilter]=useState('')
  const [cart, setCart]=useState([])
  const [amount, setAmount]=useState(0)
  const [showCart, setShowCart]=useState(false)
 
  
 
  
  function handleCartClick(){
    setShowCart(!showCart)
  }

  function setCartWithShow(cart) {
    setCart(cart);
    setShowCart(true);
  }

  function handleCartClick(){
    setShowCart(!showCart)
  }

  function setCartWithShow(cart) {
    setCart(cart);
    setShowCart(true);
  }

 function filterProducts(products){
  return products.filter((product) => {
    if (minFilter && product.value < minFilter) {
      return false
    }
    if (maxFilter && product.value > maxFilter) {
      return false
    }
    if (searchFilter && !product.name.toLowerCase().includes(searchFilter.toLowerCase())){
      return false
    }
    return true
  });
 }

 const filteredProducts = filterProducts(productsList)

  return (
    <>
      <GlobalStyle/>
      <Header onCartClick ={handleCartClick}/>
      <Container>
        <Filter 
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home products={filteredProducts}
          cart={cart} 
          setCart={setCartWithShow}
          amount={amount}
          setAmount={setAmount}
        />
        {showCart ? (
          <Cart cart={cart} 
            setCart={setCart}
            amount={amount}
            setAmount={setAmount}
          />
        ):null}
      </Container>
    </>
  )
}

export default App
