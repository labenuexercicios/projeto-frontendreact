import React, { useEffect, useState } from "react";
import { Cart } from "../Cart";
import { Filter } from "../Filter";
import { Products } from "../Products";


export function Home({pagina}) {

    const arrayProdutos = [{
        "nome": "",
        "valor": 0,
        "img": "url"
    },
    {
        "nome": "",
        "valor": 0,
        "img": "url"
    },
    {
        "nome": "",
        "valor": 0,
        "img": "url"
    },
    {
        "nome": "",
        "valor": 0,
        "img": "url"
    },
    {
        "nome": "",
        "valor": 0,
        "img": "url"
    },
    {
        "nome": "",
        "valor": 0,
        "img": "url"
    }]
    const [listaProdutos, setListaProduto] = useState(arrayProdutos)

    const comprarProduto = () => {
        useEffect(() => {
            localStorage.setItem()
        }, [])
    }

    return (
        <div>
        {pagina === 1 ?
        <>
        <Filter/>
        <Products listaProdutos={listaProdutos}/>
        </>
        :
        <Cart listaProdutos={listaProdutos}/>}
        </div>
    )
}