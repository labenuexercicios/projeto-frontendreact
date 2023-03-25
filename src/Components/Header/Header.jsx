import React, { useState } from 'react'

import { HeaderContainer, SelectOrder, Order, Logo, NavBar, OptionsList, Login, Car, Contact } from './styles'
import logo from '../../Components/img -project/logo.ASTRODEV.logo.png'
import login from '../img -project/perfil.gif'
import shoppingCar from '../img -project/shopping-cart.gif'
import support from '../img -project/support.gif'

const Header = (props) => {
  return (
    <HeaderContainer>
      <Logo >
        <img src={logo} alt='Logo Labenu' height={58} />
        <p>Astrodev </p>
      </Logo>
      <NavBar>
        <OptionsList>
          <li>
            <SelectOrder
              value={props.ordenacao}
              onChange={(e) => { props.setOrdenacao(e.target.value) }}
            >
              <Order value="">Ordenar</Order>
              <Order value="crescente">Crescente</Order>
              <Order value="decrescente">Decrescente</Order>
            </SelectOrder>
          </li>
          <li>
            <Login onClick={() => props.changePage(2)}>
              <img src={login} alt='Login' height={38} />
            </Login>
          </li>
          <li>
            <Car onClick={() => props.changePage(8)}>
              <img src={shoppingCar} alt='Carrinho' height={38} />
              {!props.cartItems ? <p>0</p> : <p>{props.cartItems.length}</p>}
            </Car>

          </li>
          <li>
            <Contact onClick={() => props.changePage(6)}>
              <img src={support} alt='Suporte' height={38} />
            </Contact>
          </li>
        </OptionsList>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header