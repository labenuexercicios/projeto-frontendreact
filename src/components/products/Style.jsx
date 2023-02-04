import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 800px;
  margin-top: 20px;
`;
export const CarouselStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  height: 750px;
  ::-webkit-scrollbar {
    display: none;
  }
  gap: 20px;
  max-width: 745px;
  min-width: 745px;
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
  display: flex;
  height: 800px;
`;
export const ProductStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ProductsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const OrdenationAndSelected = styled.div`
  display: flex;
`;
