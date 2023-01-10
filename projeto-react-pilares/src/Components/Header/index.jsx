import React from "react";
import logo from "./spaces-store-logo.png"


export function Header({mudaPagina}) {

    return (
        <header>
            <img src={logo} alt="logo space's store" className="logo" onClick={()=>mudaPagina(1)}/>
            <h1>Space's Store</h1>
            <p>Produtos Universais</p>
            <span>slide</span>
        </header>
    )
}
