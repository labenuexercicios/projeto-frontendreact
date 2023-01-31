import { SelectedFiltersStyled } from "./Style";

export default function SelectedFilters(props) {
  return (
    <div>
      {props.filters.Category.map((item, index) => {
        return <button key={index}>{item.name}</button>;
      })}

      <SelectedFiltersStyled>
        _____________________________________________________________________________________________________________________________
      </SelectedFiltersStyled>
    </div>
  );
}
