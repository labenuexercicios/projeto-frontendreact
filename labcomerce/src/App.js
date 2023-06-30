import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import Home from './components/ProductList/Home/Home.js';
import Filters from './components/Filters/Filters.js'
import img1 from'./boneco-espacial.png';
import  Header  from "./components/ProductList/Home/Header/Header.js";
import produtos from "./ItensList.json";
import Cart from './components/ShoppingCart/Cart/Cart.js';
import Footer from './components/ProductList/Home/Footer/Footer.js';


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;

const Painel = styled.div`
display:flex;
margin-top: 10px;
gap: 10px;
`



function App() {
 const [minFilter,setMinFilter] = useState("")
 const [maxFilter,setMaxFilter] = useState("")
 const [searchFilter,setSearchFilter] = useState("")
 const [cart, SetCart] = useState([])
 const[amount,setAmount] = useState(0)
 const [productList, setProductList] = useState([produtos])

 const localStorageSave= ()=>{
  const stringCart = JSON.stringify(cart)
  localStorage.setItem("Cart", stringCart);
}
const getItensLocalStorage = () => {
  const stringCArt = localStorage.getItem('Cart')
  const cartArray = JSON.parse(stringCArt)//Trasforma de string para Array
 if(cartArray){SetCart(cartArray)}
}

useEffect(()=>{cart.length && localStorageSave()},[cart])
useEffect(()=>{getItensLocalStorage()},[])

 

  
  return (
    <>
    <GlobalStyle />
    <Header></Header> 
    <Painel>
    <Filters 
    minFilter={minFilter} 
    setMinFilter={setMinFilter}
    maxFilter={maxFilter}
    setMaxFilter={setMaxFilter}
    searchFilter={searchFilter}
    setSearchFilter={setSearchFilter}
    
    ></Filters>
    <Home produtos = {produtos} amount={amount} setAmount={setAmount} cart={cart} setCart={SetCart} 
    minFilter={minFilter} 
    setMinFilter={setMinFilter}
    maxFilter={maxFilter}
    setMaxFilter={setMaxFilter}
    searchFilter={searchFilter}
    setSearchFilter={setSearchFilter}></Home>
    <Cart cart ={cart} setCart={SetCart}></Cart>
    </Painel>
    <Footer></Footer>
   
   
    
    </>
  )
}

export default App;
