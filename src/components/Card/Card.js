import React from "react";
import {CardCamiseta, ImagemProduto, DescricaoProduto} from "./Card.styles";
import camisetaAstroBaloes from "../../assets/01camiseta-astronauta-baloes-69,90reais.png"



export function Card (){
    return(
        <>
            <CardCamiseta>
                <ImagemProduto src={camisetaAstroBaloes} alt="Imagem camiseta"/>
                <DescricaoProduto>
                    <h3>Título Camiseta</h3>
                    <p>Tamanhos</p>
                    <p>Preço</p>
                    <p>Quantidade</p>
                </DescricaoProduto>
            </CardCamiseta>
        </>
)   
}