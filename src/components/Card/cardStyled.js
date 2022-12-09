import styled from 'styled-components';


export const BotaoStyled = styled.button `
    background-color: #3B5E8C;
    color: white;
    padding: 2vh;
    border-radius: 4%;
    border: solid gray 0.2px;
    &:hover {
        background-color: #35547E;
        cursor: pointer;
    }
    &:active {
        filter: brightness(0.95);
    }
`;

export const ContainerCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;
    width: 30vw;
    padding: 4%;
    gap: 1.5vh;
    &:hover {
        transition: all 0.5s ease-in;
        transform: scale(1.1);
    }
    padding-left: 8vw;
`;

export const CardDescricao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
`;