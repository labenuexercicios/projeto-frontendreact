import React from "react";
import Card from "./Card/Card"
import { PrimeiraMain, PrimeiroArticleMain, SegundoArticleMain } from "./style";

export default function Main() {
    return(
        <PrimeiraMain>
            <PrimeiroArticleMain>
                <div>
                    Quantidade de produtos: 0
                </div>
                <div>
                    Ordenação: 

                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </div>
            </PrimeiroArticleMain>

            <SegundoArticleMain>
                <Card />
                <Card />
                <Card />
                <Card />
            </SegundoArticleMain>
        </PrimeiraMain>
    )
}