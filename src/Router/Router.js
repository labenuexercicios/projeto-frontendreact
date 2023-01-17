import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
import Carrinho from "../Pages/Carrinho";

export default function Router() {
    
    const [carrinho, setCarrinho] = useState([])
    const[formulario, setFormulario]=useState({name:"", url:"", price:""})
    
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                    <Home carrinho ={carrinho} 
                    setCarrinho={setCarrinho}/>}
                />
                <Route
                    path="/carrinho"
                    element={
                    <Carrinho carrinho ={carrinho} 
                    setCarrinho={setCarrinho}/>}
                />

                {/* <Route
                    path="/*"
                    element={
                    <PageNotFound/>}
                /> */}

            </Routes>
        </BrowserRouter>
    );
}