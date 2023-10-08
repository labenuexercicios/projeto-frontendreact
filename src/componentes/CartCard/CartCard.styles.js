import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: auto;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`
export const CardItem = styled.div`
    width: 400px;
    border: solid black 2px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`

export const ImagemCarrinho = styled.img`
    width: 60px;
    height: 50px;
    left: 0;
`

export const TextoCarrinho = styled.p`
    text-align: center;
`

export const PrecoCarrinho = styled.p`
    background-color: orange;

`
export const ButaoDelete = styled.button`
    background-color: red;
    cursor: pointer;
`

export const Quantidade = styled.div`
    
`