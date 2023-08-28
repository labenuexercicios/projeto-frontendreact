import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  border: 1px solid black;

  header {
    display: flex;
    justify-content: space-between;
    padding-right: 1vw;
    padding-left: 1vw;
    padding-top: 2vw;
  }

  #order {
    display: flex; 
    align-items: center;
    gap: .5vw;
  }

  main {
    display: flex;
    gap: 5vw;
    padding-top: 6vh;
    align-items: center;
    justify-content: center;
  }
`;
