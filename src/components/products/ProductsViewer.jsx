import { useNavigate } from "react-router-dom";
import { goToProduct } from "../../Router/Coordinator";

import {
  ProductsListStyled,
  ContainerStyled,
  ProductsStyled,
  OrdenationAndSelected,
} from "./Style";
import { CarouselStyled } from "./Style";
import Filter from "./filter/Filter";
import SelectedFilters from "./filter/selectedFilter/SelectedFilters";
import { useState } from "react";
import Ordenation from "./ordenation/Ordenation";
import ProductCard from "./productCard/ProductCard";

export default function ProductsViewer(props) {
  let products = JSON.parse(localStorage.getItem("products"));

  const categories = JSON.parse(localStorage.getItem("categories")).filter(
    (item) => {
      return item.id == props.idCategory;
    }
  );

  const [filters, setFilters] = useState({
    searchKey: props.searchKey,
    Category:
      categories == ""
        ? []
        : [{ id: props.idCategory, name: categories[0].name }],
    brands: [],
    price: {},
  });

  function filterProducts(product) {
    let categories = true;
    let brands = true;
    let price = true;
    let searchKey = true;

    searchKey =
      filters.searchKey !== null &&
      filters.searchKey !== undefined &&
      filters.searchKey !== ""
        ? product.name.toUpperCase().includes(filters.searchKey.toUpperCase())
        : true;

    categories =
      filters.Category !== null &&
      filters.Category !== undefined &&
      filters.Category.length > 0
        ? filters.Category.some(
            (el) => Number(el.id) == Number(product.idCategory)
          )
        : true;
    brands =
      filters.brands !== null &&
      filters.brands !== undefined &&
      filters.brands.length > 0
        ? filters.brands.some((el) => Number(el.id) == Number(product.idBrand))
        : true;

    if (
      filters.price !== null &&
      filters.price !== undefined &&
      JSON.stringify(filters.price) !== "{}"
    ) {
      if (filters.price.min !== "" && filters.price.max !== "") {
        price =
          product.price > filters.price.min &&
          product.price < filters.price.max;
      }
      if (filters.price.min == "" && filters.price.max !== "") {
        price = product.price < filters.price.max;
      }
      if (filters.price.min !== "" && filters.price.max == "") {
        price = product.price > filters.price.min;
      }
    }

    return (
      searchKey &&
      categories &&
      brands &&
      price &&
      !(
        (filters.Category == null &&
          filters.brands == null &&
          filters.price == null &&
          filters.searchKey == null) ||
        (filters.Category == undefined &&
          filters.brands == undefined &&
          filters.price == undefined &&
          filters.searchKey == undefined) ||
        (filters.Category.length == 0 &&
          filters.brands.length == 0 &&
          JSON.stringify(filters.price) == "{}" &&
          filters.searchKey == "")
      )
    );
  }

  const [ordena, setOrdena] = useState("");

  return (
    <ContainerStyled>
      <ProductsStyled>
        <Filter setFilters={setFilters} filters={filters} />
        <ProductsListStyled>
          <OrdenationAndSelected>
            <SelectedFilters setFilters={setFilters} filters={filters} />
            <Ordenation ordena={ordena} setOrdena={setOrdena} />
          </OrdenationAndSelected>
          <CarouselStyled>
            {products
              .filter(filterProducts)
              .sort((atual, proximo) => {
                if (ordena === "Rising price") {
                  if (atual.price < proximo.price) {
                    return -1;
                  } else if (atual.price > proximo.price) {
                    return 1;
                  } else {
                    return 0;
                  }
                }

                if (ordena === "Decreasing price") {
                  if (atual.price > proximo.price) {
                    return -1;
                  } else if (atual.price < proximo.price) {
                    return 1;
                  } else {
                    return 0;
                  }
                }
              })
              .map((item) => {
                return (
                  <div key={item.id}>
                    <ProductCard product={item} />
                  </div>
                );
              })}
          </CarouselStyled>
        </ProductsListStyled>
      </ProductsStyled>
    </ContainerStyled>
  );
}
