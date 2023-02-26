import styled from "styled-components";

export const FormContainer = styled.div`
   height: 100vh;
  position:absolute;
  left:65%;
  top:20%;  
`;

export const H1 = styled.h1`   
    text-align:center;
    position:relative;
    bottom:10%;
`

export const Form = styled.div`
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 16px;
`;

export const SendButton = styled.button`
  background-color: #ff4400;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  border: none;
  color: white;
  margin-top: 32px;
  cursor: pointer;
`;


export const StyledLabel = styled.label`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

