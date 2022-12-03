import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ErroPage from '../pages/ErroPage'
import ProductPage from '../Pages/Product/ProductPage'
import CartPage from '../Pages/Cart/CartPage'
import { LoginPage } from '../Pages/LoginPage/LoginPage'
import {PayPage} from '../Pages/PayPage/Paypage'

export const Router = () => {
 
    return (
  
        <BrowserRouter>
            <Routes>
                <Route index element={<ProductPage/>} />
                <Route path="/carrinho" element={<CartPage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/paypage" element={<PayPage/>}/>
                {/* <Route path="*"element={<ErroPage/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}