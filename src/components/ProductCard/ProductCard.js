import React, { useState } from "react";
import {CardCamiseta, ImagemProduto, DescricaoProduto, PriceCard, SizeAddButton} from "./ProductCard.styles";


export function ProductCard (props){

    const {camiseta, addToCart} = props

    const [choosenSize, setChoosenSize] = useState(camiseta.size[0])

    return(
            <CardCamiseta key={camiseta.id}>
                <ImagemProduto src={camiseta.image} alt="Imagem camiseta"/>  
                <DescricaoProduto>
                    <h3>{camiseta.title}</h3>
                    <p>***** {camiseta.rating}</p>
                    <PriceCard>
                    <p>R$<h1>{camiseta.price}</h1></p> 
                    <SizeAddButton>
                        <select value={choosenSize} onChange={(e)=>setChoosenSize(e.target.value)}>
                        {camiseta.size.map((tamanhoCamiseta)=>{
                        return <option value={tamanhoCamiseta}>{tamanhoCamiseta}</option>
                    })}
                        </select>
                    <button onClick={() => addToCart(camiseta, choosenSize)}>+ Adicionar ao carrinho</button>
                    </SizeAddButton>
                    
                    </PriceCard>

                </DescricaoProduto>
                
            </CardCamiseta>
)   
}