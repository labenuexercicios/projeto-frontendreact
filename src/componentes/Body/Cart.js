import React from "react";
import { StyleCarrinho } from "../../styles";

export default function Carrinho(props) {
    
    console.log("Lista de Produtos do Carrinho "+ props.listaProdutos)

    const excluirItem = (produto) => {
        const novaListaProdutos = [...props.listaProdutos]
        const indexProduto = novaListaProdutos.findIndex((produtoCarrinho) => produtoCarrinho.id === produto.id)
        novaListaProdutos.splice(indexProduto, 1)
        props.setListaProdutos(novaListaProdutos)
    }

    
    return (
        <StyleCarrinho>
            <h2>CARRINHO</h2>
            {props.listaProdutos.length > 0 ? (props.listaProdutos.map((produto) => (
                <div key={produto.id}>
                <h2>{produto.item}</h2>
                <p>Quantidade: {produto.quantidade}</p>
                <button onClick={()=>excluirItem(produto)}>Excluir produto</button>
                </div>
            ))) 
            :(<div><p>Carrinho vazio</p></div>)
            } 
        </StyleCarrinho>
    )

    
}
