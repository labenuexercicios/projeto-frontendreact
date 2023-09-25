import { FilterContainer } from "./FilterStyle";

function Filters(props) {
  const filter = (event) => {

  }

    return (
      <FilterContainer>
        <h2>Filters</h2>
        <p><b>Minimum Price:</b></p>
        <input value={props.minFilter} onChange={filter}></input>
        <p><b>Maximum Price:</b></p>
        <input value={props.maxFilter} onChange={filter}></input>
        <p><b>Search by name:</b></p>
        <input value={props.searchFilter} onChange={filter}></input>
      </FilterContainer>
    );
  }

  export default Filters;