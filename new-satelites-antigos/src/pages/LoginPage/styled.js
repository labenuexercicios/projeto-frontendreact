import styled from "styled-components"

export const BackgroundImg = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  /* filter: blur(1); */
  `
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`
export const DivForm = styled.div`
  height: 70%;
  width: 30%;
  background-color: #303030;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center ;
  justify-content: center;
  color: #d0d0d0;
  /* border: 1px solid red; */
  form{
    width: 85%;
    height: 72%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* border: 1px solid red; */
    gap: 2%;
    /* color: #d0d0d0; */

  }
  .nome-sobrenome{
    width: 100%;
    /* border: 1px solid red; */
  }
  .cep-estado{
    width: 20%;
  }
  .cidade{
    width: 50%;
  }
  .email{
    width: 100%;
  }
  .senha{
    width: 100%;
  }
  
  input{
    height: 28px;
    width: 100%;
    border-radius: 5px;
    background-color: #202020;
    border: none;
    color: white;
  }
  .logout{
    width: 50%;
  }
  button{
    width: 100%;
    height: 32px;
    background-color: #101010;
    border: none;
    border-radius: 5px;
    color: white;
    margin-top: 14px;
    cursor: pointer;
    &:hover{
      background-color: #151515;
    }
    &:active{
      background-color: black;
    }
  }
`
