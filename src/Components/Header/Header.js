import React from "react";

import {
  HeaderDisplay,
  Logo,
  NavigationBar,
  Search,
  SearchBar,
  Filters,
  FilterBar,
  Icons,
} from "./styled";

export default function Header({
  screen,
  setScreen,
  searchByName,
  setSearchByName,
  priceOrder,
  setPriceOrder,
  sortOrder,
  setSortOrder,
  maxPriceSearch,
  setMaxPriceSearch,
  minPriceSearch,
  setMinPriceSearch,
}) {

  return (
    <HeaderDisplay>
      <Logo onClick={() => setScreen(0)}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/770/770706.png"
          alt="Knowhere logo"
          width={"80px"}
          height={"80px"}
        />
        <h1>Knowhere</h1>
      </Logo>
      <NavigationBar>
        <Search>
          <SearchBar
            type="text"
            placeholder="Search here! We know where to find the best place for you to live your dreams!"
            value={searchByName}
            onChange={(e) => setSearchByName(e.target.value)}
          />
          <button onClick={() => setScreen(0)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
              alt="Search button"
              width={"16px"}
            />
          </button>
        </Search>
        <Filters>
          <h4>Filters:</h4>
          <select
            value={priceOrder}
            onChange={(e) => setPriceOrder(e.target.value)}
          >
            <option value="">Price</option>
            <option value="crescent">Min-Max</option>
            <option value="decrescent">Max-Min</option>
          </select>

          <FilterBar
            type="text"
            placeholder="Max Value"
            value={maxPriceSearch}
            onChange={(e) => setMaxPriceSearch(e.target.value)}
          />

          <FilterBar
            type="text"
            placeholder="Min Value"
            value={minPriceSearch}
            onChange={(e) => setMinPriceSearch(e.target.value)}
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Order</option>
            <option value="alphabetic">Alphabetic</option>
            <option value="rating">Most Rated</option>
          </select>
        </Filters>
      </NavigationBar>
      <Icons
        src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
        alt="Location"
        width={"32px"}
        height={"32px"}
      />
      <div>
      <h3>Earth-616</h3>
      <p><b> You are here! </b></p>
      </div>
      <Icons
        src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
        alt="Cart"
        width={"32px"}
        height={"32px"}
        value={screen}
        onClick={() => setScreen(1)}
      />
      <Icons
        src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
        alt="Cart"
        width={"32px"}
        height={"32px"}
        value={screen}
        onClick={() => setScreen(2)}
      />
    </HeaderDisplay>
  );
}
