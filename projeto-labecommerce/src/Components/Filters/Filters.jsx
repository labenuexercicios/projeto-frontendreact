import React from 'react'
import styled from 'styled-components'

const Filters = () => {
  const FilterStyle = styled.form`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 20vw;
    padding: 1em;

    h3 {
      margin: 0;
    }

    label {
      margin-top: 1em;
    }

  `

  return (
    <FilterStyle>
        <h3>Filters</h3>

        <label for='valor-minimo'>Valor minimo</label>
        <input type="text" name="valor-minimo" />

        <label for='valor-maximo'>Valor maximo</label>
        <input type="text" name="valor-maximo" />

        <label for='busca'>Busca por nome</label>
        <input type="text" name="busca" />
    </FilterStyle>
  )
}

export default Filters