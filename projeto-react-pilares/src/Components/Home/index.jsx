import React from "react";
import { Cart } from "../Cart";
import { Filter } from "../Filter";
import { Produtos } from "../Produtos";



export function Home({
    pagina,
    addAoCarrinho,
    listaProdutos,
    listaCarrinho,
    setListaCarrinho,
    setItem,
    precoMin,
    setPrecoMin,
    precoMax,
    setPrecoMax,
    filtraNome,
    setFiltraNome,
    ordem,
    setOrdem
}) {

    return (
    <div>
        {pagina === 1 ?
        <>
        <Filter
        listaProdutos={listaProdutos}
        precoMin={precoMin}
        setPrecoMin={setPrecoMin}
        precoMax={precoMax}
        setPrecoMax={setPrecoMax}
        filtraNome={filtraNome}
        setFiltraNome={setFiltraNome}
        ordem={ordem}
        setOrdem={setOrdem}
        />
        <Produtos listaProdutos={listaProdutos}
        addAoCarrinho={addAoCarrinho}
        precoMin={precoMin}
        precoMax={precoMax}
        filtraNome={filtraNome}
        />
        </>
        :
        <Cart listaCarrinho={listaCarrinho}
        setListaCarrinho={setListaCarrinho}
        setItem={setItem}
        />}
    </div>
    )
}