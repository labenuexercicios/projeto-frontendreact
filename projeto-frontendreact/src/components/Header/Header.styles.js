import styled from "styled-components";

export const MainHeader = styled.header`
    /* border: 2px solid white; */
    background-color: black;
    height: 9vh;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 4px;
    gap: 10px;
    /* border: 2px solid yellow; */
    width: 80%;
`
export const ButtonLogo = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`
export const ImagemLogo = styled.img`
    /* border: 2px solid red; */
    height: 20vh;
    width: 15vw;
    /* margin-left: 5px; */
`
export const Buscador = styled.div`
/* border: 2px solid red; */

    input{
        width: 20vw;
        height: 5vh;

        border-radius: 1rem 0 0 1rem;
        border: none;

        font-family: "Poppins";
        
    }
`
export const ButtonPesquisar = styled.button`
    border: none;
    border-radius: 1px;
    width: 4vw;
    height: 5vh;
    border-radius: 0 1rem 1rem 0;
    font-family: "Poppins";
    color: white;
    background-color: orange;
    cursor: pointer;
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
    height: 4vh;
    font-family: "Helvetica Neue",Helvetica;
`
export const CartButton = styled.button`
    background-color: black;
    border: none;
`
export const ImagemCarrinho = styled.img`
    /* border: 2px solid red; */
    height: 5vh;
    position: relative;
    cursor: pointer;
`
export const CartQuantity = styled.div`
    /* border: 2px solid white; */
    background-color: white;
    position: absolute;
    top: 40px;
    color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 20px;
    height: 20px;
`