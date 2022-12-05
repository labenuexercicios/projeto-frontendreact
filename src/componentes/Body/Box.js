import React, {useState} from "react";
import produtos from "../../produto/produtos.json"

export default function Box(props) {
    const onChangeBuscaNome = (e) => {
        props.setBuscaNome(e.target.value)
    }


    const adicionarProduto = (produto) => {
        const novoProduto = produtos.filter((novoItem) => {
            return (produto.item === novoItem)
        })
        props.setListaProdutos([...props.listaProdutos, novoProduto])   
    }
    

    const card = produtos
    .filter((produto) => {
        return produto.item.toLowerCase().includes(props.buscaNome.toLowerCase())
    })
    .filter((produto) => {
        return props.valorMin ? produto.valor >= props.valorMin : true
    })
    .filter((produto) => {
        return props.valorMax ? props.valorMax >= produto.valor : true
    })
    .sort((a,b) => {
        if(props.ordenaValor === "crescente") {
            return a.valor < b.valor ? -1 : 1
        } else if(props.ordenaValor === "decrescente") {
            return a.valor > b.valor ? -1 : 1
        }
    })
    .map((produto) => {
            return (
                <div>
                    <img src={produto.imagem} />
                    <h2>{produto.item}</h2>
                    <h3>R$ {produto.valor}</h3>
                    <button onClick={adicionarProduto}>Adicionar ao carrinho</button>
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