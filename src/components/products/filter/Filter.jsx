import { ContainerStyled } from "./Style";
import { FilterTitleStyled } from "./Style";
import { CategoriesStyled } from "./Style";
import { FilterContainerStyled } from "./Style";
import { TitleContainer } from "./Style";

export default function Filter(props) {
  const categories = JSON.parse(localStorage.getItem("categories"));

  function onClickCategories(id, name) {
    props.setFilters({
      ...props.filters,
      Category: [...props.filters.Category, { id, name }],
    });
  }

  return (
    <ContainerStyled>
      <FilterContainerStyled>
        <TitleContainer>
          <FilterTitleStyled>Search by</FilterTitleStyled>
          <div>_____________________</div>
        </TitleContainer>
      </FilterContainerStyled>

      <CategoriesStyled>Categories</CategoriesStyled>
      {categories.map((item) => {
        return (
          <label
            onClick={() => onClickCategories(item.id, item.name)}
            key={item.id}
          >
            {item.name}
          </label>
        );
      })}
    </ContainerStyled>
  );
}
