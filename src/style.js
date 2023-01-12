import styled from "styled-components";

export const ContainerPag = styled.div`
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerButton = styled.div``;

export const Header = styled.header`
  background-color: #1d1e1b;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const H1 = styled.h1`
  margin-left: 10px;
  background-image: linear-gradient(to bottom, #2a5e3b, #62de8b, #a8e3bc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  color: black;
`;

export const ButtonCart = styled.button`
  margin: 10px;
  padding: 5px;
  border-radius: 100px;
  background-color: white;
  :hover {
    background-color: #45782f;
    cursor: pointer;
  }
  img {
    width: 30px;
  }
`;
