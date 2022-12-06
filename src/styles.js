import styled from "styled-components";
import logo from "./produto/bgApp3.jpg"

export const StyleApp = styled.section`
    background-image: url(${logo})
`


export const StyleCarrinho = styled.section`
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff80;

`
export const StyleBox = styled.section`
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-items: center;    
    
`
export const StyleFiltros = styled.section`
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff80;
       
`
export const StyleCard = styled.div`
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff80;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 300px;
    height: 400px;
    margin: 10px;  
    
    img{
        max-width: 200px;
        max-height: 200px;
        border-radius: 5px;
    }

`


export const StyleBody = styled.section`
    display: grid;
    grid-template-columns: 1fr 4fr 1.5fr 
`