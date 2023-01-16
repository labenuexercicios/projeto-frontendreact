import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  color: white;
  position: fixed;
  top: 0;
  z-index: 999;
  button {
    background-color: transparent;
    border: white;
    cursor: pointer;
    span {
      font-weight: bold;
    }
  }
`;
export const StyledInputSearch = styled.input`
  width: 25vw;
  height: 3vh;
  border-radius: 10px;
`;
