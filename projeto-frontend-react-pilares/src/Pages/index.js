import React from 'react'
import {Fragments, Components, useState } from 'react'
import styled from 'styled-components'
import {Centered, Aside, Section} from './styled'


import logo1 from './../assets/logo1.png'
import {Cart} from './../Components/ShoppingCart/Cart/index'
import {Home} from './../Components/ProductList/Home/index'


export function Main(){
const [section, setSection] = useState('BEM-VINDO')
const [content, setContent] =useState(Cart)
console.log(section)
const changeSection1 = ()=>{
  setSection("Home")
  setContent(Home)
}
console.log(section)
console.log(content)

const changeSection2 = ()=>{
  setSection("PRODUTOS")
  setContent(Cart)
}
console.log(section)
const changeSection3 = ()=>{
  setSection("COMPRAS")
}
console.log(section)
const changeSection4 = ()=>{
  setSection("RESULTADOS")
}
console.log(section)
return(
<div className="App">
<Centered>

 
<nav  class="menu">
    
<div>
<img src={logo1} alt="logo astro-side" class="logoBrand" />

</div>
      <nav>
 <button onClick={changeSection1}>HOME</button>
    <button  onClick={changeSection2}>PRODUTOS</button>   
    <button  onClick={changeSection3}>COMPRAS</button> 
    </nav><div>
      <input/> <button onClick={changeSection4}>
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
 

   
      </div>
</nav>

<main><header>  <h1>Astro.SIDE</h1>

  <img src={logo1} alt="logo astro-side" class="logoBrand" />
   <h2>{section}</h2> 
</header>
  </main>



<Aside>



</Aside>


    <Section>
      <li>
      {content}
    </li>
    <li>
      {content}
    </li>

    <li>
      {content}
    </li>
    </Section>

 

</Centered>
	  <footer>
    <ul class="social-icons-list">
    <li>
      <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-google-plus-g"></i></a>
    </li>
    
    </ul>
    
    </footer>
</div>
);
}

