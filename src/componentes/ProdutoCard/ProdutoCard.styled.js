import styled from "styled-components";

export const ProdutoCardContainer = styled.article`
  border: 1px solid black;
  margin-left: 50px;
  margin-top: 30px;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

 
  .url {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  }

  h1 {
    font-size: 20px;
    color: #43434;
  }

  > div {
    margin-right: 50px;    

  }

  .card-header {
    display:flex;
    justify-content: center;
    font-size: 20px;

  }

  .card-preco {
    display:flex;
    justify-content: center;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 65px;

  }

  .card-carrinho button {
    margin-top: 5px;
    margin-left: 85px;
    background-color: #ff7f50;
    border: 1px solid black;
    border-radius: 5px;
    height: 30px;
    font-size: 17px;
    justify-content: center;
    cursor: pointer;

    :hover {
        cursor: pointer;
        filter: brightness(1.1)
    }

    :active {
        filter: brightness(0.95)
    }


  }
`;
