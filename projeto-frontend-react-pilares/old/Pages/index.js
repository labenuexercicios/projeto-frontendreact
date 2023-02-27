import React from 'react'
import {Fragments, Components, useState } from 'react'
import styled from 'styled-components'
import {Centered, Aside, Section , CardItem} from './styled'


import logo1 from './../assets/logo1.png'
import {Cart} from './../Components/ShoppingCart/Cart/index'
import {Home} from './../Components/ProductList/Home/index'
import dataProducts from './../Data/dataProducts.json'

export function Main(){
const [section, setSection] = useState('BEM-VINDO')
const [content, setContent] =useState(Cart)
const [products, setProducts] = useState(dataProducts)
const [product, setProduct] = useState({})
const [searchName, setSearchName] = useState(
  [...dataProducts].map(product=>products.name))

console.log(products)
return(
<div>

 

    


<main><header> 
<nav className="menu">
<img src={logo1} alt="logo astro-side" class="logoBrand" />
</nav>
 
  <img src={logo1} alt="logo astro-side" class="logoBrand" />
   <h1>{section}</h1> 
   <span>
    <input type="text" 
    value={searchName} 
    onChange={(e)=>{setSearchName(e.target.value)}}
    />
   </span>
</header>
  </main>

<Centered>



    <Section >

      {products.map(product=>
   <li key={product.id}>
    <CardItem color={product.hHx}>
      <div>
      <span><strong>Modelo </strong>#{product.id}</span>
      <hr/>
        <span><strong>Nome</strong></span>
        <h2>{product.name}</h2>
      </div>
    <div>
      <img src={product.img} alt={product.name} />
    </div>
    </CardItem>
  </li>
)}

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

