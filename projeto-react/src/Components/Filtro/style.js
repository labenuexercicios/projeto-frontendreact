import styled from "styled-components";

export const FiltroContainer = styled.section`
  display: grid;
  grid-column: 1/2;
  justify-items: center;
  align-items: start;
`;

export const Filtros = styled.div`
  border: 1px solid black;
  width: 320px;
  height: 60vh;
  margin-top: 50px;
  margin-left: 20px;
  border-radius: 15px;
  background-color: white;
  border: none;

  h3 {
    font-size: 1.3em;
    padding: 1em 1em;
    font-weight: bold;
  };

  .filtro-min, .filtro-max{
    padding-left: 20px;
  }

  .filtro-max{
    padding-top: 13px;
  }

  input{
    width: 75%;
    background: #fff 0 0 no-repeat padding-box;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    height: 22px;
    outline: none;
  }
`;