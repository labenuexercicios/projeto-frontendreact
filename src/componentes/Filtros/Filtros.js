import { FiltroContainer, BtFiltro } from "./styleFiltros";


function Filtros() {
  return (
    <FiltroContainer>
      <h1>Filtros</h1>
      <label>
        Filtro mínimo:
        <br/>
        <input type="number" />
      </label>
      <label>
        Filtro máximo:
        <br/>
        <input type="number" />
      </label>
      <label>
        Buscar por nome:
        <br/>
        <input type="text" />
      </label>
      <BtFiltro>Buscar</BtFiltro>
    </FiltroContainer>
  );
}

export default Filtros;
