import React from "react";
import Icone from "../img/icone.png"
import {HeaderContainer, Logo, NavBar, OptionsList, RegisterButton, SendButton} from './styled'


function Header (props) {
    return (
        <HeaderContainer>
            <Logo class="header">
                <img src={Icone} height={45}/>
                <p>Lab E-commerce</p>
                <div class="buscar">
                    <input id="input-buscar-turma" type="text" placeholder="Procurar"/>
                    <button class="btn-buscar" id="button-buscar" onclick="()">Buscar</button>
                </div>
            </Logo>  
            <NavBar>
            <OptionsList>
                <RegisterButton  onClick={() => props.mudarTela(2)} >Registre-se</RegisterButton>
                <SendButton onClick={() => props.mudarTela(4)}>Entrar</SendButton>
            </OptionsList>
            </NavBar>
        </HeaderContainer> 
    )  
}
export default Header