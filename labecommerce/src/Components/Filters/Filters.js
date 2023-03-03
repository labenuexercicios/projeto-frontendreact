import {FiltersStyle} from './styled'


const Filters = () => {
    return (
      <FiltersStyle>

          <h1>Filtro</h1>
          <label for='minValue'>Valor Mínimo:</label>
          <input type='text' id='minValue' name='minValue'></input>
          <label for='maxValue'>Valor Máximo:</label>
          <input type='text' id='maxValue' name='maxValue'></input>
          <label for='nameSearch'>Busca por Nome:</label>
          <input type='text' id='nameSearch' name='nameSearch'></input>

      </FiltersStyle>
        
      
    );
}

export default Filters