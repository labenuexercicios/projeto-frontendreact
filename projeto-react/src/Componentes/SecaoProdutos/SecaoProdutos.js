import React, { useState } from "react";
import { ListadeProdutos } from './ListaDeProdutos'
import { EstiloLista, Parametros, ContainerPrincipal } from "./style";

const SecaoProdutos = () => {
    const [produtos, setProdutos] = useState(ListadeProdutos)
    const [quantidade, setQuantidade] = useState(produtos.length)
    const [ordenar, setOrdenar] = useState("")

    const crescente = (a, b) => {return a.valor - b.valor}
    const decrescente = (a, b) => {return b.valor - a.valor}
    const ordernarOriginal = (a, b) => {return a.id - b.id}

    switch(ordenar) {
        case "crescente":
            produtos.sort(crescente)
        break;
        case "decrescente":
            produtos.sort(decrescente)
        break;
        case "":
            produtos.sort(ordernarOriginal)
    }


    // ADICIONAR AO CARRINHO
    /*
    const AddProdutoCarrinho=(event)=>{
        event.preventDefault()
        const AtualizarCarrinho = [...produtos,{nome: ListadeProdutos.nome}]
        setProdutos(AtualizarCarrinho)
        console.log(produtos)
    }
    */
/*
    let carrinhoProdutos=[]
    carrinhoProdutos = {carrinhoProdutos}
    const AddProdutoCarrinho=(itemAdd)=>{
        produtos.filter((item)=>{
            console.log("teste " , item.id)
            if(item.id === itemAdd){
                return carrinhoProdutos.push(item)
            }
            return 0
        })
    setCarrinhoAdd([...CarrinhoAdd, carrinhoProdutos])
    }
*/
    const produtosAtualizados = produtos.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.imagem} alt={item.alt}/>
                <h4>{item.nome}</h4>
                <h3>R${item.valor}0</h3>
                <button onClick={()=>{AddProdutoCarrinho(item.id)}}>Adicionar</button>
            </li>
        )
    })

    return (
        <ContainerPrincipal>
            <Parametros>
                <p>Quantidade de produtos: {quantidade}</p>
                <label> Ordenar Preço:
                    <select value={ordenar} onChange={(e)=>setOrdenar(e.target.value)}>
                        <option value="">Selecione...</option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </label>
            </Parametros>
            <EstiloLista>
            <ul>{produtosAtualizados}</ul>
            </EstiloLista>
        </ContainerPrincipal>
    )
}

export default SecaoProdutos