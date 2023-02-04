import { useState } from "react";
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
} from "./Style";
import { StarsRating } from "../../starsRating/StarsRating";
import favorite from "/Img/general/Favorite.png";
export default function ProductViewer(props) {
  const product = JSON.parse(localStorage.getItem("products")).filter(
    (item) => item.id == props.idProduct
  );
  const [mainImage, setMainImage] = useState(product[0]?.images[0]);
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
                <ProductPrice>{"U$ " + product[0].price}</ProductPrice>
                <ProductDiscount>
                  {product[0].discount + "% OFF"}
                </ProductDiscount>
              </ProductDiscountContainer>
            ) : (
              <div></div>
            )}
            <ProductPriceContainer>
              {"U$ " +
                (Number(product[0].price) -
                  Number(product[0].price) *
                    Number("0." + product[0].discount))}
            </ProductPriceContainer>
            <CredCardInstallment>
              <CredCard src="/Img/general/CredCard.png"></CredCard>
              <InstallmentContainer>
                {product[0].installment} X U${" "}
                {(Number(product[0].price) -
                  Number(product[0].price) *
                    Number("0." + product[0].discount)) /
                  Number(product[0].installment)}
              </InstallmentContainer>
            </CredCardInstallment>
          </ProductPriceDiscount>
          <PurchaseButtonContainer>
            <PurchaseButton>Purchase</PurchaseButton>
          </PurchaseButtonContainer>
        </ProductLeftDv>
      </ProductContainer>
      <SimilarContainer></SimilarContainer>
    </ContainerStyled>
  );
}
