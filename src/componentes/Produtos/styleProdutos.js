import styled from "styled-components";

export const ProdutosCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  background-color: #f5e1c8;
  width: 18vw;
  height: 55vh;

    img{
      width: 90%;
    }

    button{
      display: flex;
      justify-content: center;
      width: 70%;
      border-radius: 5px;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* celulares */      
      width: 25vw;
      height: 45vh;      
    }
    button{
      width: 100%;
      font-size: 12px;
    }
    p{
      font-size: 12px;
    }
`;


