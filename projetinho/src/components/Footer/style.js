import styled from "styled-components";

export const FooterContainer = styled.footer`
  
  
  bottom: 0;
  left: 0;
  height:10vh;
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #48cae4;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: black;
  

  .RedesSociais img {
    margin-left: 15px;
    gap: 10px;
    height: 30px;
    align-content: center;
  }

  .Pagamentosicone img {
    height: 20px;
    gap: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
  }

  .blocoParceiro img {
    padding-top: 3px;
    height: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    gap:10px;
    width: 70px;
  }


`;
