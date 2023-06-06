import styled from "styled-components";
import Promotions from "/Img/general/Promotions.gif";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
  overflow: hidden;
`;
export const CarouselStyled = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  pointer-events: none;
`;
export const ButtonAction = styled.img`
  width: 30px;
  height: 30px;
  background-color: white;
  opacity: 70%;
  padding: 10px;
`;

export const GeneralDataStyled = styled.div`
  display: flex;
`;
export const DataStyled = styled.div`
  display: flex;
  gap: 10px;
  width: 940px;
`;
export const NameStyled = styled.span`
  display: flex;
  font-size: larger;
  font-family: Arial, Helvetica, sans-serifs;
  font-weight: bold;
`;
export const DataDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: white;
  justify-content: center;
`;
export const DiscountStyled = styled.div`
  font-size: 3rem;
  color: white;
  grid-column: 1;
  grid-row: 1;
`;
export const Img = styled.img`
  grid-column: 1;
  grid-row: 1;
  width: 275px;
  height: 275px;
  margin: 20px;
`;
export const TytleStyled = styled.div`
  height: 70px;
  align-self: center;
  color: white;
  font-size: xx-large;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  gap: 10px;
`;
export const BodyCarouselStyed = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${Promotions});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const SpecialPromotionsStyled = styled.div`
  color: white;
  font-size: 3rem;
`;
export const InnerPriceStyled = styled.div`
  text-decoration: line-through;
`;
export const PriceStyled = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const PriceDescount = styled.div`
  font-size: x-large;
`;
