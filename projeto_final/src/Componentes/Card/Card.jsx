import { useState } from "react";
import CountItem from "../CountItem/CountItem";
import ImagemProduto from "../ImagemProduto/ImagemProduto";
import { CardContainer } from "./Styled";

export default function Card({ produto, sacola }) {
    const {
        
        criarAddItemCarrinho,
        removeItemCarrinho,
        estaNoCarrinho,
        
    } = sacola


    const [quantidade, setQuantidade] = useState(1)

    function exibirQuantidade() {
        if (estaNoCarrinho(produto.id)) {
            return <>
                <p>Produto já está no carrinho</p>
                <button onClick={()=>{removeItemCarrinho(produto.id)}}>Remover</button>
            </>
        } else {
            return (<><CountItem setQuantidade={setQuantidade} />
                <button onClick={() => { criarAddItemCarrinho(produto, quantidade) }}>Adicionar</button></>)
        }
    }

    return (

        <CardContainer>
            <ImagemProduto img={produto.imageUrl} alt={produto.name} />
            <p>{produto.name}</p>
            <p>R$: {produto.value.toFixed(2)}</p>
            {exibirQuantidade()}
        </CardContainer>
    )
}