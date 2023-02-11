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
`;

export const Botao = styled.button`
  padding: 10px;
  border-radius: 4px;
  &:hover {
    filter: contrast(10%);
    transition: all 1s;
  }
`;
