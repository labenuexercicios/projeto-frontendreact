import React from "react";
import logo from "../../img/spaces-store-logo.png"


export function Header({mudaPagina}) {

    return (
        <header>
            <img src={logo} alt="logo space's store" className="logo" onClick={()=>mudaPagina(1)} width="80px" height="80px"/>
            <h1>Space's Store</h1>
            <p>Produtos Universais para ter mais Espaço na sua vida</p>
        </header>
    )
}
