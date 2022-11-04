import React from "react";
import {TituloPagina, Cabecalho} from "./styled";


function Header (props){

    return (
        <>
        <Cabecalho>
        <TituloPagina>LOJA DE VIAGENS ESPACIAIS</TituloPagina>
        <section>
            <input
            placeholder="busca"
            value={props.query}
            onChange={(event) => props.setQuery(event.target.value)}
            />
            <input 
             placeholder="Preço mínimo"
             type="number"
             value={props.minPrice}
             onChange={(event) => props.setMinPrice(event.target.value)}
            />
    
            <input 
             placeholder="Preço máximo"
             type="number"
             value={props.maxPrice}
             onChange = {(event) => props.setMaxPrice(event.target.value)}
            />

            <label for="sortingParameter">Ordenar por:</label>
            <select
                name="sortingParameter"
                value={props.sortingParameter}
                onChange={(event) => {props.setSortingParameter(event.target.value)}}
            >
            <option value={"preco"}>Preço</option>
            </select>

            <select
                value={props.order}
                onChange={(event) => {props.setOrder(event.target.value)}}
            >
            <option value={"asc"}>Crescente</option>
            <option value={"desc"}>Decrescente</option>
            </select>
        </section>
        </Cabecalho>
        </>
    )
}

export default Header