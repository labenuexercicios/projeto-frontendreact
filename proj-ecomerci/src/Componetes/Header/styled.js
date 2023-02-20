import styled from "styled-components";

export const Logo = styled.h1``;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    height: 35vh;
    background-image: url(https://i.makeagif.com/media/11-22-2015/3qEEfT.gif);
    color: aqua;
    background-repeat: no-repeat;
    background-color: black;
    align-items: center;


    .logoCarrinho {
    height: 50px;
    margin-right: 20px;
    }


    .parceiros {
        display: flex;
        flex-direction: column;
        margin-top: -100px;
        height: 3vh;
        width: 6vw;
        img{
            width: 100px;
        }     
    }

    .filtros {
    display: flex;
    justify-content: center;
    margin-left: 100px;
    background-color: aqua;
    }

    .logo img{
    margin-left:100px;
    }
`;
export const BuscarNave = styled.header`
    display: flex;
    gap: 10px;
    height: 20px;

    input {
    width: 300px;
    height: 20px;
    }
`;
