import React from "react";


 export default function Filtros(props) {
    const onChangeValorMin = (e) => {
        props.setValorMin(e.target.value)
    }
    const onChangeValorMax = (e) => {
        props.setValorMax(e.target.value)
    }
    const onChangeOrdenaValor = (e) => {
        props.setOrdenaValor(e.target.value)
    }
    return (
        <>
        <h1>FILTROS</h1>

        <input 
        type="number" 
        placeholder="A partir de"
        value={props.valorMin}
        onChange={onChangeValorMin}
        />

        <input 
        type="number" 
        placeholder="Até"
        value={props.valorMax}
        onChange={onChangeValorMax}/>

        <select value={props.ordenaValor} onChange={onChangeOrdenaValor}>
            <option value="" >Ordenar</option>
            <option value="crescente" >Crescente</option>
            <option value="decrescente" >Decrescente</option>
        </select>
        </>
        
    )
 }