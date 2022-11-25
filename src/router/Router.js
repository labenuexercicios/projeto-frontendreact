import { BrowserRouter, Routes, Route } from "react-router-dom"
import ToysPage from "../pages/ToysPage";
import ProductPage from "../pages/ProductPage"

function Router(){
    return(
        <BrowserRouter>
        <Routes> 
            <Route path="/product" element={<ProductPage/>}/>
            <Route path="/toys" element={<ToysPage/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;