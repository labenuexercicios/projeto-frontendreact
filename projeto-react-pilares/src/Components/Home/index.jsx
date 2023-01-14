import React, { useEffect, useState } from "react";
import { Produtos } from "../../Data/Produtos";
import { Cart } from "../Cart";
import { Filter } from "../Filter";
import { Products } from "../Products";



export function Home({pagina}) {

    const [listaProdutos, setListaProduto] = useState(Produtos)
    const [listaCarrinho, setListaCarrinho] = useState([])

    useEffect(() => {
    }, [])

    const comprarProduto = (item) => {
            const comprado = JSON.stringify(localStorage.setItem("produto", item))
    }

    useEffect(() => {

    }, [])


    return (
        <div>
        {pagina === 1 ?
        <>
        <Filter/>
        <Products listaProdutos={listaProdutos} comprarProduto={comprarProduto}/>
        </>
        :
        <Cart listaProdutos={listaProdutos} listaCarrinho={listaCarrinho} setListaCarrinho={setListaCarrinho}/>}
        </div>
    )
}