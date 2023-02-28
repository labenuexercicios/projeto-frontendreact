import React from 'react';

import {Box1, HeaderComponent, HeaderCtn, NavList  , NavButton} from './styled'

export function HeaderNav({modalDisplay, setModalDispay}){
    const navTitle = "ASTRO-SIDE SHOP"


    const showModal = (modalDisplay) =>{
        setModalDispay(1) 
      
    }
    

return(
  <div>
<NavList>
        <NavButton onClick={showModal}>BTN1</NavButton>
        <NavButton >BTN1</NavButton>

        <NavButton >BTN1</NavButton>

    </NavList>
     

</div>
)
}

