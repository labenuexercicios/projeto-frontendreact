import styled from "styled-components";

export const DivCarrinho = styled.div `
    display: flex;
    flex-direction: column;
    gap: 3vh;
    padding-top: 1vh;
    border: solid black 1px;
    width: 18vw;
`;

export const DivItensCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    
`;

export const ContainerBotao = styled.div`
    display: flex;
    gap: 3vw;
    justify-content: space-between;
    padding-bottom: 1vh;
    padding-top: 1vh;
`;

export const BotoesQuantidade = styled.div`
    display: flex;
    gap:1vw;
`;

export const BotaoQuantidade = styled.button`
    padding: 0vw 0.5vw 0vw 0.5vw;
    background-color: #EDEDED;
    &:active {
        filter: brightness(0.95);
    }
`;

export const BotaoLixo = styled.button`
    display: flex;
    padding: 0.2vw;
`;

export const Total = styled.p`
    width: 14vw;
    text-align: center;
    align-self: flex-end;
`;