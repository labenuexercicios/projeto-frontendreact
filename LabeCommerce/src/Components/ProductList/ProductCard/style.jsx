import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid black;
  
  display: flex;
  flex-direction: column;
  margin: 25px;
  gap: 10px;
  height: auto;
  width: 40vw;
  align-self: center;

  img {
    border: 1px solid black;
    height: auto;
    width: auto;
  }

  p {
 
    margin-left: 10px;
  }

  button {
    align-self: center;
    margin-bottom: 10px;
  }
`;
