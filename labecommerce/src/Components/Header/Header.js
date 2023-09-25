import React from "react";
import Logo from "../../Image/LabeVerso.png"
import {StyledHeader} from './HeaderStyle'
import styled from 'styled-components';



export const Header =() => {
    return (
    <StyledHeader>

            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>
            <a href="#">
                <div className="logo">
                    <img  src={Logo} alt="Astronalta pegando uma estrela" width="450"></img>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#"> Inicio</a>
                </li>
                <li>
                    <a href="#"> Produtos</a>
                </li>
            </ul>
            <div className="carrinho"> 
            <box-icon name='shopping-bag' type='solid' color='#fbfbff' ></box-icon>
                <span className="total_de_Itens">0</span>
            </div>
    </StyledHeader>



    )
}