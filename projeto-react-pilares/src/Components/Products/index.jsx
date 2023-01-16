import React, { useState } from "react";
import {Card} from "../Card/Card"

export function Products({listaProdutos, comprarProduto, removerProduto}) {

    const renderizar = listaProdutos.map((produto) => {
        return (
            <Card>
                <img src={produto.img} alt={produto.nome}/>
                <h3>{produto.nome}</h3>
                <p>{produto.preco}</p>
                <button onClick={() => comprarProduto(produto)}>Comprar</button>
                <button onClick={() => removerProduto(produto)}>Remover</button>
             </Card>
        )
    })

    return (
        <div>
        <p>AQUI FICAM OS PRODUTOS</p>
        {renderizar}
        </div>
    )
}