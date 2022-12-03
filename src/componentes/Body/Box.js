import React, {useState} from "react";
import produtos from "../../produto/produtos.json"

export default function Box(props) {
    const onChangeBuscaNome = (e) => {
        props.setBuscaNome(e.target.value)
    }

    const card = produtos
    .filter((produto) => {
        return produto.item.toLowerCase().includes(props.buscaNome.toLowerCase())
    })
    .map((produto) => {
            return (
                <div>
                    <img src={produto.imagem} width="250px" height="200px"/>
                    <h4>{produto.item}</h4>
                    <h5>R$ {produto.valor}</h5>
                </div>
            )
        }
    )

    return(
        <>
            <h1>Box de produtos</h1>
            <input
            type="text"
            placeholder="Produto"
            value={props.buscaNome}
            onChange={onChangeBuscaNome}
            />
            {card}
        </>
    )
}