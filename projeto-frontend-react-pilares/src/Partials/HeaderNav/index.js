import React from 'react';
import { useState } from 'react';
import {  Hero, NavList  , NavButton} from './styled'

export function HeaderNav({ modalDisplay, setModalDispay, setPages}){
const [titlePage, setTitlePage] = useState("Bem Vindo")


    const showModal = (modalDisplay) =>{
        setModalDispay(1) 
        
    }
    
    
    const showPage1 = (pages) =>{
        setPages(1) 
        setTitlePage("Produtos")
    }
    
    const showPage2 = (pages) =>{
        setPages(2) 
        setTitlePage("Ofertas")
        
    }

return(
  <div>
<NavList>
     
        <NavButton onClick={showPage1}>
          Produtos
          </NavButton>
        <NavButton onClick={showPage2}>Ofertas</NavButton>
        <NavButton onClick={showModal}>Carrinho</NavButton>
    </NavList>
    
     <Hero>
            <h1>{titlePage}</h1>
     </Hero>

</div>
)
}

