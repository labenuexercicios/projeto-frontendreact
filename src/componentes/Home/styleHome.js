import styled from "styled-components";

export const HomeContainer = styled.main`
  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 50%;
  padding: 50px;
  background-color: #fdd663;
  border-radius: 15px;
    h1{
      display: flex ;
      align-items: center;
    }
    button:hover {
                background-color: #483165;
                color:white;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      font-size: 10px;
      padding: 10px;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  @media screen and (min-device-width : 801px) and (max-device-width : 1200px) {
  /* computadores */
    font-size: 18px;
  }
`;



export const HomeOrdenacao = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  width: 55vw;
`;


export const HomeCard = styled.section`
 
  flex-direction: column;
  display: grid;
  justify-content: space-between;
  width: 55vw;
  grid-template-columns: 33% 33% 33%;
  row-gap: 10px;
  column-gap: 1px;


  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* celulares */
  flex-direction: column;
  display: grid;
  justify-content: space-between;
  width: 55vw;
  grid-template-columns: 50% 50%;
  row-gap: 10px;
  column-gap: 1px;

  @media screen and (min-device-width : 801px) and (max-device-width : 1200px) {
  /* computadores */
    font-size: 18px;
    
  }
`;
