import React from "react";
import { DivFiltros } from "./style";

export default function SecaoFiltros(props){
       
    return(
        <DivFiltros>
            <h1>Filtros</h1>

            <label>Valor mínimo</label>
            <input placeholder="Insira valor mínimo" type="number" value={props.valorMinimo} onChange={(e)=>{props.setValorMinimo(e.target.value)}}></input>

            <label>Valor máximo</label>
            <input placeholder="Insira valor máximo" type="number" value={props.valorMaximo} onChange={(e)=>{props.setValorMaximo(e.target.value)}}></input>

            <label>Nome do produto</label>
            <input placeholder="Pesquisa" type="text" value={props.nomeProduto} onChange={(e)=>{props.setNomeProduto(e.target.value)}}></input>

        </DivFiltros>
    )
}