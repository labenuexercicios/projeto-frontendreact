import styled from "styled-components";
import imagemMercadoria from "../../imagem/img-brinq1.jpg"

export const HeaderContainer = styled.section `
    background-image: url(${imagemMercadoria});
    background-size: 100% 120%;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 30vh;

    >div{
        display: flex;
        align-items: flex-start;
        width: 100%;
        

    }
   
`

export const TituloContainer = styled.div`
    height: 40%;
    display: flex;
    justify-content: left;
    align-items: center;
    min-width:100%;
 
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
    width: 90%;
    padding-bottom: 20px;
    padding-left: 12px;  
       
`

export const Inputs = styled.section`
    display: flex;
    justify-content: space-between;
    width: 55%;
    height: 5.5vh;
    padding-left: 10px;

   input{
    border-radius: 10px;
    border: none;
    padding: 10px;
   }
   
`

export const Ordenacao = styled.section`
    
    width: 25%;
    padding-right: 14px;
    color: white;
    display: flex;
    justify-content: space-around;
    font-family: cursive;
    label{
        font-size: 1.2rem;
        
    }   
    select{
        border-radius: 10px;
    }
    
`
export const BotaoCarrinho =styled.section`
display: flex;
justify-content: space-between;
border-radius: 10px;




img{    
    width: min-content;
    height:1.5vw;   
   }
 `
