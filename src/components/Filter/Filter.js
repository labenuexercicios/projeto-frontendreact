import { MenuFilter, ImageFilter } from "./styles";
import IconFilter from "../../icons/filter.jpeg";

function Filter(props) {

  const onChangeMinPrice = (e) => {
    props.setMinPrice(e.target.value);
  };

  const onChangeMaxPrice = (e) => {
    props.setMaxPrice(e.target.value);
  };

  const onChangeOrdenar = (e) => {
    props.setOrdenacao(e.target.value)
  }

  return (
    <MenuFilter className="menu-filter">
      <div className="filter-name-icon">
        <span className="filter">Filtros</span>
        <ImageFilter src={IconFilter} alt="icon" />
      </div>

      <input
        className="input"
        placeholder="Preço mínimo"
        type="number"
        value={props.minPrice}
        onChange={onChangeMinPrice}

      />

      <input
        className="input"
        placeholder="Preço maximo"
        type="number"
        value={props.maxPrice}
        onChange={onChangeMaxPrice}
      />

      <select className="select"
        value={props.ordenar}
        onChange={onChangeOrdenar}
      >
        <option value="ordenar">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
    </MenuFilter>
  );
}

export default Filter;
