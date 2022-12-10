import styled from "styled-components";

export const CardCarrinhoStyled = styled.section`
  display: flex; 
  border: solid #bebebe 1px;
  align-items:center;
  justify-content: space-evenly; 
  width: 100vw; 
  background: white;
  height: 180px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  .imagem-produto {
    height: 150px;
  }

.itens-descricao{
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  

}

  .descricao{
    display: flex;
    gap: 10px;
    flex-direction: row; 
  }
  
  .buttons {
    display: flex;
    justify-content: space-evenly;
    border-radius: 7px;
    border: none;    
    color: black;
    font-family: inherit;
    text-align: center;
    font-size: 13px;
    /* box-shadow: 0px 14px 56px -11px #607aa0; */
    width: 220px;
    padding: 1em;
    transition: all 0.4s;
    cursor: pointer;
  }

  .buttons span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
    
  }  

  .buttons:hover span {
    padding-right: 0.55em;
  }  

  .button-quantidade{
    border: none;
    border-radius: 10px;
    border-left: 10px;
    width: 20px;
    height: 20px;
    color: white;
    background: #83a01c;
  }
  .button-delete{
    border: none;
    border-radius: 10px;
    border-left: 10px;
    height: 20px;
    color: white;
    right: 0;
    justify-self: center;
  } 
  
  .total-item{
    justify-self: flex-end;
  }
`;
