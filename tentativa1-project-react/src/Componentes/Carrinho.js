import React from "react";


export function Carrinho(props){

  

    return(
        <ol>
        <h1>Carrinho:</h1>
        {/* <br></br> */}
        <h3>Valor total: {props.item.preco}</h3>
        {/* <input type="text" placeholder="Busca" id="campoDeBusca" />
        <button>Filtrar</button> */}
      </ol>
    )

}