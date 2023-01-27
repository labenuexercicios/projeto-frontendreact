import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Products from './components/Pruducts/Products';
import { GlobalStyle } from './GlobalStyles';
import { HomePage } from './Pages/HomePage/HomePage';
import { destiny } from './data/data';
import { useState } from 'react';



function App() {

 
  
  return (
    <div className="App">
        <GlobalStyle/>
       <HomePage destiny={destiny}  />
       
        {/* <CarPage/> */}
     </div>
  );
}

export default App;
