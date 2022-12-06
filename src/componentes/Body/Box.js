import React, {useState} from "react";
import produtos from "../../produto/produtos.json"
import { StyleBox, StyleCard } from "../../styles";

export default function Box(props) {
    const onChangeBuscaNome = (e) => {
        props.setBuscaNome(e.target.value)
    }
    const adicionarProduto = (item) => {
        const novaListaProdutos = [...props.listaProdutos]
        const verificaExistenciaItem = novaListaProdutos.find((produto) => 
            produto.id === item.id 
        )
        if(!verificaExistenciaItem) {
        const novoItem = {...item, quantidade: 1}
        novaListaProdutos.push(novoItem)
        } else {
            verificaExistenciaItem.quantidade = verificaExistenciaItem.quantidade + 1
        }
        
        props.setListaProdutos(novaListaProdutos) 
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
                <StyleCard key={produto.id}>
                    <img src={produto.imagem} />
                    <h2>{produto.item}</h2>
                    <h3>R$ {produto.valor}</h3>
                    <select>
                        <option >Escolha o tamanho  </option>
                        <option value="p" >P</option>
                        <option value="m" >M</option>
                        <option value="g" >G</option>
                    </select>
                    <button onClick={() => adicionarProduto(produto)}>Adicionar ao carrinho</button>
                </StyleCard>
            )
        }
    )

    return(
        <StyleBox>
            <input
            type="text"
            placeholder="Produto"
            value={props.buscaNome}
            onChange={onChangeBuscaNome}
            />
            <StyleBox>
               {card}
            </StyleBox>
        </StyleBox>
    )
}