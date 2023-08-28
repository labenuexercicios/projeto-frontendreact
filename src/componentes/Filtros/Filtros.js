import { FiltroContainer, BtFiltro } from "./styleFiltros";

function Filtros(props) {
  console.log(props);
  return (
    <FiltroContainer>
      <h1>Filtros</h1>
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
              props.setMaxFilter(0);
              return;
            }          
            props.setMaxFilter(event.target.value)
          }}
        />
      </label>
      <label>
        Buscar por nome:
        <br />
        <input
          type="text"
          value={props.searchFilter}
          onChange={(event) => props.setSearchFilter(event.target.value)}
        />
      </label>
      <BtFiltro>Buscar</BtFiltro>
    </FiltroContainer>
  );
}

export default Filtros;
