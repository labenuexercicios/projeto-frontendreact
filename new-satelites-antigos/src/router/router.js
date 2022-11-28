import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { StorePage } from '../pages/StorePage'
import { LoginPage } from '../pages/LoginPage'
import { CartPage } from '../pages/CartPage'

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='store' element={<StorePage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}