import React from 'react'
import {HeaderContainer, Logo, NavBar, OptionsList} from './styles'
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
                <li><img src={login} alt='Login' height={38}/></li>
                <li><img src={shoppingCar} alt='Carrinho' height={38}/></li>
                <li><img src={support} alt='Suporte' height={38}/></li>
            </OptionsList>
        </NavBar>
    </HeaderContainer>
  )
}

export default Header