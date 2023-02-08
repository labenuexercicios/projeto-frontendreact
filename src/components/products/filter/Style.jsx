import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 230px;
  gap: 10px;
`;
export const FilterTitleStyled = styled.div`
  text-align: start;
  color: white;
  font-size: x-large;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
export const CategoriesStyled = styled.div`
  text-align: start;
  color: white;
  font-size: large;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
export const FilterContainerStyled = styled.div`
  display: flex;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 180px;
`;
export const Line = styled.div`
  height: 1px;
  border: 0.1em solid gray;
  font-size: 1px;
`;
export const LineBrand = styled.div`
  height: 1px;
  width: 180px;
  border: 0.1em solid gray;
  font-size: 1px;
`;

export const ButtonItemStyled = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  text-align: left;
  width: fit-content;
  height: 20px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #1e293b;
    color: #fff;
  }
`;
export const PriceStyled = styled.div`
  display: flex;
  margin-left: 15px;
  gap: 10px;
`;
export const PriceImputStyled = styled.input`
  width: 50px;
  height: 20px;
`;
export const ConfirmationButton = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  text-align: left;
  width: fit-content;
  height: 20px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #1e293b;
    color: #fff;
  }
`;
export const ContainerMax = styled.div`
  display: flex;
`;
export const ErrorMessage = styled.div`
  color: red;
`;

export const FilterPrice = styled.div`
  display: flex;
  gap: 10px;
`;
export const TitleAndError = styled.div`
  display: flex;
  gap: 10px;
`;
