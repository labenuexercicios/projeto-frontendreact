import React from "react"
import logo from "../../assets/logo.svg"
import lupa from "../../assets/lupa.svg"
import bag from "../../assets/bag.svg"
import login from "../../assets/login.svg"
import { HeaderContainer, Icon, LoginContainer, LogoHome, SearchContainer, SearchInput, ImgInput, HomeDiv, LogoTxt, LoginTxt } from "./styled"

export function Header({setName}){
    const getName = (event) =>{
        setName(event.target.value)
    }
 //   onMouseOver={shoppingCart()}

    return(
        <HeaderContainer>
            <LoginContainer>
                <SearchContainer>
                <ImgInput src={lupa} alt="lupa" />
                <SearchInput placeholder="buscar" type="text" onChange={getName}>               
                </SearchInput>
                </SearchContainer>
                <Icon src={bag} alt=""/>
                <Icon src={login} alt=""/>
                <LoginTxt>Login</LoginTxt>
            </LoginContainer>
            <HomeDiv> 
                <LogoHome src={logo} alt=""/>
                <LogoTxt>Astronauts</LogoTxt>
            </HomeDiv>
        </HeaderContainer>
    )
}