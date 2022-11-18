import { MenuFilter, ImageFilter } from "./styles";
import IconFilter from "../../icons/filter.jpeg";

function Filter(props) {
  return (
    <MenuFilter className="menu-filter">
      <div className="filter-name-icon">
        <span>Filtros</span>
        <ImageFilter src={IconFilter} alt="icon" />
      </div>

      <select className="select">
        <option value="">Ordenar por</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
        <option value="">Maior preço</option>
        <option value="">Menor preço</option>
      </select>
    </MenuFilter>
  );
}

export default Filter;
