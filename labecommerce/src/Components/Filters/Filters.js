import React from 'react';
import { useState } from 'react';
import {
  FiltersContainer,
  FilterInput,
  FilterLabel,
  ClearButton
} from '../Filters/filterStyle';
import productList from '../../assets/productList';

const Filters = ({ minFilter, maxFilter, searchFilter, onInputChange, onClearSearch }) => {
    // const [minValue, setMinValue] = useState('');
    // const [maxValue, setMaxValue] = useState('');
    // const [searchValue, setSearchValue] = useState('');

    // const handleApplyFilters = () => {
    //   onApplyFilters(parseFloat(minValue), parseFloat(maxValue), searchValue);
    // };
   
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
        {/* <button onClick={handleApplyFilters}>Aplicar Filtros</button> */}
      </FilterLabel>
      <FilterLabel>
        Buscar:
        <FilterInput
          type="text"
          name="searchFilter"
          value={searchFilter}
          onChange={onInputChange}
        />
         {/* Botão de Limpar */}
      <ClearButton onClick={onClearSearch}>Limpar</ClearButton>
      </FilterLabel>
       
    </FiltersContainer>
  );
};




export default Filters

// Não está filtrando da lista de produtos, está falta passar o array para o Filter (Criar uma lógica??)