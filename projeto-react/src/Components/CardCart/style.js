import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35vh;
  width: 70vw;
  background: #ffffff10;

  .card-name{
    font-size: 0.7rem;
    text-align: center;
    font-weight: 600;
    color: black;
  }

  .card-price{
    color: black;
    font-size: 1.20rem;
    font-weight: 700;
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .card-quantity-button{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }

  .card-delete-button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  button{
    width: 30px;
    height: 36px;
    border-radius: 10px;
    background: none;
    border: none;
    border: 2px solid black;
    color: black;
    cursor: pointer;
    margin: 5px 5px;
  }
`;

export const Imagem = styled.img`
  width: 250px;
  height: 35vh;
  border-radius: 10px;
`;
