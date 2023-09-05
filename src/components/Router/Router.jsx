import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import EmptyCart from '../ShoppingCart/EmptyCart'
import PurchaseConfirmation from '../ShoppingCart/PurchaseConfirmation'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

export default function Router() {

    return (
        <Routes>
            <Route path='/' element={<Home/>} />            
            <Route path="/shoppingcart" element={<ShoppingCart/>} />
            <Route path="/emptycart" element={<EmptyCart/>} />
            <Route path="/purchaseconfirmation" element={<PurchaseConfirmation/>} />
        </Routes>
    )
}