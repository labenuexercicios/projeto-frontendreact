import React from "react";
import { StyleFiltros } from "../../styles";


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
        
        <StyleFiltros>
            <section>
                
                <ul>
                    <h1>FILTROS</h1>
                    <p>Valor inicial</p>
                    <input 
                    type="number" 
                    placeholder="A partir de"
                    value={props.valorMin}
                    onChange={onChangeValorMin}
                    />
                    <p>Valor limite</p>
                    <input 
                    type="number" 
                    placeholder="Até"
                    value={props.valorMax}
                    onChange={onChangeValorMax}/>
                    <p>Ordenar por valor</p>
                    <select value={props.ordenaValor} onChange={onChangeOrdenaValor}>
                        <option value="" >Ordenar</option>
                        <option value="crescente" >Crescente</option>
                        <option value="decrescente" >Decrescente</option>
                    </select>
                </ul>
            </section>
        </StyleFiltros>
        </>
        
    )
 }