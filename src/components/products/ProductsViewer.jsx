import { useNavigate } from "react-router-dom";
import { goToProduct } from "../../Router/Coordinator";
import { StarsRating } from "../starsRating/StarsRating";
import {
  ProductsListStyled,
  ContainerStyled,
  ProductsStyled,
  ProductTitleStyled,
  ProductPriceStyled,
  ProductDescriptionStyled,
} from "./Style";
import { CarouselStyled } from "./Style";
import { DataStyled } from "./Style";
import { Img } from "./Style";
import Filter from "./filter/Filter";
import SelectedFilters from "./filter/selectedFilter/SelectedFilters";
import { useState } from "react";

export default function ProductsViewer(props) {
  let products = JSON.parse(localStorage.getItem("products"));

  const navigate = useNavigate();

  function handleProductClick(id) {
    goToProduct(navigate, id);
  }

  const categories = JSON.parse(localStorage.getItem("categories")).filter(
    (item) => {
      return item.id == props.idCategory;
    }
  );

  const [filters, setFilters] = useState({
    searchKey: props.searchKey,
    Category: [{ id: props.idCategory, name: categories[0].name }],
    precos: [],
  });

  function filterProducts(product) {
    return (
      filters.Category.length == 0 ||
      filters.Category.some((el) => el.id == product.idCategory)
    );
  }

  return (
    <ContainerStyled>
      <ProductsStyled>
        <Filter setFilters={setFilters} filters={filters} />
        <ProductsListStyled>
          <SelectedFilters filters={filters} />
          <CarouselStyled>
            {products.filter(filterProducts).map((item) => {
              return (
                <div key={item.id} onClick={() => handleProductClick(item.id)}>
                  <DataStyled>
                    <ProductTitleStyled>{item.name}</ProductTitleStyled>
                    <Img src={item.images[0]} alt={item.description} />
                    <StarsRating rating={item.rating} />

                    <ProductDescriptionStyled>
                      <div>{item.description}</div>
                      <br />
                      <ProductPriceStyled>
                        U$ {item.price} ({item.installment} X{" "}
                        {Number(item.price) / Number(item.installment)})
                      </ProductPriceStyled>
                    </ProductDescriptionStyled>
                  </DataStyled>
                </div>
              );
            })}
          </CarouselStyled>
        </ProductsListStyled>
      </ProductsStyled>
    </ContainerStyled>
  );
}
