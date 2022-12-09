import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from "../Pag/Home";
import Cart from "../Pag/Cart";
import Filter from "../Pag/Filter";
import Infoprod from "../Pag/Infoprod";
import Login from "../Pag/Login";
import Shop from "../Pag/Shop";
import Sign from "../Pag/Sign";
import Check from "../Pag/Check";

const Navrout = () =>{
    return <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='filter' element={<Filter/>}/>
        <Route path='shop/:id' element={<Infoprod/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sing' element={<Sign/>}/>
        <Route path='check' element={<Check/>}/>
        </Routes> 
    };

export default Navrout

