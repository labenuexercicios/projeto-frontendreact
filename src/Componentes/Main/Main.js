import React, { useState } from "react";
import Carrinho from "../Carrinho/Carrinho";
import { Button, Styledositens } from "./Mainstyle";

function Main (props){
    // const pegaContador = props.pegaosvaloresdovetor.map(function(kit){
    //     return kit.contador;
    // })


    function compraitempreco(){
        

        props.setPegavlcompra(props.pegavlcompra + props.kit.preco)
        props.setContadorcarrinho(props.contadorcarrinho + 1)
        // props.setContadordouseeffect(props.kit.contador)

        //Copia o vetor dos itens
        const vetorKits = [...props.vetorQueguardaositens, {nome: props.kit.nome,
        geracao: props.kit.geracao,
        saf: props.kit.saf,
        preco: props.kit.preco,
        imagem: props.kit.imagem,
        id: props.kit.id,
        contador: props.kit.contador}]

        console.log(typeof(props.kit.nome))


        //Pega os valores
        props.setpegaosvaloresdovetor([...props.vetorQueguardaositens, {nome: props.kit.nome,
            geracao: props.kit.geracao,
            saf: props.kit.saf,
            preco: props.kit.preco,
            imagem: props.kit.imagem,
            id: props.kit.id,
            contador: props.kit.contador}])

        console.log("aqui",props.vetorQueguardaositens)

        //Adiciona o vetor no localstorage
        const listaDoskits = JSON.stringify(vetorKits);
        if(vetorKits.length > 0){
        localStorage.setItem("Lista dos itens", listaDoskits);
        }

        props.setVetorqueguardaositens(vetorKits)

        //Fazer 1 map, se o id do item ===, adicionar 1 na quantidade, transforma variavel em 1, se n adiciona no carrinho.

        props.setChamacarrinho(1)
        
    }
    return(
        <div>
            <Styledositens>
            <div>
            <img src={props.kit.imagem} width = "225px" height={225} alt="ImgJinko"></img>
            <p><b>Marca: {props.kit.nome}</b></p>
            <p><b>Geração: {props.kit.geracao}w</b></p>
            <p><b>Sistema contra surto: {props.kit.saf}</b></p>
            <p><b>Preço: R${props.kit.preco},00</b></p>
            <Button>
            <button onClick={compraitempreco}>Adicionar ao carrinho</button>
            </Button>     
            </div>
            </Styledositens>
    </div>
  

    )
}

export default Main;