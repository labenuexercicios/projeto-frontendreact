import React from "react";
import { ContainerProdutoCarrinho, ImagemCardCarrinho } from "./styles";



export default function CardCarrinho (props){
    
    const {imagem,nome,preco, quantidade, deletarDoCarrinho, produto}=props
    

    console.log("funcao no CARD CARRINHO", produto)


    return(
        <ContainerProdutoCarrinho>  
            <ImagemCardCarrinho src={imagem}/>   
        <p>{nome}</p>
        <p> R$ {preco}</p>
        <p>QTD. {quantidade}</p>
        
        <button onClick={()=> deletarDoCarrinho(produto)}>Remover</button>

    </ContainerProdutoCarrinho>
)
    
}