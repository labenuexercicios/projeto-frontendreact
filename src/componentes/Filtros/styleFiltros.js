import styled from "styled-components";

export const FiltroContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 50%;
  padding: 20px;
  background-color: #483165;
  border-radius: 15px;
  color: white;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  @media screen and (min-device-width : 801px) and (max-device-width : 1200px) {
  /* computadores */
    display: flex;
    flex-direction: row;
    font-size: 18px;
  }
`;



