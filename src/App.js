import React, { useState, useEffect } from 'react';
import { Router } from './Router/Router';
import {GlobalContext} from './contexts/GlobalContext'
import camisetas from './camisetas.json'
import { GlobalStyles } from './GlobalStyles';
import users from './users.json'


function App() {

    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
    const [inputHeader, setInputHeader] = useState("")
    const [inputMinPrice, setInputMinPrice] = useState(-Infinity)
    const [inputMaxPrice, setInputMaxPrice] = useState(Infinity)
    const [sortByPrice, setSortByPrice] = useState("")
    const [cart, setCart] = useState(cartFromLocalStorage)

    const total = cart.reduce((acc, product) => (product.price * product.quantity) + acc, 0)

    const frete = total * 0.05
  
    const totalQuantity = cart.reduce((acc, product) => (product.quantity) + acc, 0)
  

    useEffect(()=>{
      localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (productToAdd, size) => {
      const newCart = [...cart]
  
      const productFound = newCart.find((productInCart)=>productInCart.id === productToAdd.id && productInCart.cartSize === size)
  
      if (!productFound){
        const newProduct = {...productToAdd, cartSize: size, quantity: 1}
        newCart.push(newProduct)
      } else {
        console.log(productFound.cartSize)
        if(productFound.cartSize === size){
          console.log("entrou")
          productFound.quantity ++
        } else {
          console.log("entrou no else 2")
          const newProduct = {...productToAdd, cartSize: size, quantity: 1}
          newCart.push(newProduct) 
        }}
        
        setCart(newCart)
        JSON.stringify(newCart)
        localStorage.setItem(cart, newCart)
      }
        
        const removeProductCart = (productToRemove) =>{
          const newCart = [...cart]
          const productRemove = newCart.find ((productInCart)=> productInCart.id === productToRemove.id)
          const productRemoveIndex = newCart.findIndex ((productInCart)=> productInCart.id === productToRemove.id)
          console.log(productRemove)
          newCart.splice(productRemoveIndex, 1)
          setCart(newCart)
        }

  const context ={
    camisetas,
    inputHeader,
    setInputHeader,
    inputMinPrice,
    setInputMinPrice,
    inputMaxPrice,
    setInputMaxPrice,
    sortByPrice,
    setSortByPrice,
    cart,
    setCart,
    addToCart,
    removeProductCart,
    total,
    frete,
    totalQuantity,
    users
  }

  return (
  <GlobalContext.Provider value={context}>
    <GlobalStyles/>
    <Router/>
  </GlobalContext.Provider>
  )
}

export default App;
