import styled from "styled-components";

export const FormContainer = styled.div`
  /* height: 80%; */
  width:45%;
  position:absolute;
  left:65%;
  top:10%;
`;

export const H1 = styled.h1`   
    text-align:center;
    margin-bottom:5%;
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

export const RegisterButton = styled.button`
    background-color:  #ff4400;
    border-radius: 8px;
    cursor: pointer;
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

export const StyledTextArea = styled.textarea` 
  padding: 60px;
  margin-left: 16px;
`