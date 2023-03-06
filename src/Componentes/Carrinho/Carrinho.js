import React from "react";
import { Itemdocarrinho } from "./Carrinhostyle";

function Carrinho(props) {



////////->->->->->->Fico faltando apaga tudo do localstorage<-<-<-<-<-<-


    function removeitem(preco, id) {
        const kit = props.salvaItens && props.salvaItens.find((item) => item.id === id)
        console.log(kit);
        if(props.pegavlcompra >= 0){
            props.setPegavlcompra(props.pegavlcompra - preco)
        }
        if (kit.amount > 1) {
            const novoCarrinho = props.salvaItens.map((item) => {
              if (kit.id === item.id && item.amount >= 1) {
                return { ...item, amount: item.amount - 1 };
              } else {
                return item;
              }
            });
        props.setSalvaitens(novoCarrinho)
    }
    if (kit.amount === 1) {
        const carrinhoSemItem = props.salvaItens.filter((item) => item.id !== id);
        props.setSalvaitens(carrinhoSemItem);
    }
    console.log(props.setSalvaitens.length)
    if(props.setSalvaitens.length === 0){
        console.log("e pra apaga tudo")
        localStorage.removeItem("Lista dos itens");
    }
}


    return (
        <div>
            <h1>Carrinho:</h1>
            <h5>Preço total:{props.pegavlcompra}</h5>
            {props.salvaItens.map((item) =>{
                return(
                    <Itemdocarrinho>
                    <h3>{item.nome}</h3>
                    <p>{item.amount}x - Valor:{item.preco}</p>
                    <button onClick={()=>removeitem(item.preco, item.id)}>Remover</button>
                    </Itemdocarrinho>
                )
            })}
        </div>
    )

}

export default Carrinho;