import styled from "styled-components";

export const CardProdutoStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 250px;
  min-height: 400px;
  border-radius: 30px;
  background: white;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  .imagem-produto {
    width: 130px;
    /* height: 220px; */
  }

  .descricao{
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  .button {
    display: inline-block;
    border-radius: 7px;
    border: none;
    background: #83a01c;
    color: white;
    font-family: inherit;
    text-align: center;
    font-size: 13px;
    box-shadow: 0px 14px 56px -11px #444649;
    width: 10em;
    padding: 1em;
    transition: all 0.4s;
    cursor: pointer;
  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
  }

  .button span:after {
    /* content: "for free"; */    
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.7s;
  }

  .button:hover span {
    padding-right: 1.55em;
  }

  .button:hover span:after {
    opacity: 4;
    right: 0;
  }
`;
