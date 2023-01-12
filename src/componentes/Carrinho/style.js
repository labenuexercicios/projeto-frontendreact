import styled from "styled-components";

export const Container = styled.div`
  background-color: #1d1e1b;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  margin-right: 15px;
  border-radius: 10px;
  padding: 15px;
  height: 400px;
  width: 300px;
  gap: 15px;
`;

export const ContainerButton = styled.button`
  background-color: #1d1e1b;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    border: none;
    background-color: transparent;
    color: gray;
    :hover {
      cursor: pointer;
      color: #45782f;
    }
    img {
      width: 20px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Itens = styled.ul`
  height: auto;
  width: auto;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  list-style: none;
  button {
    padding: 5px;
    border: none;
    border-radius: 5px;
    :hover {
      transition: 0.2s;
      color: white;
      background-color: red;
      cursor: pointer;
    }
  }
`;
