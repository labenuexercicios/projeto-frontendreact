import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  border: 1px solid black;
  width: 15vw;

  #card {
    text-align: center;
    height: 50vh;
    background-color: #f0f0f0;
  }

  #img-container {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  #img {
    width: 100%;
    height: 100%;
  }

  #descricao {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height:20vh;
  }

  #txt {
    padding-top: .5rem;
    padding-left: .5rem;
  }

  #btn {
    display: flex;
    padding-top: 2rem;
    justify-content: center;
    height: 10vh;
  }
`;
