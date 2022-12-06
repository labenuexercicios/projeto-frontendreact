import styled from "styled-components";


export const CarrinhoContainer = styled.div `
   
    background-size: 20% 20%;
    background-repeat: no-repeat;
    font-family:cursive;  
    text-align: center;
    color: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* margin-bottom:10px; */
    justify-content: center;  
    width:100% ;
    align-items: center;
  

    .posicaoImgCarrinho{
        display: flex;
        justify-content: space-between;
        width: 80%;
        min-height: 10%;
    }
    .posicaoItensCarrinho{
        display: flex;
        flex-direction: column;
        width: 80%;
        min-height: 80%;
       
    }

    img{
        width: min-content;
        height:5vw;
        
    }
     button{       
      width: 12vw;
      height: 5vh;    

    } 
`



export const ItensCarrinho = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 3px;
    align-items: center;
    padding: 20px ;
    /* border-top: 1px solid #2e5894; */
    border-bottom: 1px solid #2e5894;
    width:100%;   
    font-size: 0.8rem; 
    flex-wrap: wrap;
    min-height: 70%;
    
    
   
   
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
    .botoesCarrinho{
        width: 40%;
        

    }
   
    
`

export const SecaoPrecoFinal = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight:bold;
   
    p{
        margin-bottom: 12px;        
    }
    div{
        display: flex;
        gap: 10px;
    }

    button{
        font-size: 0.9rem;
        font-family: cursive;
        font-weight:bold; 
    }

    button:hover{
        background-color: gray;
       
    }



`
