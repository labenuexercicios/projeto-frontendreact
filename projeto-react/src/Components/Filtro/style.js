import styled from "styled-components";

export const FiltroContainer = styled.section`
  display: grid;
  grid-column: 1/2;
  justify-items: end;
  align-items: start;
`;

export const Filtros = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 60vh;
  margin-top: 50px;
  border-radius: 15px;
  background-color: white;
  border: none;

  h3 {
    font-size: 1.3em;
    padding: 1em 1em;
    font-weight: bold;
    background-color: #ffd100;
    border-radius: 15px 15px 0 0; 
    margin-bottom: 15px;
  };

  .filtro-min, .filtro-max{
    padding-left: 20px;
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
  }
` 