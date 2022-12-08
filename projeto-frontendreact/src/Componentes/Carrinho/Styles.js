import styled from 'styled-components'

export const Container = styled.div`
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 10px;
    width: 40vw;
    margin-right: 10px;
    color: white;
    background: rgba(22, 24, 55, 0.9);
    border-radius: 30px;
    font-family: 'Signika Negative', sans-serif;
`;

export const Product = styled.div`
    border: 1px solid #000;
    display: flex;
    justify-content: space-between;
    width: 22vw;
    background: white;
    color: black;
    align-items: center;
    border-radius: 8px;
`;

export const FirstLine = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.4vw;
`;

export const Buttons = styled.div`
   width: 5.4vw;
   display: flex;
   gap: 0.4vw;
`;

export const ButtonMenos = styled.button`
   height: 3vh;
   width: 1.3vw;
   border-radius: 6px;
   margin-left: 0.6vw;
   &:hover{
    background-color: rgba(255, 81, 55, 0.6)
   }
   &:active{
    background-color: rgba(248, 32, 0, 0.8)
   }
`;

export const ButtonMais = styled.button`
   height: 3vh;
   width: 1.3vw;
   border-radius: 6px;
   &:hover{
    background-color: #4dff4d
   }
   &:active{
    background-color: #00db00
   }
   
`;
export const Value = styled.div`
   margin-left: 1%;
   width: 4vw;
   font-size: 0.75rem;
   font-weight: bold;
`;

export const Name = styled.div`
   margin-right: 2%;
   font-size: 80%;
   display: flex;
   text-align: start;
   width: 9vw;
   margin-left: 6%;
   font-weight: bold;
`;

export const ButtonRemove = styled.button`
   height: 3.5vh;
   width: 1.5vw;
   justify-content: center;
   margin-right: 2%;
   border: none;
   background-color: white;
   &:hover{
    background-color: rgba(255, 81, 55, 0.6)
   }
   &:active{
    background-color: rgba(248, 32, 0, 0.8)
   }
`

export const Img = styled.img`
   height: 100%;
   width: 100%;
   border: 6px;
`
export const LineEnd = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Total = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`
export const ButtonEnd = styled.button`
  width: 8vw;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
   &:hover {
    background-color: #07dfff;
    color: black;
  }
  &:active {
    background-color: #4dff4d;
    color: black;
  }
`

