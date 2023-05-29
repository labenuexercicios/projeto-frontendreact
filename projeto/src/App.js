import React from "react";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Home from "./components/ProductList/Home/Home";
import Cart from "./components/ShoppingCardt/Cart/Cart";

export default function app(){

  return(
    <div className=" App">
      <Filters/>
      <Home/>
      <Cart/>

    </div>
  );
}