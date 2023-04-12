import { SearchContainer } from "./styles";

function Searchbar(props) {

  return (
    <SearchContainer>
      <div className="searchBar">
        <label>Oque você procura Cosmonauta?</label>
        <input value={props.nameFilter} onChange={props.onChangeNameFilter}></input>
      </div>
      <div className="orderBar">
        <label>Ordenar por:</label>
        <select onChange={props.setOrder}>
        <option
          >
          </option>
          <option
            value="nameD"
          >
            Ordem Alfábetica - Desc
          </option>
          <option
            value="nameC"
          >
            Ordem Alfábetica - Cres
          </option>
          <option
            value="priceD"
          >
            Preço - Desc
          </option>
          <option
            value="priceC"
          >
            Preço - Cresc
          </option>
        </select>
      </div>
    </SearchContainer>
  );
}

export default Searchbar;
