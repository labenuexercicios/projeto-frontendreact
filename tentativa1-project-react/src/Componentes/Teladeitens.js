import React, { useState } from "react";
import { Escopodositens, Estilodositens } from "../instyle";


export function Teladeitens(props){

    // let x = 0;
    // function contador(){

    // }

    console.log(props.item1)

    function adicionarAocarrinhoitem1() {
        props.setAdicionacarrinho(1)
    }

    return(

        <div>
            <Escopodositens>
            <article>
                    <ul>
                    <h3>Kit 1:</h3>
                    <img src="jinko.jpg" alt="img jinko"></img>
                    <p>Marca do Painel Solar: <b>{props.item1.nome}</b></p>
                    <p>Geração do módulo: <b>{props.item1.geracao}</b></p>
                    <p>Possuí sistema anti-furto: <b>{props.item1.saf}</b></p>
                    <p>Preço: <b>R${props.item1.preco}</b></p>
                    </ul>
                    <button onClick={adicionarAocarrinhoitem1}>Comprar</button>
                </article>
                </Escopodositens>
            <Escopodositens>
            <article>
                    <ul>
                    <h3>Kit 2:</h3>
                    <img src="jinko.jpg" alt="img jinko"></img>
                    <p>Marca do Painel Solar: <b>{props.item2.nome}</b></p>
                    <p>Geração do módulo: <b>{props.item2.geracao}</b></p>
                    <p>Possuí sistema anti-furto: <b>{props.item2.saf}</b></p>
                    <p>Preço: <b>R${props.item2.preco}</b></p>
                    </ul>
                    <button onClick={adicionarAocarrinhoitem1}>Comprar</button>
                </article>
            </Escopodositens>
            <Escopodositens>
            <article>
                    <ul>
                    <h3>Kit 3:</h3>
                    <img src="jinko.jpg" alt="img jinko"></img>
                    <p>Marca do Painel Solar: <b>{props.item3.nome}</b></p>
                    <p>Geração do módulo: <b>{props.item3.geracao}</b></p>
                    <p>Possuí sistema anti-furto: <b>{props.item3.saf}</b></p>
                    <p>Preço: <b>R${props.item3.preco}</b></p>
                    </ul>
                    <button onClick={adicionarAocarrinhoitem1}>Comprar</button>
                </article>
            </Escopodositens>

        </div>



    )
}