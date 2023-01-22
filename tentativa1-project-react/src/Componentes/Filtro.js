import React from "react";


export function Filtro(){

    return(
        <ol>
        <h1>Filtros:</h1>
        <b>Valor màximo:</b>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
        <button>Filtrar</button>
        <b>Valor mínimo:</b>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
        <button>Filtrar</button>
        <b>Buscar por nome:</b>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
        <button>Filtrar</button>
      </ol>
    )

}