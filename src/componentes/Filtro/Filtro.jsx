import './Filtro.css'

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
    <div className="filtro">
      <p>Filtro</p>
      <label>valor mínimo</label>
      <input value={minFilter} onChange={HandleSetMinFilter} type="text"></input>

      <label>valor máximo</label>
      <input value={maxFilter} onChange={HandleSetMaxFilter} type="text"></input>

      <label>buscar por nome</label>
      <input value={searchFilter} onChange={HandleSetSearchFilter} type="text"></input>
    </div>
  );
}

export default Filtro;
