import styled from "styled-components";

export const CarrinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2%;
  flex: 1;
  padding: 10px;
  padding-top: 30px;
  background-color: #963b74;
  border-radius: 15px;
  color: white;

    button:hover {
              background-color: #483165;
              color:white;
          }
    button{
        display: flex;
        justify-content: center;
        width: 10vw;
        border-radius: 5px;
      }

      .btComprar{
        
        color: #483165;
        border-radius: 30px;
        font-size: 30px;
        background-color: #fdd663;
        width: 20vw;
      }
      @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
        .btComprar{
          width: 100%;
          height: 10vh;
          border-radius: 15px;
          font-size: 20px;
        }
        button{
          width: 90%;
        }
        h1{
          font-size: 20px;
        }
  }
`;






