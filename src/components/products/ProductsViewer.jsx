import {
  ProductsListStyled,
  ContainerStyled,
  ProductsStyled,
  OrdenationAndSelected,
} from "./Style";
import { CarouselStyled } from "./Style";
import Filter from "./filter/Filter";
import SelectedFilters from "./filter/selectedFilter/SelectedFilters";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    setFilters({
      searchKey: props.searchKey,
      Category:
        categories == ""
          ? []
          : [{ id: props.idCategory, name: categories[0].name }],
      brands: [],
      price: {},
    });
  }, [props.searchKey]);

  function filterProducts(product) {
    let categories = true;
    let brands = true;
    let price = true;
    let searchKey = true;

    if (product.name.trim() !== "") {
      searchKey = product.name
        .trim()
        .toUpperCase()
        .includes(filters.searchKey.toUpperCase());
    }
    if (filters.Category.length > 0) {
      categories = filters.Category.some(
        (el) => Number(el.id) == Number(product.idCategory)
      );
    }
    if (filters.brands.length > 0) {
      brands = filters.brands.some(
        (el) => Number(el.id) == Number(product.idBrand)
      );
    }

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
      categories &&
      brands &&
      searchKey &&
      price &&
      (filters.Category.length !== 0 ||
        filters.brands.length !== 0 ||
        JSON.stringify(filters.price) !== "{}" ||
        filters.searchKey.trim() !== "")
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
                if (ordena === "Sort by lowest price") {
                  if (
                    atual.price - atual.price * Number("0." + atual.discount) <
                    proximo.price -
                      proximo.price * Number("0." + proximo.discount)
                  ) {
                    return -1;
                  } else if (
                    atual.price - atual.price * Number("0." + atual.discount) >
                    proximo.price -
                      proximo.price * Number("0." + proximo.discount)
                  ) {
                    return 1;
                  } else {
                    return 0;
                  }
                }

                if (ordena === "Sort by highest price") {
                  if (
                    atual.price - atual.price * Number("0." + atual.discount) >
                    proximo.price -
                      proximo.price * Number("0." + proximo.discount)
                  ) {
                    return -1;
                  } else if (
                    atual.price - atual.price * Number("0." + atual.discount) <
                    proximo.price -
                      proximo.price * Number("0." + proximo.discount)
                  ) {
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
