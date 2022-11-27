import React from "react";
import {CardCamiseta, ImagemProduto, DescricaoProduto, PriceCard, SizeAddButton} from "./Card.styles";



export function Card (props){

    const {camiseta} = props
    return(
        <>
            <CardCamiseta key={camiseta.id}>
                <ImagemProduto src={camiseta.image} alt="Imagem camiseta"/>  
                <DescricaoProduto>
                    <h3>{camiseta.title}</h3>
                    <p>***** {camiseta.rating}</p>
                    <p>Tamanho?????????</p>
                    {/* {camiseta.map((tamanhoCamiseta)=>{
                        return <span>{tamanhoCamiseta.size}</span>
                    })} */}
                    <PriceCard>
                    <p>R$<h1>{camiseta.price}</h1></p> 
                    <SizeAddButton>
                        <select>
                            <option>P</option>
                            <option>M</option>
                            <option>GG</option>
                        </select>
                    <button>+ Adicionar ao carrinho</button>
                    </SizeAddButton>
                    
                    </PriceCard>

                </DescricaoProduto>
                
            </CardCamiseta>
        </>
)   
}