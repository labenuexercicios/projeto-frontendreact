import styled from "styled-components";

export const CarrinhoContainer = styled.div `
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: white;
    background-color: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
`

export const ItensCarrinho = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    font-size: 0.8rem;

    section{
        padding: 20px;
    }

    button{
        font-size: 0.6rem;
        font-family: 'Poppins', sans-serif;
        width: min-content;
    }

    button:hover{
        background-color: gray;
    }
`

export const SecaoPrecoFinal = styled.section`
    padding-top: 12px;
    
    p{
        margin-bottom: 12px;
    }

    button{
        font-size: 0.8rem;
        font-family: 'Poppins', sans-serif;
        width: min-content;
        width: fit-content;
    }

    button:hover{
        background-color: gray;
    }



`
