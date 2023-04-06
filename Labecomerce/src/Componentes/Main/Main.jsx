import { StyledMain, StyledSelect, StyledButton, StyledCondicionais } from "./styleMain"
import React from "react"
import { Card } from "../Card.js/Card"
import { useState } from "react"


export const Main = ({ popUpHandler, produtos, filterHandler, valorMax, valorMin, buscaNome }) => {

    const [inputOrdem, setIputOrdem] = useState("")

    return (
        <StyledMain>
            <StyledCondicionais>
            <StyledSelect value = {inputOrdem} onChange={(e)=>setIputOrdem(e.target.value)}>
                <option>Ordenar</option>
                <option>Mais barato primeiro</option>
                <option>Mais caro primeiro</option>
            </StyledSelect>
            <StyledButton onClick={filterHandler}>Filtro</StyledButton>
            </StyledCondicionais>
            {produtos.filter((satelite)=>{
                if(satelite.preco<=valorMax && satelite.preco>=valorMin && satelite.nome.toLowerCase().includes(buscaNome.toLowerCase())){
                    return satelite
                }
                else{
                if(valorMax == 0 && satelite.preco>=valorMin && satelite.nome.toLowerCase().includes(buscaNome.toLowerCase())){
                    return satelite
                }
                if(satelite.preco<=valorMax && satelite.nome.toLowerCase().includes(buscaNome.toLowerCase())){
                    return satelite
                }}
        
            }).sort((a,b)=>{
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