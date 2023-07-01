import styled from "styled-components";

export const AsideFiltro = styled.aside`
  display: flex;
  flex-direction: column;
  /* padding-left: 10px; */
  top: 31vh;
  color: white;
  position: fixed;
  grid-area: AsideFiltro;
  width: 20%;
  align-items: center;

  input {
    border-radius: 8px;
    width: 40%;
    cursor: pointer;
    margin-bottom: 10px;
    height: 5vh;
    width: 14vw;
    font-size: 20px;
    background-image: linear-gradient(to right, var(--6), var(--4));
    color:white;
  }

  input:hover {
    background-image: linear-gradient(to right, var(--4), var(--6));
  }
`;
export const TituloFiltro = styled.h1`
  color: var(--4);
  justify-self: center;
  font-size: 2rem;
`;

export const LabelFiltro = styled.label`
  font-size: 1em;
`;

export const TamanhoFiltro = styled.select`
  border-radius: 8px;
  width: 40%;
  cursor: pointer;
  margin-bottom: 10px;
  height: 5vh;
  width: 14vw;
  font-size: 20px;
  background-image: linear-gradient(to right, var(--6), var(--4));
  background-color: var(--4);
  color:white;
`;

