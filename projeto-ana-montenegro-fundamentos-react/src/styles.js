import styled from "styled-components";


export const Principal = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 10px;
  gap: 5px;
  justify-items: center;
  background-color: #0991bb;
   
`;

export const H1 = styled.h1`
  color: #F7EB3F;
  text-align: center;
  background-color: #014960;
  border-radius: 10px;
  border:  5px solid #F7EB3F;

`;


export const H2 = styled.h2`
  text-align: center;
  font-family: 'Courier New';
  font-weight:20px;
  font-size: 12;
  color: #F7EB3F;

`;


export const P = styled.p`
  font-family: 'Courier New';
  font-weight: 900;
  color: #F7EB3F;
  height: 2em;
  width: 15em;
  text-align: center;

`;


export const Container = styled.section`
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px;
  
`;

export const Produtos = styled.section `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 16px;
  text-align:center;
  
`;

export const Img = styled.img`
  width: 120px;
  height: 100px;
  border-radius:20px 0 20px 0;
 
`;


export const Card = styled.div`
  height: 220px;
  width: 160px;
  font-weight:700 ;
  background-color: #014960;
  border-radius: 10px;
  border:  3px solid #F7EB3F;
  color: #F7EB3F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.05);
    opacity: 90%;
   }
  `;


export const Button = styled.button`
  background-color: #F7EB3F;
  border-radius: 10px;
  cursor: pointer;
 `;

