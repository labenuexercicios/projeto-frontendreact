import { FilterStyle, TituloStyle } from "./FilterStyle";

export function Filter({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
}) {
  return (
    <FilterStyle>
      <TituloStyle>Filtro</TituloStyle>

      <label>
        Valor mínimo:
        <input
          type="number"
          value={minFilter}
          onChange={(e) => {
            if (e.target.value < 0) {
              alert("Valor mínimo não aplicado");
            } else {
              setMinFilter(e.target.value);
            }
          }}
        />
      </label>

      <label>
        Valor máximo:
        <input
          type="number"
          value={maxFilter}
          onChange={(e) => {
            if (e.target.value < 0) {
              alert("Valor mínimo não aplicado");
            } else {
              setMaxFilter(e.target.value);
            }
          }}
        />
      </label>

      <label>
        Busca por nome:
        <input
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </label>
    </FilterStyle>
  );
}
