import React from "react";
import { HomeContainer, HeadHome, HeadBlock, TextHeadHome, SelectOrder, CardDiv } from "./styled";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home({products}){
    return(
        <HomeContainer>
            <HeadHome>
            <HeadBlock>
                <TextHeadHome>Quantidade de produtos: {products.length}</TextHeadHome>
            </HeadBlock>
            <HeadBlock>
                <TextHeadHome>Ordenação:</TextHeadHome>           
                <SelectOrder size={1}>
                    <option value>Crescente</option>
                    <option value>Decrescente</option>
                </SelectOrder>
            </HeadBlock>               
            </HeadHome>
            <CardDiv>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}  
            </CardDiv>
            
        </HomeContainer>
    )
}