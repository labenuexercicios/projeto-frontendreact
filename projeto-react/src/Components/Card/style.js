import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 20vw;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  background: #ffffff10;
  border: 1px solid #ffffff30;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 35vh;
  border-radius: 10px;
`;

export const Legenda = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;


  .card-name{
    font-size: 0.7rem;
    text-align: center;
    font-weight: 600;
    padding-top: 8px;
    color: black;
    text-shadow:
        0 0 2px #fff,
        0 0 7px #fff,
        0 0 21px #fff,
        0 0 30px #4299e1,
        0 0 80px #4299e1,
        0 0 90px #4299e1,
        0 0 100px #4299e1,
        0 0 120px #4299e1;
  }

  .card-price{
    font-size: 1.20rem;
    font-weight: 700;
    padding: 10px;
    display: flex;
    justify-content: center;
    color: black;
    // text-shadow:
    //   0 0 2px #fff,
    //   0 0 7px #fff,
    //   0 0 21px #fff,
    //   0 0 30px #4299e1,
    //   0 0 80px #4299e1,
    //   0 0 90px #4299e1,
    //   0 0 100px #4299e1,
    //   0 0 120px #4299e1;
  }

  .card-carting{
    display: flex;
    justify-content: center;
    align-items: center;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      width: 60%;
      height: 36px;
      border-radius: 8px;
      border: none;
      color: white;
      font-weight: 600;
      background-color: black;
      animation: pulsate 1.5s infinite alternate;  
      border: 0.2rem solid #fff;
      border-radius: 2rem;
      padding: 0.4em;
      box-shadow: 0 0 .1rem #fff,
            0 0 .1rem #fff,
            0 0 1rem #4299e1,
            0 0 0.8rem #4299e1,
            0 0 0.8rem #4299e1,
            inset 0 0 1.3rem #4299e1; 

      :hover{
        cursor: pointer;
        filter: brightness(1.1);
      }
    }
  }
`;
