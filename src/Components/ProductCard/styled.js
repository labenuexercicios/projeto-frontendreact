import styled from "styled-components";

export const Div2 = styled.div`
	display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: 300px;
  max-heigth: 420px;
  margin:30px auto;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 16, 16, 0.647);
	box-shadow: 5px 6px 9px rgba(0, 0, 0, 0.29);
	border-radius: 20px;
`;

export const H2 = styled.h2`
margin: 0.5rem;
font-size: 20px; 
color:rgb(255, 255, 255);
font-family: Arial, Helvetica, sans-serif;
`;

export const P = styled.p`
margin: 0.5rem;
font-size: 18px; 
color:rgb(255, 255, 255);
font-family: Arial, Helvetica, sans-serif;
`;


export const Button = styled.button`
  background-color: rgba(18, 16, 16, 0.882);
  border-radius: 8px;
  padding: 16px;
  width: 100px;
  border: 3px solid rgba(255, 62, 216, 0.882);
  color: white;
  margin-top: 32px;
  cursor: pointer;
`;
export const Img = styled.img`
width:80%;
max-width: 180px;
aling-self:center;
`;
