import styled from "styled-components";

export const ConteinerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 800px;
  margin-top: 20px;
  gap: 20px;
`;
export const ProductsGeneral = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 30px;
`;

export const ColumnsConteiner = styled.div`
  display: flex;
  gap: 10px;
`;
export const TitlesConteiner = styled.div`
  display: flex;
`;

export const ProductsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const ProductGeneral = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductConteiner = styled.div`
  display: flex;
  width: 1000px;
  gap: 100px;
`;
export const Img = styled.img`
  width: 140px;
  height: 140px;
`;
export const ProductName = styled.div`
  color: black;
  font-size: x-large;
  font-weight: bold;
`;
export const ProductDescription = styled.div`
  color: black;
  font-size: medium;
`;
export const DeliveredBy = styled.div`
  color: black;
  font-size: medium;
  height: 37px;
  display: flex;
  align-items: flex-end;
`;

export const Quantity = styled.div`
  text-align: center;
`;

export const ProductDescriptionConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ColunmProductName = styled.div`
  color: black;
  font-size: x-large;
`;
export const ColunmProductQuantity = styled.div`
  color: black;
  font-size: x-large;
  margin-left: 590px;
`;

export const QuantityConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
`;
export const QuantityIncrement = styled.img`
  width: 20px;
  height: 20px;
`;
export const QuantityIncrementConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;
export const StockConteiner = styled.div``;
export const StockQuantityConteiner = styled.div`
  text-align: center;
`;
export const PriceConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 150px;
`;
export const PriceWithoutDiscount = styled.div`
  color: black;
  font-size: medium;
  text-decoration: line-through;
`;
export const PriceWithDiscount = styled.div`
  color: black;
  font-size: x-large;
  font-weight: bold;
`;
export const PriceInstallment = styled.div`
  color: black;
  font-size: small;
  width: 130px;
  text-align: right;
`;
export const ColunmProductPrice = styled.div`
  color: black;
  font-size: x-large;
  margin-left: 110px;
`;
export const PaymentConteiner = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  flex-direction: column;
  width: 37%;
  height: fit-content;
  gap: 20px;
  background-color: #b0b0ea;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 0.1em solid gray;
`;
export const SummaryTitle = styled.div`
  font-size: xx-large;
`;
export const Title = styled.div`
  font-size: xx-large;
`;
export const SummaryQuantity = styled.div``;
export const SummaryPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const SummaryTotalConteiner = styled.div`
  display: flex;
  font-size: xx-large;
  font-weight: bold;
`;
export const SummaryTotalTitle = styled.div``;

export const SummaryTotalPrice = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
export const SummaryInstallmentConteiner = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3px;
`;
export const SummaryInstallment = styled.div``;

export const SummaryTotalPrducts = styled.div`
  display: flex;
`;
export const SummaryTotalInstallmentConteiner = styled.div``;
export const PurchaseButton = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 20px;
  background-color: #5967e8;
  color: white;
  font-size: x-large;
  border: none;
`;
