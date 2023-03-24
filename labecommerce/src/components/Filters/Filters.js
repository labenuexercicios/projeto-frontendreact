import React from 'react'
import { FilterIcon, FiltersContainer, InputContainer } from './styledFilters'

export class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <FilterIcon src='https://cdn.pixabay.com/photo/2012/04/11/00/06/filter-27229_960_720.png'></FilterIcon>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
    </FiltersContainer>
  }
}
