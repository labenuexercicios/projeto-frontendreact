import React from 'react';
import {useState} from'react'
import {NavLogo, HeaderCtn, NavBrand, NavList  , NavButton} from './styled'

export function HeaderNav({views, setViews}){
    const navTitle = "ASTRO-SIDE SHOP"
    const navLogoImg = 'https://th.bing.com/th/id/R.1cba06b4e146270a47ca231ae57030fc?rik=6%2bZ1T1BCdqWs4w&riu=http%3a%2f%2fwww.sickchirpse.com%2fwp-content%2fuploads%2f2015%2f03%2fPenised-1.jpg&ehk=pl0sudu1hXtknD7UMjn0AmQIZtkD3Pn6VDeBQAQYRoo%3d&risl=&pid=ImgRaw&r=0' 
    console.log(navTitle)
    const handleClick1 = ()=>{
    if(setViews === 1)
    {
        return setViews(2)
    }
    else if(setViews === 2){
        return setViews(1)
    }
}
return(


<div>
 <NavList>
        <NavButton onClick={(e)=>{handleClick1(e.target.value)}}>BTN1</NavButton>
    </NavList>
     

<HeaderCtn>
   
<h1>{navTitle}           
</h1>
</HeaderCtn>
</div>

)
}

