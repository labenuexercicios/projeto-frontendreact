import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: auto;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-width: 30vw;
`
export const CardItem = styled.div`
    width: 300px;
    border: solid black 2px;
    min-height: 60px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    flex-wrap: nowrap;
    min-width: 300px;
    margin-top: 20px;
`

export const ImagemCarrinho = styled.img`
    width: 80px;
    height: 100%;
    left: 0;
`

export const TextoCarrinho = styled.p`
    text-align: center;
`

export const PrecoCarrinho = styled.p`
    background-color: orange;
    width: 60px;
    height: 30px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;


`
export const ButaoDelete = styled.button`
    background-color: red;
    cursor: pointer;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const Quantidade = styled.div`
    background-color: coral;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Total = styled.h3`
    color:black;
`
export const ContainerDetalhes = styled.div`
    right: 0;
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 3px;
    justify-content: center;
    align-items: center;
    
`
