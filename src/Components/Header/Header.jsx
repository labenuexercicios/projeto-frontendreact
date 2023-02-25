import React, { useState } from 'react'

import {HeaderContainer, Logo, NavBar, OptionsList,Login, Car, Contact} from './styles'
import logo from '../../Components/img -projeto/logo.ASTRODEV.logo.png'
import login from '../img -projeto/perfil.gif'
import shoppingCar from '../img -projeto/shopping-cart.gif'
import support from '../img -projeto/support.gif'

const Header = () => {


  return (
    <HeaderContainer>
        <Logo>
            <img src={logo} alt='Logo Labenu' height={45}/>
            <p>Astrodev </p>            
        </Logo>
        <NavBar>
            <OptionsList>
                <li>
                  <Login>
                    <img src={login} alt='Login' height={38}/>
                  </Login>
                </li>
                <li>
                  <Car>
                    <img src={shoppingCar} alt='Carrinho' height={38}/>
                  </Car>
                  </li>
                <li>
                  <Contact>
                    <img src={support} alt='Suporte' height={38}/>
                  </Contact>
                </li>
            </OptionsList>
        </NavBar>        
    </HeaderContainer>
  )
}

export default Header