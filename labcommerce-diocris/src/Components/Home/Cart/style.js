import { styled } from "styled-components";

export const CartStyle = styled.aside`
  height: fit-content;
  overflow: hidden;
  text-align: center;
  display: grid;
  font-size: 0%.5rem;
  row-gap: 1rem;
  padding-top: 1rem;
  position: sticky;
  top: 0.5rem;
  background-color: #3D405B;
  border-radius: 1rem;
  border: 1px solid #8C6BE8;
  @media (min-width: 768px) {
    grid-column: 10/13;
    grid-row: 1;
  }
  @media (max-width: 768px) {
    z-index: 1;
    top: 0px;
  }


`;

export const ProductWrapper = styled.div`
transition: all 0.5s linear;
overflow-y: scroll;
display: grid;

gap: 0.5rem;
padding: ${props => props.padding};
max-height: ${props => props.height};
 &::-webkit-scrollbar {
    display: none;
  }
`