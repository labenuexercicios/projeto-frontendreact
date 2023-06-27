import React from 'react'
import { HeaderStyled , HeaderNav , Pesquisa } from './Header.styled'
import logo from '../../images/logo2.png'


const Header = () => {
  return (
    <div>
        <HeaderStyled>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <Pesquisa>
                    <input type="text" placeholder="Busca"/>
                    <a href=""><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt='icone'/></a>
                </Pesquisa>
            </div>
            <nav>
            <ul>
                <li><a href="">Precido de ajuda</a></li>
                <li><a href="">Minha conta</a></li>
                <li><a href="">Carrinho</a></li>
            </ul>
            </nav>
        </HeaderStyled>
        <HeaderNav>

          <li><a href="">Almofadas</a></li>
          <li><a href="">Adesivos</a></li>
          <li><a href="">Quadros</a></li>
          <li><a href="">Relógios</a></li>

        </HeaderNav>
    </div>
  )
}

export default Header
