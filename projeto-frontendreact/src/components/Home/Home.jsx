import React from "react";
import { HomeContainer, HeadHome, HeadBlock, TextHeadHome, SelectOrder } from "./styled";
import { ProductCard} from "../ProductCard/ProductCard";

export function Home(){
    return(
        <HomeContainer>
            <HeadHome>
            <HeadBlock>
                <TextHeadHome>Quantidade de produtos:</TextHeadHome>
            </HeadBlock>
            <HeadBlock>
                <TextHeadHome>Ordenação:</TextHeadHome>           
                <SelectOrder size={1}>
                    <option value>Crescente</option>
                    <option value>Decrescente</option>
                </SelectOrder>
            </HeadBlock>               
            </HeadHome>
            <ProductCard/>
        </HomeContainer>
    )
}