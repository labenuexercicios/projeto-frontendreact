import styled from "styled-components";
import imagemUniverso from "../../imagem/espaço.jpg"

export const HeaderContainer = styled.section `
    width: 100%;
    height: 24vh;
    background-image: url(${imagemUniverso});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        height: 100%;
        widght: 100%;
    }

`



export const TituloContainer = styled.div`
    height: 50vh;
    width: 100vw; 
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    padding-top: 15vh;
`

export const Titulo = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: white;
    text-shadow: 3px 4px black;
`

export const Filtros = styled.section`
    
    text-align: center;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
    padding-left: 12px;
    padding-top: 0.5em;
`

export const Inputs = styled.section`
    display: flex;
    justify-content: space-between;
    width: 44%;
    height: 5vh;
`

export const Ordenacao = styled.section`
    height: 5vh;
    width: 25%;
    padding-right: 14px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center; 

    label{
        font-size: 1rem;
        text-shadow: 2px 2px black;
        font-weight: bold;
    
    }
`