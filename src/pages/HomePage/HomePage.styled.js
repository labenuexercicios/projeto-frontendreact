import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-items: center;
  background-image: url("https://i.pinimg.com/originals/96/48/17/964817c3d30f206246d49bf28ca1a96f.jpg");
  background-attachment: local;
  height: max-content;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 90vw;
    min-height: 77vh;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 61.5vw;
    gap: 10px;
    margin-top: 0 auto;
    margin-bottom: 2vh;
`;

export const Cards = styled.div`
   display: flex;
   flex-direction: column;
   width: 17rem;
   height: 60vh;
   background: rgba(255, 255, 255, 0.9);
   border-radius: 15px;
   color: black;
   border: 1px solid black;
   align-items: center;
   &:hover {
      background-color: white
   }
`

export const ImagemProduto = styled.img`
   width: 85%;
   height: 55%;
   margin-top: 2vh;
   &:hover{
    transition: all .2s ease-in-out; 
    transform: scale(1.1); }
`

export const Nome = styled.div`
   font-family: 'Signika Negative', sans-serif;
   font-weight: bold;
   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: center;
   justify-content: space-between;
   margin: 2vh;
   height: 22vh;
`

export const Value = styled.div`
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

