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
  border-radius: 20px;
  background: #ffffff10;
  border: none;
  background-color: white;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  h3 {
    font-size: 1.3em;
    padding: 1em 1em;
    font-weight: bold;
    color: black;
  };

  .filtro-min, .filtro-max{
    padding-left: 20px;
    color: #6e6e6e;
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
    color: #6e6e6e;
    padding-left: 0.8rem;
  }
`;

export const ClearFilters = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  button{
    width: 80%;
    height: 25px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background-color: black;
    color: white;

    :hover{
      -webkit-transform:scale(1.1); 
      -moz-transform:scale(1.1); 
      -o-transform:scale(1.1);
      transform:scale(1.1);
      transition: all .55s ease;
    }
  }
` 