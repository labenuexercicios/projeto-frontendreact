import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 400px;
  width: 1033.8px;
  gap: 10px;
  overflow: hidden;
`;
export const CarouselStyled = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  height: 300px;
  ::-webkit-scrollbar {
    display: none;
  }
  pointer-events: none;
  background-color: #dadac6;
`;
export const ButtonAction = styled.img`
  width: 30px;
  height: 30px;
`;
export const GeneralDataStyled = styled.div`
  display: flex;
  background-size: cover;
`;
export const DataStyled = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const NameStyled = styled.span`
  display: flex;
  width: 675px;
  font-size: larger;
  font-family: Arial, Helvetica, sans-serifs;
  font-weight: bold;
`;
export const DataDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: black;
  justify-content: center;
`;
export const DiscountStyled = styled.div`
  font-size: 3rem;
  color: #3f3f04;
  grid-column: 1;
  grid-row: 1;
`;
export const Img = styled.img`
  grid-column: 1;
  grid-row: 1;
  width: 275px;
  height: 275px;
  margin: 10px;
  box-shadow: 5px 5px black;
`;
export const TytleStyled = styled.div`
  background-color: #dadac6;
  height: 70px;
  width: 1000px;
  align-self: center;
  color: black;
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
`;
export const SpecialPromotionsStyled = styled.div`
  color: #3f3f04;
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
