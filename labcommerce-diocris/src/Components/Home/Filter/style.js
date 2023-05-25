import { styled } from "styled-components";



export const FilterStyle = styled.aside`
position: sticky;
top: 0.5rem;
background-color: #3D405B;
border-radius:  1rem;
border: 1px solid #8C6BE8;
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  text-align: left;

  @media (min-width: 768px) {
   grid-column: 1/3;
   grid-row: 1;
  }
  input{
    width: 100%;
  }
  @media (max-width: 768px){
    position: relative;
    top: 0;
  }
`;

export const FilterWrapper = styled.div`
transition: all 0.5s linear;
display: grid;
justify-content: space-around;
gap: 1rem;
padding: ${props => props.padding} 0;
max-height: ${props => props.height};
`