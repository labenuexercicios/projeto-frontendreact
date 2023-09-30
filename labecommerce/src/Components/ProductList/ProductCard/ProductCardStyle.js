import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 15vw;
  z-index: 1000;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

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
    height:20vh;
    //background-color:white;
    opacity:0.7;
  }

  #txt {
    padding-top: .5rem;
    padding-left: .5rem;
    color: #f0f0f0;
  }

  #btn {
    display: flex;
    padding-top: 2rem;
    justify-content: center;
    height: 10vh; 
  }

  #botao1 {
    background-color: transparent;
    border-radius: 25px;
    color: white;
    width: 10vw;
  }

  #botao1:hover {
   cursor: pointer;
  }



`;
