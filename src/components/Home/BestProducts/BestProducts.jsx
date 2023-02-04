import { useRef } from "react";
import ProductCard from "../../products/productCard/ProductCard";
import { ContainerStyled, ProductsStyled, TitleStyled } from "./Style";
import { CarouselStyled } from "./Style";

export default function BestProducts() {
  const carousel = useRef(null);

  const products = JSON.parse(localStorage.getItem("products")).slice(0, 8);

  return (
    <ContainerStyled>
      <ProductsStyled>
        <TitleStyled>Most popular products</TitleStyled>
        <CarouselStyled ref={carousel}>
          {products.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard product={item} />
              </div>
            );
          })}
        </CarouselStyled>
      </ProductsStyled>
    </ContainerStyled>
  );
}
