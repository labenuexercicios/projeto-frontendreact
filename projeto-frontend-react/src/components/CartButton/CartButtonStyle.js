import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";

export const CartButtonContainer = styled.button`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  color: #333;

  span {
    background-color: red;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`