import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ErroPage from '../pages/ErroPage'
import ProductPage from '../Pages/Product/ProductPage'
import CartPage from '../Pages/Cart/CartPage'
import camisetas from '../camisetas.json'

export const Router = () => {

    const [inputHeader, setInputHeader] = useState("")
    const [inputMinPrice, setInputMinPrice] = useState(-Infinity)
    const [inputMaxPrice, setInputMaxPrice] = useState(Infinity)
    const [sortByPrice, setSortByPrice] = useState("")
    const [cart, setCart] = useState([])

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

    return (
  
        <BrowserRouter>
            <Routes>
                <Route index element={<ProductPage 
                camisetas={camisetas}
                inputHeader={inputHeader}
                inputMaxPrice={inputMaxPrice}
                inputMinPrice={inputMinPrice}
                sortByPrice={sortByPrice}
                cart={cart}
                setInputHeader={setInputHeader}
                setInputMinPrice = {setInputMinPrice}
                setInputMaxPrice = {setInputMaxPrice}    
                setCart={setCart}
                addToCart={addToCart}
                setSortByPrice = {setSortByPrice}
                />} />
                <Route path="/carrinho" element={<CartPage 
                 cart={cart}
                 setCart={setCart}
                removeProductCart={removeProductCart}
                />} />
                {/* <Route path="*"element={<ErroPage/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}