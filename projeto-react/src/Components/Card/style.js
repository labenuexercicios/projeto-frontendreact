import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 20vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  background-color: #fff;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 35vh;
  border-radius: 10px;
`;

export const Legenda = styled.div`
  display: flex;
  flex-direction: column;


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
    padding-top: 8px;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      :hover{
        cursor: pointer;
        filter: brightness(1.1);
      }
    }
  }

  .top-basket-icon {
    margin-bottom: 3px;
    margin-right: 5px;
    width: 19px;
    height: 17px;
  }

  button{
    width: 60%;
    height: 36px;
    border-radius: 8px;
    background-color: #ffd100;
    border: none;
    color: white;
    font-weight: 600;
  }
`;
