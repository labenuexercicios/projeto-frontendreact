// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';

// Estilos para o container dos filtros
export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Estilos para o input dos filtros
export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

// Estilos para o label dos filtros
export const FilterLabel = styled.label`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
`;

export const ClearButton = styled.button`
  color:black;
  background-color:#97BC62;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 4px;

  :hover{
    color:yellow;
    background-color:#2C5F2D;
  }
`;