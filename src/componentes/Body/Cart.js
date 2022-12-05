import React from "react";
import { StyleCarrinho } from "../../styles";

export default function Carrinho(props) {
    

    
    return (
        <StyleCarrinho>
            {props.listaProdutos.length > 0 ? (props.listaProdutos.map((produto) => (
                <div key={produto.id}>
                <h2>{produto.item}</h2>
                <p>Quantidade: {produto.quantidade}</p>
                <button>Excluir produto</button>
                </div>
            ))) 
            :(<div><p>Carrinho vazio</p></div>)
            } 
        </StyleCarrinho>
    )

    
}