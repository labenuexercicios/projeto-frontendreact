import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  height: 75vh;
  border: 1px solid black;
  width: 15vw;

  #card {
    text-align: center;
  }

  #descricao {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    height
    p {
      text-align: left;
      padding-left: 0.5vw;
    }
    
  }
`;
