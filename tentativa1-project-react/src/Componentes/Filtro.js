import React from "react";


export function Filtro(){

    return(
        <ol>
        <h1>Filtros:</h1>
        <b>Valor màximo:</b>
        <br></br>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
        <button>Filtrar</button>
        <br></br>
        <b>Valor mínimo:</b>
        <br></br>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
        <button>Filtrar</button>
        <br></br>
        <b>Buscar por nome:</b>
        <br></br>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
        <button>Filtrar</button>
      </ol>
    )

}