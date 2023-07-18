import React from 'react';
import {
  FiltersContainer,
  FilterInput,
  FilterLabel
} from '../Filters/filterStyle';

const Filters = ({ minFilter, maxFilter, searchFilter, onInputChange }) => {
  return (
    <FiltersContainer>
      <FilterLabel>
        Valor mínimo:
        <FilterInput
          type="number"
          name="minFilter"
          value={minFilter}
          onChange={onInputChange}
        />
      </FilterLabel>
      <FilterLabel>
        Valor máximo:
        <FilterInput
          type="number"
          name="maxFilter"
          value={maxFilter}
          onChange={onInputChange}
        />
      </FilterLabel>
      <FilterLabel>
        Buscar:
        <FilterInput
          type="text"
          name="searchFilter"
          value={searchFilter}
          onChange={onInputChange}
        />
      </FilterLabel>
    </FiltersContainer>
  );
};




export default Filters

// Não está filtrando da lista de produtos, está falta passar o array para o Filter (Criar uma lógica??)