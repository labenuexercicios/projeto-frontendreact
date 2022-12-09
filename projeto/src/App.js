import React from "react";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Header } from "./Components/Header/Index.js";
import {Products} from "./Components/Products/Index.js"

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


function App() {

  const [querry, setQuerry] = useState("")
  const [cart, setCart] = useState ([])
  
  const addToCart = (newproduct,value) => {
    const newCart = [...cart]
    Number(value)
    const productsFound = newCart.find((productsInCart)=> productsInCart.id === newproduct.id)
    if (!productsFound){
      const addProduct = {...newproduct, quantity: value}
      newCart.push(addProduct)
    }else {
      return productsFound.quantity = productsFound.quantity + value  
    }
    setCart (newCart)
  }

  const deleteItem = (productToDelete) =>{
    const newCart = [...cart]
    const indexfound = newCart.findIndex((productInCart)=>productInCart.id === productToDelete.id)
    newCart.splice(indexfound,1)
    setCart (newCart)
}

const clearAllCart = () =>{
  setCart ([])
}
const cartQuantity = (item,value)=>{
  const newCart = [...cart]
  Number(value)
  const productFound = newCart.find((productsInCart)=>productsInCart.id===item.id)
  if (productFound){
    return productFound.quantity = value
  }
  setCart(newCart)
}
  return (
    <>
     <GlobalStyled/>
     <Header
     setQuerry ={setQuerry}
     cart={cart}
     deleteItem={deleteItem}
     clearAllCart ={clearAllCart}
     cartQuantity ={cartQuantity}/>
     <Products
     querry={querry}
     addToCart={addToCart}/>
    </>
  );
}

export default App;
