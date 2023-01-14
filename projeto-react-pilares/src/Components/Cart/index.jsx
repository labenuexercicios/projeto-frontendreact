import React, { useEffect } from "react";


export function Cart({listaProdutos, listaCarrinho, setListaCarrinho}) {

    useEffect(()=>{
        JSON.parse(localStorage.getItem("produto"))
    }, [])
    
    const removerProduto = () => {

    }

    return (
        <div>
        <p>ISTO É UM CARRINHO</p>
        </div>
    )
}