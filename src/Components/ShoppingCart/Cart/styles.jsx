import styled from "styled-components";

export const ConteinerCar = styled.div`
    display:flex;
    justify-content: end;
    align-items: center;
    border-left: 1px solid black;
    height:100%;
    width:100%;
`
export const FormContainer = styled.div`  
  width:45%;
  position:absolute;
  left:65%;
  top:15%;
`;

export const H1 = styled.h1`   
    text-align:center;   
`
export const Form = styled.div`
  width: 40vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Input = styled.input` 
`;

export const RegisterButton = styled.button`
    background-color:  #ff4400;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    padding: 10px;
  box-shadow:4px 4px 0px gray;
  transition: transform 200ms ease-in-out;
      :hover{
        background-color: white;
        color: black;
        transform: scale(1.08);
    }
`
export const SetButton = styled.button`
    background-color:  #ff4400;
    border-radius: 8px;
    cursor: pointer;
    width: 70px;
    padding: 10px;
  box-shadow:4px 4px 0px gray;
  transition: transform 200ms ease-in-out;
      :hover{
        background-color: white;
        color: black;
        transform: scale(1.08);
    }
`
