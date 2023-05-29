import { HR } from "../Itens/ItensStyle";
import { Container, InputFiltros, Margem1, Margem2, Texto1, Texto2 } from "./FiltroStyle";

function Filtro(props) {

  const { minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter } = props;

  const HandleSetMinFilter = (event) => {
    setMinFilter(event.target.value)
  }

  const HandleSetMaxFilter = (event) => {
    setMaxFilter(event.target.value)
  }

  const HandleSetSearchFilter = (event) => {
    setSearchFilter(event.target.value)
  }

  return (
    <Container>
      <Texto1>Filtro</Texto1>

      <div>
        <Margem1/>
        <Texto2>Valor mínimo</Texto2>
        <InputFiltros value={minFilter}  onChange={HandleSetMinFilter} type="text"></InputFiltros>
      </div>

      <HR></HR>

      <div>
      <Margem2/>
        <Texto2>Valor máximo</Texto2>
        <InputFiltros value={maxFilter} onChange={HandleSetMaxFilter} type="text"></InputFiltros>
      </div>

      <HR></HR>

      <div>
      <Margem2/>
        <Texto2>Buscar por nome</Texto2>
        <InputFiltros value={searchFilter} onChange={HandleSetSearchFilter} type="text"></InputFiltros>
      </div>
    </Container>
  );
}

export default Filtro;
