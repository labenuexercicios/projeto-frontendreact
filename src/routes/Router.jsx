import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CheckOutPage from '../pages/CheckOutPage/CheckOutPage';
import { HomePage } from '../pages/HomePage/HomePage';
import PaginaErro from '../pages/PaginaErro';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/checkout" element={<CheckOutPage/>}/>
        <Route path="*" element={<PaginaErro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router