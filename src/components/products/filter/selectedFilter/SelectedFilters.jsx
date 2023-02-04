import {
  SelectedFiltersStyled,
  ContainerStyled,
  ButtonFilterStyled,
  ButtonsStyled,
  PriceDescription,
} from "./Style";

export default function SelectedFilters(props) {
  function DeleteCategory(index) {
    const categorys = [...props.filters.Category];
    const brands = [...props.filters.brands];
    const price = props.filters.price;
    const searchKey = props.filters.searchKey;
    categorys.splice(index, 1);
    props.setFilters({
      Category: categorys,
      brands: brands,
      price: price,
      searchKey: searchKey,
    });
  }

  function DeleteBrand(index) {
    const brands = [...props.filters.brands];
    const categorys = [...props.filters.Category];
    const price = props.filters.price;
    const searchKey = props.filters.searchKey;

    brands.splice(index, 1);
    props.setFilters({
      brands: brands,
      Category: categorys,
      price: price,
      searchKey: searchKey,
    });
  }

  function deletePrice() {
    const brands = [...props.filters.brands];
    const categorys = [...props.filters.Category];
    const searchKey = props.filters.searchKey;
    props.setFilters({
      brands: brands,
      Category: categorys,
      price: {},
      searchKey: searchKey,
    });
  }

  function deleteSearchKey() {
    const brands = [...props.filters.brands];
    const categorys = [...props.filters.Category];
    const price = props.filters.price;
    props.setFilters({
      brands: brands,
      Category: categorys,
      searchKey: "",
      price: price,
    });
  }

  let priceDescription = "";
  if (props.filters.price !== null && props.filters.price !== undefined) {
    if (props.filters.price.min !== "" && props.filters.price.max !== "")
      priceDescription = `Price between ${props.filters.price.min} and ${props.filters.price.max}`;
    if (props.filters.price.min == "" && props.filters.price.max !== "")
      priceDescription = `price less than ${props.filters.price.max}`;
    if (props.filters.price.min !== "" && props.filters.price.max == "")
      priceDescription = `Price greater than ${props.filters.price.min}`;
  }

  return (
    <ContainerStyled>
      <ButtonsStyled>
        {props.filters.Category !== null &&
        props.filters.Category !== undefined &&
        props.filters.Category !== [] ? (
          props.filters.Category.map((item, index) => {
            return (
              <ButtonFilterStyled
                key={index}
                onClick={() => DeleteCategory(index)}
              >
                {item.name}
              </ButtonFilterStyled>
            );
          })
        ) : (
          <div></div>
        )}
        {props.filters.brands !== null &&
        props.filters.brands !== undefined &&
        props.filters.brands !== [] ? (
          props.filters.brands.map((item, index) => {
            return (
              <ButtonFilterStyled
                key={index}
                onClick={() => DeleteBrand(index)}
              >
                {item.name}
              </ButtonFilterStyled>
            );
          })
        ) : (
          <div></div>
        )}
        {props.filters.price !== null &&
        props.filters.price !== undefined &&
        JSON.stringify(props.filters.price) !== "{}" ? (
          <ButtonFilterStyled onClick={deletePrice}>
            <PriceDescription>{priceDescription}</PriceDescription>
          </ButtonFilterStyled>
        ) : (
          <div></div>
        )}
        {props.filters.searchKey !== null &&
        props.filters.searchKey !== undefined &&
        props.filters.searchKey.trim() !== "" ? (
          <ButtonFilterStyled onClick={deleteSearchKey}>
            Name contais "{props.filters.searchKey}"
          </ButtonFilterStyled>
        ) : (
          <div></div>
        )}
      </ButtonsStyled>
      <SelectedFiltersStyled></SelectedFiltersStyled>
    </ContainerStyled>
  );
}
