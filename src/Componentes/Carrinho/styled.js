import styled from "styled-components";

export const CarrinhoContainer = styled.div `
    font-family:cursive;  
    text-align: center;
    color: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;
  

    .posicaoImgCarrinho{
        display: flex;
        justify-content: space-between;
    }
    .posicaoItensCarrinho{
        display: flex;
        flex-direction: column;
        
    }

    img{
        width: min-content;
        height:5vw;
        
    }
`

export const ItensCarrinho = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3px;
    align-items: center;
    padding: 20px ;
    border-top: 1px solid #2e5894;
    border-bottom: 1px solid #2e5894;
    width:100%;   
    font-size: 0.8rem;
    height: 190px;
    >p{
        color: gray;
        font-size: 20px;
    }

    section{
        padding: 5px;
    }

   button{
    font-size: 0.7rem;
    font-family: cursive;
    width: 5vh;    
    height:2vw;       
    }
    button:hover{
    background-color: red;        
    }
    .removemItem{
        width: 20vh; 
    }
   
    
`

export const SecaoPrecoFinal = styled.section`
    
    
    p{
        margin-bottom: 12px;        
    }

    button{
        font-size: 0.9rem;
        font-family: cursive;
        width: min-content;
        width: fit-content;
        
    }

    button:hover{
        background-color: gray;
        ;
     
       
    }



`
