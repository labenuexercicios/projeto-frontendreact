import React from "react";
import {CardCamiseta, ImagemProduto, DescricaoProduto} from "./Card.styles";



export function Card (props){
    return(
        <>
            <CardCamiseta key={props.camiseta.id}>
                <ImagemProduto src={props.camiseta.image} alt="Imagem camiseta"/>  
                <DescricaoProduto>
                    <h3>{props.camiseta.title}</h3>
                    <p>Código: {props.camiseta.id}</p>
                    <p>Tamanho: {props.camiseta.size}</p>
                    <p>Preço: {props.camiseta.price}</p>
                    <p>Quantidade: {props.camiseta.amount}</p>
                </DescricaoProduto>
            </CardCamiseta>
        </>
)   
}