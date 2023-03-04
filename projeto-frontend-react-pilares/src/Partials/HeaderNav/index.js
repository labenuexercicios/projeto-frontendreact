import React from 'react';
import { useState } from 'react';
import {Box1, HeaderComponent,  Slider, NavList  , NavButton} from './styled'

export function HeaderNav({carrito, setCarrito, modalDisplay, setModalDispay, setPages}){
const [titlePage, setTitlePage] = useState("Bem Vindo")


    const showModal = (modalDisplay) =>{
        setModalDispay(1) 
        
    }
    
    
    const showPage1 = (pages) =>{
        setPages(1) 
        setTitlePage("Ofertas")
    }
    
    const showPage2 = (pages) =>{
        setPages(2) 
        setTitlePage("Produtos")
        
    }

return(
  <div>
<NavList>
     
        <NavButton onClick={showPage1}>
          Produtos</NavButton>
        <NavButton onClick={showPage2}>Ofertas</NavButton>
        <NavButton onClick={showModal}>Compras</NavButton>
    </NavList>
    
     <Slider>
            <h1>{titlePage}</h1>
     </Slider>

</div>
)
}

