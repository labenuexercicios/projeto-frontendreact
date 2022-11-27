import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: black;
    height: 8vh;
    display: flex;
    padding: 4px;
    gap: 10px;
    align-items: center;
    justify-content: space-evenly;
`

export const ImagemLogo = styled.img`
    /* border: 2px solid red; */
    height: 7vh;
    width: 10vw;
    margin-left: 16px;
`
export const Buscador = styled.div`
/* border: 2px solid red; */

    input{
        width: 50vw;
    }
`

export const ButtonPesquisar = styled.button`
    border: 2px solid orange;
    border-radius: 1px;
    background-color: orange;
`

export const FilterCart = styled.div`
    /* border: 2px solid red; */
    display: flex;
    gap: 18px;
    align-items: center;
    margin-right: 16px;
`

export const MinimumMaximum = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const SelectOrder = styled.select`
    /* border: 2px solid red; */
    height: 3vh;
`
export const ImagemCarrinho = styled.img`
    /* border: 2px solid red; */
    height: 5vh;
`
export const CartButton = styled.button`
    background-color: black;
    border: none;
`
export const ButtonLogo = styled.button`
    border: none;
    background-color: black;
`

