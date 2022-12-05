import React from "react";

export default function Carrinho(props) {
    

    const renderizaListaProdutos = props.listaProdutos.map((produto) => {
        return (
            <>
            {/* <input/>     */}
            <h2>{produto}</h2>
            <button>Excluir produto</button>
            </>
        )
    })
    
    return (
        <>
            <h1>Meu carrinho</h1>
            <ul>
            {renderizaListaProdutos}
            </ul>    
        </>
    )
}