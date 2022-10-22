import {HeaderStyled, LogoStyled} from './styles'
import logo from './midia-header/8fe884105100727.5f71ebef2d0ee.jpg';
import fundo from './midia-header/estrela-ceu.webp';
import styled from "styled-components";

export const Header = () => {
   
    return(
        <HeaderStyled style={{ backgroundImage: `url(${fundo})` }}>
            <LogoStyled src={logo}/>
            <p>Venha conhecer nossas promoções das <strong>galaxias!</strong></p>
            <p></p>
        </HeaderStyled>
    )
}