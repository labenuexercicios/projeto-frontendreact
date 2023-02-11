import styled from "styled-components";

export const HomeDisplay = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    min-height: 85vh;
    padding: 0 20vw;
`;

export const Produto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 30vw;
  border: 1px solid gray;
  border-radius: 3rem;
  margin: 20px;
  padding: 10px;
`;

export const Botao = styled.button`
  padding: 10px;
  margin: 10px;
  width: 100px;
  border-radius: 4px;
  &:hover {
    filter: contrast(70%);
    transition: all 1s;
  }
`;
