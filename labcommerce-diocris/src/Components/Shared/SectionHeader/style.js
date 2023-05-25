import { styled, css } from "styled-components";

export const LineHeaderWrapper = styled.div`
  display: inline-flex;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  ${props => props.cart && css`
  div{
    display: grid;
    h2{
      grid-column: 1/1;
      grid-row: 1/1;
    }
    span{
      grid-column: 1/1;
      grid-row: 1/1;
      position: relative;
      left: 90%;
      top: -30%;
      margin-left: 8px;
      background-color: #FFC857;
      color:  #4E3D67;
      border-radius: 50%;
      width: 20px;
      height: 20px;
    }
  }
  `}
  
`;