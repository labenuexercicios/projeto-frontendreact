import styled from 'styled-components'

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 55vw;
    height: 100vh;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 55vw;
    height: 100vh;
    gap: 20px;
    margin-top: 0 auto;
`;

export const Cards = styled.div`
   display: flex;
   flex-direction: column;
   width: 17vw;
   height: 60vh;
   background-color: red;
   border: 1px solid black;
   align-items: center;
`

export const ImagemProduto = styled.img`
   width: 90%;
   height: 55%;
   margin-top: 2vh;
`