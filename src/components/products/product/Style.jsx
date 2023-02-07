import styled from "styled-components";
import purchaseImg from "/Img/general/ShoppingCart.png";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-start;
  width: 850px;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
`;
export const ProductImages = styled.img`
  width: 100px;
  height: 100px;
  border: solid 1px black;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ProductDescription = styled.div`
  color: black;
  font-size: x-large;
  font-weight: bold;
`;
export const ProductContainer = styled.div`
  display: flex;
  gap: 30px;
`;
export const ProductPrice = styled.div`
  color: black;
  font-size: large;
  font-weight: bold;
  text-decoration: line-through;
`;
export const ProductImagesContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const ProductLeftDv = styled.div`
  display: flex;
  height: 415px;
  flex-direction: column;
  gap: 20px;
`;
export const ProductDiscount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: green;
  border-radius: 10px;
  width: 80px;
`;
export const ProductPriceContainer = styled.div`
  display: flex;
  font-size: 50px;
  font-weight: bold;
`;
export const ProductName = styled.div`
  color: black;
  font-size: xx-large;
  font-weight: bold;
`;
export const ProductPriceDiscount = styled.div`
  color: black;
`;
export const ProductDiscountContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const InstallmentContainer = styled.div`
  font-size: large;
  gap: 10px;
`;
export const CredCard = styled.img`
  width: 40px;
`;
export const CredCardInstallment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const PurchaseButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background-color: #5967e8;
  color: white;
  font-size: x-large;
  border: none;
  background-image: url(${purchaseImg});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: left 80px center;
  text-align: right;
  padding-right: 85px;
`;
export const PurchaseButtonContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-end;
`;
export const ProductFavoriteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;
export const ProductMainImage = styled.img`
  grid-column: 1;
  grid-row: 1;
  width: 415px;
  height: 415px;
  border: solid 1px black;
`;
export const FavoriteImage = styled.img`
  margin: 10px;
  grid-column: 1;
  grid-row: 1;
  width: 40px;
  height: 40px;
  justify-self: flex-end;
`;
export const SimilarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
`;
export const ProductCardContainer = styled.div``;
export const SimilarTitle = styled.div`
  color: black;
  font-size: xx-large;
  font-weight: bold;
`;
export const SimilarProducts = styled.div`
  display: flex;
  gap: 15px;
`;
