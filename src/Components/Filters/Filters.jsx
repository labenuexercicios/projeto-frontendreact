import React from 'react';
import { FiltersContainer, InputContainer } from './FiltersStyle';

export default function Filters(props) {
  const {
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
  } = props;

  const handleMinFilterChange = (event) => {
    const value = event.target.value;
    const parsedValue = parseFloat(value).toString();
  
    if ((!isNaN(value) && value >= 0 && value === parsedValue) || value === '') {
      setMinFilter(value !== '' ? parseFloat(value) : '');
    }
  };
  
  const handleMaxFilterChange = (event) => {
    const value = event.target.value;
    const parsedValue = parseFloat(value).toString();
  
    if ((!isNaN(value) && value >= 0 && value === parsedValue) || value === '') {
      setMaxFilter(value !== '' ? parseFloat(value) : '');
    }
  };
  
  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value);
  };

  return (
    <FiltersContainer>
      <InputContainer>
        <input
          type="number"
          value={minFilter}
          onChange={handleMinFilterChange}
          placeholder="Preço Mínimo"
        />
      </InputContainer>
      <InputContainer>
        <input
          type="number"
          value={maxFilter}
          onChange={handleMaxFilterChange}
          placeholder="Preço Máximo"
        />
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          value={searchFilter}
          onChange={handleSearchFilterChange}
          placeholder="Nome do Produto"
        />
      </InputContainer>
    </FiltersContainer>
  );  
}

