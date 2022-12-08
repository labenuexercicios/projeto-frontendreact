import styled from "styled-components";

export const Card = styled.section `
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: Arial, Helvetica, sans-serif;
    width: 20vw;
    height: 80vh;
    margin-bottom: 32px;
    box-shadow: 0px 8px 8px 8px rgba(102,102,102,1);
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    background-color: black;
`

export const PrimeiroBloco = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ImagemPlanetas = styled.img`
    width: 20vw;
    height: 22vh;
    border-radius: 12px;
`

export const TextoCard = styled.div`
    /* height: 44%; */
    font-size: 0.8rem;
    color: white;
`

export const BotaoCarrinho = styled.span`

    button{
        height: 6vh;
        width: 3vw;
        border: none;
        border-radius: 10px;
    }

    button:hover{
        background-color: gray;
    }
`

export const SegundoBloco = styled.section`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    p{
        margin: 8px;
    }
`
export const ParagrafoValorPessoa = styled.p`
    font-size: 0.6rem;
    
`