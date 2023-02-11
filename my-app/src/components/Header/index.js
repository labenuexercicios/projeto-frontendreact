import React from "react"

import styled from 'styled-components';
import {Container} from './styles'
  const logoImg = `https://i.ibb.co/wRFYqVL/imgLogo.png`
export function Header() {


return(<Container>
<header>


      <h1>ASTRO.SIDE SHOP</h1>

   <img src={logoImg} alt="logo ASTRO SIDE SHOP"/>

 </header>
 
 </Container>)  
   }