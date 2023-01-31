import { useRef } from "react";
import { StarsRating } from "../../starsRating/StarsRating";
import {
  ContainerStyled,
  ProductsStyled,
  TitleStyled,
  ProductTitleStyled,
  ProductPriceStyled,
  ProductDescriptionStyled,
} from "./Style";
import { CarouselStyled } from "./Style";
import { DataStyled } from "./Style";
import { Img } from "./Style";

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
      </ProductsStyled>
    </ContainerStyled>
  );
}
