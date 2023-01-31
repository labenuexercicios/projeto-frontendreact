import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
`;
export const CarouselStyled = styled.div`
  background-color: azure;
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  height: 750px;
  ::-webkit-scrollbar {
    display: none;
  }
  gap: 20px;
`;
export const DataStyled = styled.div`
  background-color: #e1e1eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 235px;
  height: 350px;
`;
export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px 10px 0 10px;
`;
export const TitleStyled = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: black;
  font-family: Arial, Helvetica, sans-serifs;
  font-size: xx-large;
  text-align: start;
`;
export const ProductsStyled = styled.div`
  margin-left: 30px;
  height: 800px;
`;
export const ProductTitleStyled = styled.div`
  color: black;
  font-weight: bold;
  width: 95%;
  height: 20px;
  margin-top: 5px;
  text-align: center;
`;
export const ProductPriceStyled = styled.div`
  color: black;
  font-weight: bold;
  font-size: larger;
  height: 20px;
`;
export const ProductDescriptionStyled = styled.div`
  width: 95%;
  text-align: center;
  padding: 10px;
`;
export const ProductStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
