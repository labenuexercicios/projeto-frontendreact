import { useEffect, useState } from "react";
import {
  ContainerStyled,
  ProductContainer,
  ProductImages,
  ProductMainImage,
  ImagesContainer,
  ProductDescription,
  ImageContainer,
  ProductPrice,
  ProductImagesContainer,
  ProductLeftDv,
  ProductDiscount,
  ProductPriceDiscount,
  ProductName,
  ProductPriceContainer,
  ProductDiscountContainer,
  InstallmentContainer,
  CredCardInstallment,
  CredCard,
  PurchaseButton,
  PurchaseButtonContainer,
  FavoriteImage,
  ProductFavoriteContainer,
  SimilarContainer,
  ProductCardContainer,
  SimilarTitle,
  SimilarProducts,
} from "./Style";
import { StarsRating } from "../../starsRating/StarsRating";
import favorite from "/Img/general/Favorite.png";
import ProductCard from "../productCard/ProductCard";
import { goToShoppingCart } from "../../../Router/Coordinator";
import { useNavigate } from "react-router-dom";
export default function ProductViewer(props) {
  window.scrollTo(0, 0);

  const product = JSON.parse(localStorage.getItem("products")).filter(
    (item) => item.id == props.idProduct
  );

  const similarProducts = JSON.parse(localStorage.getItem("products")).filter(
    (item) =>
      item.idCategory == product[0].idCategory && item.id !== product[0].id
  );

  const [mainImage, setMainImage] = useState(product[0].images[0]);

  useEffect(() => {
    setMainImage(product[0].images[0]);
  }, [product[0].images[0]]);

  const navigate = useNavigate();
  function handlePurchaseClick() {
    goToShoppingCart(navigate, props.idProduct);
  }

  return (
    <ContainerStyled>
      <ProductDescription>{product[0].description}</ProductDescription>
      <ProductContainer>
        <ProductImagesContainer>
          <ImagesContainer>
            {product[0].images.map((image, index) => (
              <ImageContainer key={index}>
                <ProductImages
                  src={image}
                  onClick={() => {
                    setMainImage(image);
                  }}
                ></ProductImages>
              </ImageContainer>
            ))}
          </ImagesContainer>
          <ProductFavoriteContainer>
            <ProductMainImage src={mainImage}></ProductMainImage>
            <FavoriteImage src={favorite}></FavoriteImage>
          </ProductFavoriteContainer>
        </ProductImagesContainer>

        <ProductLeftDv>
          <StarsRating rating={product[0].rating} />
          <ProductName>{product[0].name}</ProductName>

          <ProductPriceDiscount>
            {product[0].discount > 0 ? (
              <ProductDiscountContainer>
                <ProductPrice>
                  {"U$ " + product[0].price.toFixed(2)}
                </ProductPrice>
                <ProductDiscount>
                  {product[0].discount + "% OFF"}
                </ProductDiscount>
              </ProductDiscountContainer>
            ) : (
              <div></div>
            )}

            <ProductPriceContainer>
              {"U$ " +
                (
                  Number(product[0].price) -
                  Number(product[0].price) * Number("0." + product[0].discount)
                ).toFixed(2)}
            </ProductPriceContainer>
            <CredCardInstallment>
              <CredCard src="/Img/general/CredCard.png"></CredCard>
              <InstallmentContainer>
                {product[0].installment} X U${" "}
                {(Number(product[0].price) -
                  Number(product[0].price) *
                    Number("0." + product[0].discount)) /
                  Number(product[0].installment).toFixed(2)}
              </InstallmentContainer>
            </CredCardInstallment>
          </ProductPriceDiscount>
          <PurchaseButtonContainer>
            <PurchaseButton onClick={handlePurchaseClick}>
              Purchase
            </PurchaseButton>
          </PurchaseButtonContainer>
        </ProductLeftDv>
      </ProductContainer>

      <SimilarContainer>
        <SimilarTitle>Similar products</SimilarTitle>
        <SimilarProducts>
          {similarProducts.map((item, index) => {
            return (
              <ProductCardContainer key={index}>
                <ProductCard product={item} />
              </ProductCardContainer>
            );
          })}
        </SimilarProducts>
      </SimilarContainer>
    </ContainerStyled>
  );
}
