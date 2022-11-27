import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../Pages/Cart/CartPage";
import ProductPage from "../Pages/Product/ProductPage";

export const Router = (props) => {

  const {camisetas, 
    inputHeader, 
    inputMaxPrice, 
    inputMinPrice, 
    sortByPrice
  } = props

  return (
    <BrowserRouter>
        <Routes>
            <Route index element={
            <ProductPage
            camisetas={camisetas}
            inputHeader={inputHeader}
            inputMaxPrice={inputMaxPrice}
            inputMinPrice={inputMinPrice}
            sortByPrice={sortByPrice}
            />}/>
            <Route path="/carrinho" element={<CartPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
