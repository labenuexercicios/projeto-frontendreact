import React from 'react';

import './App.css';

import {HeaderNav} from './Partials/HeaderNav'
import {Footer} from './Partials/Footer'
import { Products } from './Views/Store/Products/index';
import { Cart } from './Views/Store/Cart/index';
import { GlobalStyled } from './globalStyled.js';
import { useState } from'react'


function App() {

const  [views, setViews] = useState(1)


const handleClick = () => {
  setViews(views + 1)
}


     return (

  <div>
    <GlobalStyled/>
 <HeaderNav/>
   {handleClick !== 1? <Products/> : <Cart/>}
   <Footer/>

</div>
  );
}

export default App;
