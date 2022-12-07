import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-items: center;
  background-image: url("https://i.pinimg.com/originals/96/48/17/964817c3d30f206246d49bf28ca1a96f.jpg");
  background-attachment: local;
  height: max-content;
  width: 98.78vw;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 98.78vw;
    min-height: 87vh;
    max-height: max-content;
    
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 58vw;
    gap: 20px;
    margin-top: 0 auto;
`;

export const Cards = styled.div`
   display: flex;
   flex-direction: column;
   width: 15.5rem;
   height: 60vh;
   background: rgba(255, 255, 255, 0.9);
   border-radius: 15px;
   color: black;
   border: 1px solid black;
   align-items: center;
`

export const ImagemProduto = styled.img`
   width: 90%;
   height: 55%;
   margin-top: 2vh;
`

export const Nome = styled.p`
   font-family: 'Signika Negative', sans-serif;
   font-weight: bold;
   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: center;
   justify-content: space-between;
   margin-top: 1.5vh;
   height: 22vh;
`

export const Valor = styled.p`
   font-family: 'Signika Negative', sans-serif;
   font-size: 1.2rem;
`

export const Button = styled.button`
   font-family: 'Signika Negative', sans-serif;
   margin-bottom: 1vh;
   width: 7vw;
   background-color: #161837;
   color: white;
   cursor: pointer;
   &:hover {
    background-color: #07dfff;
    color: black;
  }
  &:active {
    background-color: #261fff;
    color: white;
  }
`

