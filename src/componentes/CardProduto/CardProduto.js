import React from "react";
import produtos from "../../produto/produtos.json"

export default function Card() {
    return(
        <>
        <div>
            <img src={produtos.imagem} width="250px" height="200px"/>
            <h4>{produtos.item}</h4>
            <h5>R$ {produtos.valor}</h5>
        </div>
        </>
    )
}