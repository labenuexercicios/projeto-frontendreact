import React, { useState } from "react";


export function Products({listaProdutos}) {

    const lista = listaProdutos.map((produto) => {
        return (
            <>
                <ul>
                    <li>
                        {produto.nome}
                    </li>
                    <li>
                        {produto.valor}
                    </li>
                    <li>
                        {produto.img}
                    </li>
                </ul>
                <button>Comprar</button>
             </>
        )
    })

    return (
        <div>
        <p>AQUI FICAM OS PRODUTOS</p>
        {lista}
        </div>
    )
}