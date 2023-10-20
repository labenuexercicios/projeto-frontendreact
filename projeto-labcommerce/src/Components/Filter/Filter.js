import { FilterContainer } from "./FilterStyle";
import { useState } from "react";

function Filters(props) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [nameSearch, setNameSearch] = useState("")

  const handleFilterChange = () => {
    props.setMinFilter(minPrice);
    props.setMaxFilter(maxPrice);
    props.setSearchFilter(nameSearch)
  }

  return (
    <FilterContainer>
      <h2>Filters</h2>
      <p><b>Minimum Price:</b></p>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <p><b>Maximum Price:</b></p>
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <p><b>Search by name:</b></p>
      <input
        type="text"
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
      />
      <button onClick={handleFilterChange()}>Apply Filters</button>
    </FilterContainer>
  );
}

export default Filters;
