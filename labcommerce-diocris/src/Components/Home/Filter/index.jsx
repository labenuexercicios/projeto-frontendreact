import Button from "../../Shared/Button";
import LineHeader from "../../Shared/SectionHeader";
import { FilterStyle, FilterWrapper } from "./style";
export default function Filter({ filter, setFilter, applyFilter }) {
  return (
    <>
      <FilterStyle>
        <LineHeader mainText={"Filters"} />
        <FilterWrapper>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="min-value-filter">
              <p>Min value:</p>
            </label>
            <input
              id="min-value"
              name="min-value"
              value={filter.filterByMinValue}
              onChange={(e) =>
                setFilter({ ...filter, filterByMinValue: e.target.value })
              }
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="max-value-filter">
              <p>Max value:</p>
            </label>
            <input
              id="max-value"
              name="max-value"
              value={filter.filterByMaxValue}
              onChange={(e) =>
                setFilter({ ...filter, filterByMaxValue: e.target.value })
              }
            ></input>
          </div>
          <Button text={"filter"} event={applyFilter} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="product-name-filter">
              <p>Product:</p>
            </label>
            <input
              id="product-name-filter"
              name="product-name-filter"
              onChange={(e) =>
                setFilter({ ...filter, filterByName: e.target.value })
              }
            ></input>
          </div>
        </FilterWrapper>
      </FilterStyle>
    </>
  );
}
