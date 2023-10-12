import { FiltroContainer, BtFiltro } from "./styleFiltros";

function Filtros(props) {
  return (
    <FiltroContainer>
      <h2>Encontre seu produto: </h2>
      <label>
        Buscar por nome:
        <br />
        <input
          type="text"
          value={props.searchFilter}
          onChange={(event) => props.setSearchFilter(event.target.value)}
        />
      </label>
      <label>
        Filtro mínimo:
        <br />
        <input
          type="number"
          value={props.minFilter}
          onChange={(event) => {
            if (event.target.value < 0) {
              props.setMinFilter(0);
              return;
            }
            props.setMinFilter(event.target.value);
          }}
        />
      </label>
      <label>
        Filtro máximo:
        <br />
        <input
          type="number"
          value={props.maxFilter}
          onChange={(event) => {
            if (event.target.value < 0) {
              props.setMaxFilter(1);
              return;
            }          
            props.setMaxFilter(event.target.value)
          }}
        />
      </label>
    </FiltroContainer>
  );
}

export default Filtros;