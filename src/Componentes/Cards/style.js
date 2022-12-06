import styled from "styled-components";

export const Card = styled.section `
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
    width: 22vw;
    height: 65vh;
    margin-bottom: 32px;
    box-shadow: 0px 5px 5px 5px rgba(102,102,102,1);
    padding: 10px;
    background-color:#2e5894;
    justify-content: center;
`

export const PrimeiroBloco = styled.span`


`

export const ImagemProdutos = styled.img`
    width: 20vw;
    height: 42vh;
    border-radius: 12px;
`

export const TextoCard = styled.div`
    /* height: 44%; */
    font-size: 0.8rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export const BotaoCarrinho = styled.span`
    button{
        height: 6vh;
        width: 12vw;
        border: none;
        border-radius: 10px;
    }
    button:hover{
        background-color: gray;
    }
`
//onde fica nome do produto e o preço
export const SegundoBloco = styled.section`  
    height: 50%;
    display: flex;
    flex-direction: column;   
    align-items: center;    
    p{
        margin: 2px;        
    }
    
`


    
