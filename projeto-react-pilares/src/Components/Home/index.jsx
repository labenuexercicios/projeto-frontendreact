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

    const setItem = (item) => localStorage.setItem("produto", JSON.stringify(item))
    const getItem = () => JSON.parse(localStorage.getItem("produto"))

    const comprarProduto = (item) => {
        setItem(item)
        getItem()
        setListaCarrinho([...listaCarrinho, getItem()])
        console.log(listaCarrinho);
    }

    const removerProduto = (produto) => {
        const removeProduto = listaCarrinho.filter((item) => item !== produto)[0]
        setListaCarrinho([removeProduto])
        console.log(listaCarrinho);
    }

    useEffect(() => {

    }, [])


    return (
        <div>
        {pagina === 1 ?
        <>
        <Filter/>
        <Products listaProdutos={listaProdutos} comprarProduto={comprarProduto} removerProduto={removerProduto}/>
        </>
        :
        <Cart listaProdutos={listaProdutos} listaCarrinho={listaCarrinho} setListaCarrinho={setListaCarrinho} removerProduto={removerProduto}/>}
        </div>
    )
}