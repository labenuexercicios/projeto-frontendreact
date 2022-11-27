import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35vh;
  width: 70vw;

  .card-name{
    font-size: 0.7rem;
    text-align: center;
    font-weight: 600;
    color: rgb(66, 70, 77);
  }

  .card-price{
    color: rgb(0, 96, 177);
    font-size: 1.20rem;
    font-weight: 700;
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .card-carting{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-delete{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  button{
    width: 30px;
    height: 36px;
    border-radius: 10px;
    background-color: #ffd100;
    border: none;
    color: white;
  }
`;

export const Imagem = styled.img`
  width: 250px;
  height: 35vh;
  border-radius: 10px;
`;
