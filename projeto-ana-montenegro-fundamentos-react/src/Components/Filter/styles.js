import styled from "styled-components";

export const Container = styled.main`
  width: 25vh;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: start;
  gap: 1rem;
  background-color: #014960;
  border:  5px solid #F7EB3F;
  border-radius: 10px;
  color: #F7EB3F;

`;

export const Div = styled.div`
margin-top: 2px;
flex: 0.3 1 10%;
  
`;

export const P = styled.p`
color: #F7EB3F;
font-family: 'Courier';
font-size: 1.2em;
font-weight: bolder;


`;



export const Input = styled.input`
   display: block;
  width: 10vw;
  height: 3vh;
   background-color: #F7EB3F;
  text-align:center;
  
`;


export const InputMinPrice = styled.input`
   display: block;
  width: 3vw;
  height: 3vh;
   background-color: #F7EB3F;
  text-align:center;
  margin-left: 30%;
  
`;


export const InputMaxPrice = styled.input`
  display: block;
  width: 3vw;
  height: 3vh;
  background-color: #F7EB3F;
  text-align:center;
  margin-left: 30%;
  
  
`;


export const Select = styled.select`
  background-color: #F7EB3F;
  border-radius: 5px;
  height: 3vh;
  margin-bottom: 10px;
  
`;