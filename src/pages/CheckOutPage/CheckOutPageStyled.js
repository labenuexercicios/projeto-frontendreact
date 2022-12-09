import styled from "styled-components";

export const NavStyled = styled.nav `
    display: flex;
    justify-content: flex-end;
    background-color: #3B5E8C;
    color: white;
    padding: 2vh;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 5vw;
    padding-top: 5vw;
`;

export const Carrinho = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px #EBEEF3 solid;
`;

export const TituloCarrinho = styled.div`
    background-color: #C4CEDC;
    padding: 2vh;
`;

export const TituloEntrega = styled.div`
    background-color: black;
    color: white;
    padding: 2vh;
`;

export const Entrega = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px #EBEEF3 solid;
`;



//Itens no carrinho (checkout)
export const DivItensCarrinho = styled.div`
    display: flex;
    align-items: center;
    gap: 7vh;
    padding: 4vh;
    border-bottom: 1px #EBEEF3 solid;
    
`;

export const ContainerBotao = styled.div`
    display: flex;
    gap: 5vw;
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

export const DivTotalBotao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 3vw;
    padding: 4vh 1vw 4vh 1vw;
    border-bottom: 1px #EBEEF3 solid;
`;