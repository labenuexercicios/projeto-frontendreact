import React from "react";
import {Titulo, HeaderContainer, Filtros, TituloContainer, Inputs, Ordenacao} from "./styled";

function Header (props){

    return (
        
        <HeaderContainer>
            <TituloContainer>
                <Titulo>LOJA DE BRINQUEDOS ESPACIAIS</Titulo>
            </TituloContainer>
            
            <Filtros>
                <Inputs>
                    <input
                    placeholder="Busca por produto"
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
                </Inputs>
                <Ordenacao>
                    <label for="sortingParameter">Ordenar preço:</label>
                
                    <select
                        value={props.order}
                        onChange={(event) => {props.setOrder(event.target.value)}}
                    >
                    <option value={"asc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                    </select>
                </Ordenacao>
            </Filtros>
        </HeaderContainer>
        
    )
}

export default Header