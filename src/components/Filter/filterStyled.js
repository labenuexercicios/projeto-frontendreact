import styled from "styled-components";

//Filter

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    width: 13vw;
    height: 15vh;
    gap: 1vh;
    padding-left: 1vw;
    padding-top: 1vh;
    border: 1px solid black;
`;

export const DivInput = styled.div `
    display: flex;
    flex-direction: column;
    width: 10vw;
    gap: 0.5vh;
`;

export const BotaoCarrinho = styled.div `
    padding-top: 4vh;
    background-color: white;
`;

export const Contador = styled.div `
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 80%;
    text-align: center;
    position: absolute;
    top: 14px;
    left: 24px;
`;

export const DivImgContador = styled.div`
    display: flex;
    position: relative;
`;

export const InputFiltro = styled.input`
    border: 1px black solid;
    padding-left: 0.4vw;
`;


//Nav

export const InputPesquisaNome = styled.input `
    color: black;
`;

export const SelectOrdenar = styled.select `
    color: black;
`;

export const NavStyled = styled.nav `
display: flex;
justify-content: space-between;
background-color: #3B5E8C;
color: white;
padding: 2vh;
`;