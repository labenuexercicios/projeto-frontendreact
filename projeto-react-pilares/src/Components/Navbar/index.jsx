import React from "react";

export function Navbar({mudaPagina}) {
    
    return (
        <nav>
            <button onClick={()=>mudaPagina(1)}>Inicio</button>
            <button onClick={()=>mudaPagina(2)}>Carrinho</button>
        </nav>
    )
}