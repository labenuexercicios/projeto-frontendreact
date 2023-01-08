import React from "react"
import logo from "../../assets/logo.svg"
import lupa from "../../assets/lupa.svg"
import bag from "../../assets/bag.svg"
import login from "../../assets/login.svg"
import { HeaderContainer, Icon, LoginContainer, LogoHome, SearchContainer, SearchInput, ImgInput, HomeDiv, LogoTxt, LoginTxt } from "./styled"

export function Header({setName, showShoppingCart, setType}){
    
    const getName = (event) =>{
        setName(event.target.value)
    }

    return(
        <HeaderContainer>
            <LoginContainer>
                <SearchContainer>
                <ImgInput src={lupa} alt="lupa" />
                <SearchInput placeholder="buscar" type="text" onChange={getName}>               
                </SearchInput>
                </SearchContainer>
                <Icon src={bag} alt="carrinho" onClick={showShoppingCart}/>
                <Icon src={login} alt="login"/>
                <LoginTxt>Login</LoginTxt>
            </LoginContainer>
            <HomeDiv onClick={(ev)=>{setType("")}}> 
                <LogoHome src={logo} alt=""/>
                <LogoTxt>Astronauts</LogoTxt>
            </HomeDiv>
        </HeaderContainer>
    )
}