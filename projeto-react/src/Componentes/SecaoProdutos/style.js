import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    grid-column-start: 2;
    align-items: center;
    justify-items: center;
    
`

export const Parametros = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    select {
        border-radius: 10px;
        padding: 3px;
        margin-left: 5px;
        cursor: pointer;
    }`

export const EstiloLista = styled.div`
    ul {
        justify-content: center;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        gap: 10px;
    }
    ul li {
        padding: 5px;
        border: 1px solid black;
    }
    ul li img {
        max-width: 250px;
    }
`