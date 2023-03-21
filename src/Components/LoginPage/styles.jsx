import styled from "styled-components";

export const FormContainer = styled.div`
  height: 80%;
  width:20%;
  position:absolute;
  left:80%;
  top:10%; 
  `;

export const H1 = styled.h1`   
    text-align:center;`

export const Form = styled.div`
 width: 70%;
  height: 60%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 9px;  
  border-radius:8px;
  color:black;
`;

export const SendButton = styled.button`
  background-color: #ff4400;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  border: none;
  color: white;  
  cursor: pointer;
  box-shadow:4px 4px 0px gray;
  transition: transform 200ms ease-in-out;
    :hover{
        background-color: white;
        color: black;
        transform: scale(1.08);
    }
`;

export const RegisterButton = styled.button`
    background-color:  #ff4400;
    border-radius: 8px;
    width: 200px;
    padding: 10px;
    cursor: pointer;
    box-shadow:4px 4px 0px gray;
    transition: transform 200ms ease-in-out;
    :hover{
        background-color: white;
        color: black;
        transform: scale(1.08);
    }
`
export const StyledLabel = styled.label`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

