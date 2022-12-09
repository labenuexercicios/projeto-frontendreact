import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErroPage } from '../Pages/ErroPage/ErroPage'
import ProductPage from '../Pages/Product/ProductPage'
import CartPage from '../Pages/Cart/CartPage'
import { LoginPage } from '../Pages/LoginPage/LoginPage'
import { PayPage } from '../Pages/PayPage/Paypage'
import { CofirmPage } from '../Pages/ConfirmPage/CofirmPage'

export const Router = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<ProductPage />} />
                <Route path="/carrinho" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/paypage" element={<PayPage />} />
                <Route path="/confirmpayment" element={<CofirmPage />} />
                <Route path="*" element={<ErroPage />} />
            </Routes>
        </BrowserRouter>
    )
}