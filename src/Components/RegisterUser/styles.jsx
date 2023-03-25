import styled from 'styled-components'

export const FormContainer = styled.div`
  width:25%;
  position:absolute;
  left:73%;
  top:35%;
  text-align:center;
`;



export const SendButton = styled.button`
  background-color: #ff4400;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  border: none;
  color: white;
  margin-top: 32px;
  cursor: pointer;
  box-shadow:4px 4px 0px gray;
  transition: transform 200ms ease-in-out;

    :hover{
        background-color: white;
        color: black;
        transform: scale(1.08);
    }
`;