import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  max-width:100vw; 

  header {
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding-right: 2vw;
    padding-left: 2vw;
    padding-top: 2vw;
    height: 10vh;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  }

  #order {
    display: flex; 
    align-items: top;
    gap: .5vw;
  }

  main {
    display: flex;
    gap: 5vw;
    padding-top: 6vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-height: 87vh; 
    overflow-y: auto;
  }
`;
