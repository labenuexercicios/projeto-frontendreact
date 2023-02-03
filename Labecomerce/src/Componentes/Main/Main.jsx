import { StyledMain, StyledSelect } from "./styleMain"
import React from "react"
import { Card } from "../Card.js/Card"
import { useState } from "react"


export const Main = ({ popUpHandler, produtos }) => {

    const [inputOrdem, setIputOrdem] = useState("")
    console.log(inputOrdem)

    return (
        <StyledMain>
            <StyledSelect value = {inputOrdem} onChange={(e)=>setIputOrdem(e.target.value)}>
                <option>Ordenar</option>
                <option>Mais barato primeiro</option>
                <option>Mais caro primeiro</option>
            </StyledSelect>
            {produtos.sort((a,b)=>{
                if(inputOrdem=="Mais barato primeiro"){
                if(a.preco>b.preco){
                    return 1
                }
                if(a.preco<b.preco){
                    return -1
                }}
                if(inputOrdem==="Mais caro primeiro"){
                    if(a.preco>b.preco){
                        console.log("aq")
                        return -1
                    }
                    if(a.preco<b.preco){
                        return 1
                    }}

            }).map((satelite) => {
                return (<Card id={satelite.id} popUpHandler={popUpHandler} produto={satelite.img} satelite={satelite} nome={satelite.nome} />)
            })
            }
        </StyledMain>
    )
}