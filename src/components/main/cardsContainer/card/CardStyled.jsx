import styled from "styled-components";

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 3%;
    background: linear-gradient(to top, #ffffff,#0063dc, #001e76,#0057a3 90%);
    height: 420px;
    width: 500px;
    color: #fff5b4;
    font-size: 1.3rem;
    font-family: 'Luckiest Guy', cursive;
    padding: 10px 5px 10px 5px;
`
export const ImgCardStyled = styled.img`
    border: 1px solid black;
    border-radius: 10px;
    background-color: #6aff00;
    height: 200px;
    width: 200px;
`

export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    color: white;
`

export const ButtonStyled = styled.button`
     width: 190px;
    background-image: linear-gradient(to bottom, #0055ff, #ffffff, #0055ff);
    box-shadow: 0px 0px 7px rgb(5, 0, 47);
    border: none;
    height: calc(0.7vw + 1.5em);
    padding: 7px;
    border-radius: 0.9rem;
    color: black;
    font-size: calc(0.25vw + 0.9em);
`

export const DescriptionStyled = styled.p `
    border: 1px solid black;
    border-radius: 10px;
    background-color: #000956;
    padding: 7px;
    height: 200px;
    width: 275px;
`