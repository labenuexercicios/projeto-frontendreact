import { FilterContainer } from "./FiltersStyle";

const Filters = () => {
  return (
    <FilterContainer>
      <h1>Filtros</h1>
      <label for="filtro">Valor Mínimo</label>
      <br />
      <input type="text" id="Valor Mínimo"></input>
      <br />
      <label for="filtro">Valor Máximo</label>
      <br />
      <input type="text" id="Valor Máximo"></input>
      <br />
      <label for="filtro">Busca por Nome</label>
      <br />
      <input type="text" id="Busca por Nome"></input>
    </FilterContainer>
  );
};

export default Filters;
