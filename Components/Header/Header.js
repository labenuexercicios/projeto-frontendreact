import React, { useState } from "react";
import Logo from "../../Image/LabeVerso.png";
import { StyledHeader } from "./HeaderStyle";

export const Header = () => {
 
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

    </StyledHeader>
  );
};
