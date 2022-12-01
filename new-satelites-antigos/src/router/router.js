import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/Home/HomePage'
import { StorePage } from '../pages/StorePage/StorePage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { CartPage } from '../pages/CartPage/CartPage'
import {ErrorPage} from '../pages/ErrorPage'

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='store/' element={<StorePage/>}/>
        <Route path='login/' element={<LoginPage/>}/>
        <Route path='cart/' element={<CartPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        {/* Rota erro */}
      </Routes>
    </BrowserRouter>
  )
}