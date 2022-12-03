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
    .filter((produto) => {
        if (produto.valor >= props.valorMin) {
            return produto
        } 
    })
    .filter((produto) => {
        if(props.valorMax >= produto.valor ) {
            return produto
        }
    })
    .sort((a,b) => {
        if(props.ordenaValor === "crescente") {
            return a.valor < b.valor ? -1 : 1
        } else if(props.ordenaValor === "decrescente") {
            return a.valor > b.valor ? 1 : -1
        }
    })
    .map((produto) => {
            return (
                <div>
                    <img src={produto.imagem} width="250px" height="200px"/>
                    <h2>{produto.item}</h2>
                    <h3>R$ {produto.valor}</h3>
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