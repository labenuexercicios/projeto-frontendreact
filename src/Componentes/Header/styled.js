import styled from "styled-components";
import imagemMercadoria from "../../imagem/img-brinq1.jpg"

export const HeaderContainer = styled.section `
    background-image: url(${imagemMercadoria});
    background-size: 100% 120%;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`

export const TituloContainer = styled.div`
    height: 20vh;
    width: 100vw; 
    display: flex;
    justify-content: left;
    align-items: center;
`

export const Titulo = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: cursive;
    color: white;
    padding-left: 40px;
    
`

export const Filtros = styled.section`
    text-align: center;
    font-family: cursive;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
    padding-left: 12px;
   
`

export const Inputs = styled.section`
    display: flex;
    justify-content: space-between;
    width: 44%;
    height: 5vh;
    padding-left: 10px;
   
   
`

export const Ordenacao = styled.section`
    height: 6vh;
    width: 25%;
    padding-right: 14px;
    color: white;
    display: flex;
    justify-content: space-around;

    label{
        font-size: 1.2rem;
        
    
    }
`