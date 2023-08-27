import styled from "styled-components";

export const HomeContainer = styled.main`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5%;
  width: 60%;
  height: 50%;
  padding: 20px;
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
`;


export const HomeCard = styled.section`
  /* border: 2px solid yellow; */
  display: flex;
  gap: 10px;
`;
