import { FiltersContainer } from "./FiltersStyle";

export function Filters(props) {
  // console.log(
  //   props.minFilter,
  //   props.maxFilter,
  //   props.searchFilter,
  //   props.searchFilterMaterial,
  //   props.searchFilterProduto
  // );

  const {
    minFilter,
    maxFilter,
    searchFilter,
    searchFilterMaterial,
    searchFilterProduto,
  } = props.states;

  const {
    setMinFilter,
    setMaxFilter,
    setSearchFilter,
    setSearchFilterMaterial,
    setSearchFilterProduto,
  } = props.handlers;

  const { cleanFilter } = props

  const filterMinFilter = (e) => {
    setMinFilter(e.target.value);
    // if (e.target.value > 0) {
    //   props.setMinFilter(e.target.value);
    // }
  };

  const filterMaxFilter = (e) => {
    setMaxFilter(e.target.value);
    // if (e.target.value > 0) {
    //   props.setMaxFilter(e.target.value);
    // }
    // console.log(props.maxFilter);
  };

  const filterName = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <FiltersContainer>
      <div>
        <h2>Filtros</h2>
      </div>
      <section>
        <label>Valor mínimo</label>
        <input
          min={0}
          type="number"
          value={minFilter}
          onChange={filterMinFilter}
          placeholder="R$ 0,00"
        />

        <label>Valor máximo</label>
        <input
          min={0}
          type="number"
          value={maxFilter}
          onChange={filterMaxFilter}
          placeholder="R$ 500,00"
        />

        <label>Busca por nome:</label>
        <input
          type="text"
          value={searchFilter}
          onChange={filterName}
          placeholder="Digite o nome"
        />
      </section>
      <div>
          <button onClick={cleanFilter}>Limpar filtro</button>
      </div>
    </FiltersContainer>
  );
}
