import styled from "styled-components";

export const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    gap: 20px;
    background: linear-gradient(to top, #88beff,#0063dc, #001e76,#0057a3 90%);
    height: 420px;
    width: 500px;
    color: #fff5b4;
    font-size: 1.3rem;
    font-family: 'Luckiest Guy', cursive;
    padding: 15px;
`
export const FisrtStyledContainer = styled.div `
    display: flex;
    flex-direction: row;
    gap: 50px;
`
export const SecondStyledContainer = styled.div `
    display: flex;
    flex-direction: column;
`
export const ThirdStyledContainer = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px;
`


export const ImgCartStyled = styled.img `
    border-radius: 50%;
    width: 100px;
    height: 100px;
`
export const QuantityButton = styled.button`
     width: 30px;
    background-image: linear-gradient(to bottom, #0055ff, #001962, #0055ff);
    box-shadow: 0px 0px 7px rgb(5, 0, 47);
    border: none;
    height: 30px;
    padding: 7px;
    border-radius: 0.9rem;
    color: #ffffff;
    font-size: calc(0.25vw + 0.9em);
`
export const Div1CartStyled = styled.div `
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const Div2CartStyled = styled.div `
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const RemoveItembutton = styled.button`
     width: 150px;
    background-image: linear-gradient(to bottom, #0055ff, #001962, #0055ff);
    box-shadow: 0px 0px 7px rgb(5, 0, 47);
    border: none;
    height: 70px;
    padding: 7px;
    border-radius: 0.9rem;
    color: #ffffff;
    font-size: calc(0.25vw + 0.9em);
`