import { useEffect, useState } from "react";
import { ContainerStyled } from "./Style";
import { FilterTitleStyled } from "./Style";
import { CategoriesStyled } from "./Style";
import { FilterContainerStyled } from "./Style";
import { TitleContainer } from "./Style";
import { Line, LineBrand } from "./Style";
import { ButtonItemStyled, ConfirmationButton } from "./Style";
import {
  PriceImputStyled,
  ErrorMessage,
  FilterPrice,
  TitleAndError,
} from "./Style";

export default function Filter(props) {
  const categories = JSON.parse(localStorage.getItem("categories"));
  const brands = JSON.parse(localStorage.getItem("brands"));

  function onClickCategories(id, name) {
    if (
      props.filters.Category !== undefined &&
      props.filters.Category !== null &&
      !props.filters.Category.some((category) => category.id == id)
    ) {
      props.setFilters({
        ...props.filters,
        Category: [...props.filters.Category, { id, name }],
      });
    }
  }

  function onClickBrands(id, name) {
    if (
      props.filters.brands !== undefined &&
      props.filters.brands !== null &&
      !props.filters.brands.some((brand) => brand.id == id)
    ) {
      props.setFilters({
        ...props.filters,
        brands: [...props.filters.brands, { id, name }],
      });
    }
  }

  const [MinValue, setMinValue] = useState("");
  const [MaxValue, setMaxValue] = useState("");
  const [error, setError] = useState("");

  function handleClick(e) {
    if (
      (MaxValue == "" ? 0 : MinValue) > (MaxValue == "" ? 0 : MaxValue) ||
      (MaxValue == "" && MinValue == "")
    ) {
      setError("Invalid data");
    } else {
      props.setFilters({
        ...props.filters,
        price: { min: MinValue, max: MaxValue },
      });
      setError("");
    }
    setDisplay("block");
  }

  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (display === "block") {
      const timerId = setTimeout(() => {
        setDisplay("none");
      }, 3000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [display]);

  return (
    <ContainerStyled>
      <FilterContainerStyled>
        <TitleContainer>
          <br />
          <FilterTitleStyled>Search by</FilterTitleStyled>
          <Line></Line>
        </TitleContainer>
      </FilterContainerStyled>
      <CategoriesStyled>Categories</CategoriesStyled>
      {categories.map((item) => {
        return (
          <ButtonItemStyled
            onClick={() => onClickCategories(item.id, item.name)}
            key={item.id}
          >
            {item.name}
          </ButtonItemStyled>
        );
      })}
      <br />
      <LineBrand></LineBrand>
      <CategoriesStyled>Brands</CategoriesStyled>
      {brands.map((item) => {
        return (
          <ButtonItemStyled
            onClick={() => onClickBrands(item.id, item.name)}
            key={item.id}
          >
            {item.name}
          </ButtonItemStyled>
        );
      })}
      <br />
      <LineBrand></LineBrand>
      <TitleAndError>
        <CategoriesStyled>Price</CategoriesStyled>
        <ErrorMessage style={{ display: display }}>{error}</ErrorMessage>
      </TitleAndError>
      <FilterPrice>
        <PriceImputStyled
          onChange={(e) => setMinValue(e.target.value)}
        ></PriceImputStyled>
        <PriceImputStyled
          onChange={(e) => setMaxValue(e.target.value)}
        ></PriceImputStyled>
        <ConfirmationButton onClick={handleClick}>Searsh</ConfirmationButton>
      </FilterPrice>
    </ContainerStyled>
  );
}
