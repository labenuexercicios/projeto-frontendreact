import styled from "styled-components";

export const HomeContainer = styled.main`
  /* border: 2px solid blue; */
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5%;
  width: 60%;
  height: 50%;
  padding: 50px;
  h1{
    display: flex ;
    align-items: center;
  }
`;

export const HomeOrdenacao = styled.div`
  /* border: 2px solid orange; */
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  width: 55vw;
`;


export const HomeCard = styled.section`
  /* border: 2px solid yellow; */
  /* display: flex; */
  flex-direction: column;
  display: grid;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  width: 55vw;

  grid-template-columns: 33% 33% 33%;
  row-gap: 10px;
  column-gap: 1px;
`;
