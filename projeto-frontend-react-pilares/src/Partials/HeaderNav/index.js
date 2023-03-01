import React from 'react';

import {Box1, HeaderComponent, HeaderCtn, NavList  , NavButton} from './styled'

export function HeaderNav({modalDisplay, setModalDispay, setPages}){
    const navTitle = "ASTRO-SIDE SHOP"


    const showModal = (modalDisplay) =>{
        setModalDispay(1) 
      
    }
    
    
    const showPage1 = (pages) =>{
        setPages(1) 
      
    }
    
    const showPage2 = (pages) =>{
        setPages(2) 
      
    }

return(
  <div>
<NavList>
        <NavButton onClick={showModal}>Carrinho</NavButton>
        <NavButton onClick={showPage1}>Home</NavButton>

        <NavButton onClick={showPage2}>Detalhes</NavButton>

    </NavList>
     

</div>
)
}

