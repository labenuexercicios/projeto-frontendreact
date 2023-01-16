import React, { useEffect } from "react";
import { Card } from "../Card/Card";


export function Cart({listaProdutos, listaCarrinho, setListaCarrinho, removerProduto}) {

    // const getItem = JSON.parse(localStorage.getItem("produto"))

    // useEffect(()=>{
    //     setListaCarrinho([...listaCarrinho, getItem])
    // }, [])

    const renderizarCarrinho = listaCarrinho.map((produto) => {
        return (
            <Card>
                <img src={produto.img} alt={produto.nome}/>
                <h3>{produto.nome}</h3>
                <p>{produto.preco}</p>
                <button onClick={() => removerProduto(produto)}>Remover</button>
            </Card>
        )
    })

    return (
        <div>
        <p>ISTO É UM CARRINHO</p>
        {renderizarCarrinho}
        </div>
    )
}