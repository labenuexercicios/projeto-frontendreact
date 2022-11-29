import React from "react";
import {CardCamiseta, ImagemProduto, DescricaoProduto, PriceCard, SizeAddButton} from "./ProductCard.styles";



export function CardProduct (props){

    const {camiseta, addToCart} = props
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
                    <button onClick={() => addToCart(camiseta)}>+ Adicionar ao carrinho</button>
                    </SizeAddButton>
                    
                    </PriceCard>

                </DescricaoProduto>
                
            </CardCamiseta>
        </>
)   
}