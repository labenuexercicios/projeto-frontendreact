import React, { useState } from "react";
import "./SearchBarStyle.js";
import { BsSearch } from "react-icons/bs";
import { SearchBarContainer, SearchBarButton } from "./SearchBarStyle.js";
import { productsList } from "../../assents/productsList.js";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const { productsList } = props;

  const handleSearch = (event) => {
    event.preventDefault();

    const productos = productsList.filter(
      (item) =>
        searchValue === "" ||
        item.name.toLowerCase(searchValue.toLowerCase()).includes(searchValue)
    );

    setSearchValue("");
  };

  return (
    <>
      <SearchBarContainer onSubmit={handleSearch}>
        <input
          type="search"
          value={searchValue}
          placeholder="Buscar produtos"
          onChange={({ target }) => setSearchValue(target.value)}
          required
        />

        <SearchBarButton type="submit">
          <BsSearch />
        </SearchBarButton>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
