import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100vw;
  height: 400px;
  gap: 10px;
`;
export const CarouselStyled = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 1000px;
  height: 300px;
  ::-webkit-scrollbar {
    display: none;
  }
  pointer-events: none;
`;
export const ButtonAction = styled.img`
  display: flex;
  align-self: center;
  width: 30px;
  height: 30px;
`;
export const GeneralDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5967e8;
`;
export const DataStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  gap: 10px;
`;
export const NameStyled = styled.span`
  display: flex;
  justify-content: center;
  width: 240px;
  height: 40px;
  font-size: medium;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serifs;
  font-weight: bold;
`;
export const Img = styled.img`
  width: 240px;
  margin: 10px;
  box-shadow: 5px 5px black;
`;
export const DataDescription = styled.div`
  margin: 10px;
  color: white;
`;
export const DiscountStyled = styled.div`
  font-size: 3rem;
  color: yellow;
`;
export const DiscountDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const TytleStyled = styled.div`
  background-color: #5967e8;
  width: 1000px;
  height: 70px;
  color: white;
  font-size: xx-large;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const BodyCarouselStyed = styled.div`
  display: flex;
`;
export const SpecialPromotionsStyled = styled.div`
  color: yellow;
  font-size: 3rem;
`;
