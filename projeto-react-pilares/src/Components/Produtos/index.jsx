import React from "react";
import {Card} from "../Card/Card"

export function Produtos({listaProdutos,
    addAoCarrinho,
    precoMin,
    precoMax,
    filtraNome,
}) {

    const renderizar = listaProdutos
    .filter((produto)=>{
        return produto.nome.toLowerCase().includes(filtraNome.toLowerCase())
    })
    .filter((produto)=>{
        return produto.valor >= precoMin
    })
    .filter((produto)=>{
        return produto.valor <= precoMax
    })
    .map((produto) => {
        return (
            <Card key={produto.id}>
                <img src={produto.img} alt={produto.nome}/>
                <h3>{produto.nome}</h3>
                <p>{produto.valor.toFixed(2)}</p>
                <button onClick={() => addAoCarrinho(produto)}>Comprar</button>
             </Card>
        )
    })

    return (
        <div>
        {renderizar}
        </div>
    )
}