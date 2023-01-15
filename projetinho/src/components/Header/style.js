import styled from "styled-components";

export const HeaderContainer = styled.header`
  /* height: 15vh;
width: 100%;

display: flex;
align-items: center;

color:#000000;
gap: 10px;
padding: 10px; */


justify-content: space-between;
  display: flex;
  position: fixed;
  background: #48cae4;
  align-items: center;
  
  min-width: 100vw;
  height: 15vh;
  padding: 10px;
  z-index: 1;

  .InputContainer {
    background: #c8e7ff;
    height: 5vh;
    width: 500px;
    right: 100px;
    margin: 5px;
    border-radius: 10px 20px 30px;
  }
  .BotaoStilo {

    height: 5vh;
    right: 5px;
    border-radius: 10px;
    gap: 10px;
    background: #c86bfa;
    :hover {
    transform: scale(1.1);
    background-color: #3366ff;
    color: white;
  }
  }

  .BotaoPesquisa {
    display: flex;
  }

  .botaoHome {
    display: flex;
    padding-right: 10px;
  }

  .botaoHome button {
    width: 80px;
  }
  
  .BotaoPesquisa{
    margin-right:10px;
  }

  .SelectPesquisa {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    height: 50px;
    border: #c86bfa 3px;
    border-radius: 10px;
    border: #000000;
    
  }
  .logotipo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .Ola {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
  }
  .Ola h3 {
    padding-top: 8px;
  }

  .Ola img {
    padding-bottom: 10px;
  }
`;
