import React from "react"
import { ContainerFiltros } from "./styleFiltros"

const Filtros = ({minPrice, setMinPrice, maxPrice, setMaxPrice, sortingParameter,  
    setSortingParameter, order, setOrder}) => {

    return (

        <ContainerFiltros>
            <div className="Div-filtros">
                <h1>Filtra por:</h1>
                <p>Menor Preço:</p>

                <input
                placeholder="Preço mínimo"
                type="number"
                value={minPrice}
                onChange={(ev)=>{setMinPrice(ev.target.value)}}
               />
                
                <p>Maior Preço:</p>
                <input 
                placeholder="Preço máximo"
                type="number"
                value={maxPrice}
                onChange={(ev)=>{setMaxPrice(ev.target.value)}}
              
              />
            <span>
                <label for="sortingParameter">Ordenar por:</label>
                <select 
                nome="sortingParameter"
                value={sortingParameter}
                onChange={(ev) => {setSortingParameter(ev.target.value)}}
                >
                    <option value={"nome"}>Ordem alfabética</option>
                    <option value={"preco"}>Preço</option>
                    <option value={"data"}>Data </option>
                </select>

                <select 
               
                value={order}
                onChange={(ev) => {setOrder(ev.target.value)}}
                >
                    <option value={"asc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                    
                </select>
                         
               
                </span>
            </div>
        </ContainerFiltros>

    )
}

export default Filtros