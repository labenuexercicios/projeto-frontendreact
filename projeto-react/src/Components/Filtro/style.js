import styled from "styled-components";

export const FiltroContainer = styled.section`
  display: grid;
  grid-column: 1/2;
  justify-items: center;
  align-items: start;
`;

export const Filtros = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 60vh;
  margin-top: 50px;
  border-radius: 15px;
  background: #ffffff10;
  border: none;

  h3 {
    font-size: 1.3em;
    padding: 1em 1em;
    font-weight: bold;
    color: white;
  };

  .filtro-min, .filtro-max{
    padding-left: 20px;
    color: white;
  }

  .filtro-max{
    padding-top: 13px;
  }

  input{
    width: 90%;
    background: #fff 0 0 no-repeat padding-box;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    height: 22px;
    outline: none;
  }
`;

export const ClearFilters = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  button{
    width: 80%;
    height: 25px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #CBD5E0;
    color:#4A5568;
  }
` 