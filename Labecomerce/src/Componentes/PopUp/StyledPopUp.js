import styled from "styled-components";

export const StyledPopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80vw;
  height: 30vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  z-index: 10;
  font-family: 'Kanit', sans-serif;
  font-weight: 500;


@font-face {
  font-family: "Espacial";
  src: url("/../../src/assets/Quantum.otf") format("opentype");
}

`

export const StyledButton = styled.button`
  margin: 20px;
    padding: 5px;
    width: 38vw;
    align-self: center;
    border: none;
    border-radius:2px;
    background-color: black;
    color: white;
    font-family: 'Kanit', sans-serif;
`

