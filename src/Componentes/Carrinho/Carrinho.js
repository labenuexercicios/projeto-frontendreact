import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import kits from "../Database/Database.json"
import { Itemdocarrinho } from "./Carrinhostyle";

function Carrinho(props) {

    const [salvaItens, setSalvaitens] = useState([]);

    //Parse para transformar em 1 array de objetos de volta
    useEffect(()=>{
        const listaDeitensstorage2 = JSON.parse(localStorage.getItem("Lista dos itens"))
        if(listaDeitensstorage2){
            setSalvaitens(listaDeitensstorage2)
        }
    },[props.vetorQueguardaositens])


    function removeitem(id) {
        
        const novoarray = salvaItens.filter((tirar)=>{
            if(tirar.id !== id){
                return tirar
            }
        
        })
        setSalvaitens(novoarray);
        //stringify pra transformar em string
        const itensstring = JSON.stringify(novoarray)
        //localstorage.setitem pra adicionar no localstorage
        localStorage.setItem("Lista dos itens",itensstring)
    }

    


    return (

        <div>
            {salvaItens.map((item)=>{
                return (<section>
                    <Itemdocarrinho>
                        <p>{item.contador}x - kit: 00{item.id}</p>
                        <p>Painel:{item.nome}</p>
                        <button onClick={()=> removeitem(item.id)}>Remover</button>
                    </Itemdocarrinho>
                </section>)
            })}
    
    </div>
    )

}

export default Carrinho;