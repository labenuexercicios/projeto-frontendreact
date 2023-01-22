import React from 'react'
import ProdutoJson from '../Produtos/produtos.json'

export function UseProdutos (){
    const [produtos, setProdutos] = React.useState([])
    React.useEffect(()=>{
        setProdutos(ProdutoJson)
    }, [])
    return produtos
}

