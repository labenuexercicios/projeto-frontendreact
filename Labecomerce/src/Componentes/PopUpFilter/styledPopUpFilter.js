import styled from "styled-components";

export const StyledPopUpFilter = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80vw;
  height: 40vh;
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
`

export const StyledButton = styled.button`
    margin: 20px;
    padding: 5px;
    width: 30vw;
    align-self: center;
    border: none;
    border-radius:2px;
    background-color: black;
    color: white;
    font-family: 'Kanit', sans-serif;
`

export const StyledButtonSection = styled.div`
    display: flex;
    justify-content: center;
`