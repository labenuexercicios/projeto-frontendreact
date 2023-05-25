import './App.css';
import styled, {createGlobalStyle} from "styled-components";
import {Filter} from './Components/Filters/Filters';
import {Home} from './Components/ProductList/Home/Home';
import {Cart} from './Components/ShoppingCart/Cart/Cart';
import {products} from './assets/productList';
import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { Masculino } from './Components/ProductList/Home/Masculino';

const GlobalStyle = createGlobalStyle`
  *{margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 6fr;
`

function App() {
  const [minFilter,setMinFilter]=useState("");
  const [maxFilter,setMaxFilter]=useState("");
  const [searchFilter,setSearchFilter]=useState("");
  const [cart,setCart]=useState([]);
  const [amount,setAmount]=useState(0);
  const [quantity,setQuantity] = useState("")
  const [screen, setScreen] = useState("Homepage");

  const addProduct = (product) => {
    if (product.quantity>=1) {product.quantity= product.quantity + 1; setQuantity(product.quantity);setAmount(amount+product.value)}
    else{product.quantity=1; setQuantity(product.quantity); setCart([...cart, product]); setAmount(amount+product.value)}};

  const removeProduct=(product)=>{
    if (product.quantity>1) {product.quantity=product.quantity-1; setQuantity(product.quantity);setAmount(amount-product.value)}
    else {product.quantity=0; const listaFiltrada = cart.filter((item) => item !== product); setCart(listaFiltrada); setAmount(amount-product.value)}
  }


const changeScreen = (newScreen) => { setScreen(newScreen)}

const renderScreen = () => {
switch (screen) {
case "Homepage":  
return (<></>);
case "Cart":
return ( <Cart cart={cart} amount={amount} removeProduct={removeProduct} changeScreen={changeScreen}/> );
default:
return <p>Tela inválida</p>}}


  return (
    <>
    <GlobalStyle/>
    <Header changeScreen={changeScreen}/>
    
    <Main>
      <Filter minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
      <Home  productsFiltered={products
      .filter((product)=>{return product.name.toLowerCase().includes(searchFilter.toLowerCase())})
      .filter((product)=>{return product.value>minFilter})
      .filter((product)=>{return maxFilter? product.value<maxFilter: product})} 
      addProduct={addProduct}/>
      {renderScreen()}
    </Main>
    </>
    
  );
}

export default App;
