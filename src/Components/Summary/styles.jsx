import styled from "styled-components";

export const ConteinerCar = styled.div`
    display:flex;
    justify-content: end;
    align-items: center;
    border-left: 1px solid black;
    height:100%;
    width:100%;   
`
export const Carrinho = styled.div`
display:flex;
gap:5%;
`
export const P = styled.div`
display:flex;
flex-direction:column;
gap:5%;  
`

export const FormContainer = styled.div`  
  width:45%;
  max-height:80vh;
  position:absolute;
  left:65%;
  top:15%;
  overflow-y:auto; 
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
    width: 150px;
    padding: 5px;    
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
    width: 30px;
    padding: 5px;    
  box-shadow:4px 4px 0px gray;
  transition: transform 200ms ease-in-out;
      :hover{
        background-color: white;
        color: black;
        transform: scale(1.08);
    }
`
