import { styled } from 'styled-components';

export const Main = styled.main`
width: 100%;
border: 1px solid black;
margin: 0px auto;
padding: 0px auto;
flex-direction: column;
flex-wrap: wrap;
padding: 1rem;
align-content: space-between;
color: white;
background-color: black;
@media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }
  @media (max-width: 500px) {
   
    justify-content: center;

  }
`

