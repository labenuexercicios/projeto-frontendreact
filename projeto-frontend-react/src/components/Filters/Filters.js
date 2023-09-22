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
  } = props.states

  const {
    setMinFilter,
    setMaxFilter,
    setSearchFilter,
    setSearchFilterMaterial,
    setSearchFilterProduto,
  } = props.handlers

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

  const filterProductType = (e) => {
    setSearchFilter(e.target.value);
  };

  const filterProductMaterial = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <FiltersContainer>
      <div>
        <h2>Filtros</h2>
      </div>
      <section>
        <h3>Faixa de preço</h3>

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

        <h3> Tipo de produto</h3>
        <select
          type="text"
          value={searchFilterProduto}
          onChange={filterProductType}
        >
          <option>Tipo de produto</option>
          <option>Pulseira</option>
          <option>Brinco</option>
          <option>Colar</option>
          <option>Anel</option>
          <option>Pingente</option>
          <option>Relógio</option>
          <option>Aliança</option>
        </select>

        <h3> Material</h3>
        <select
          type="text"
          value={searchFilterMaterial}
          onChange={filterProductMaterial}
        >
          <option>Material</option>
          <option>Ouro Amarelo</option>
          <option>Ouro Rosé</option>
          <option>Ouro Branco</option>
          <option>Prata</option>
          <option>Pedras</option>
          <option>Ródio Negro</option>
        </select>
      </section>
      <button>Filtrar</button>
      <button>Limpar filtro</button>
    </FiltersContainer>
  );
}
