import styled from "styled-components";
import buttonCancel from "../../../../../public/Img/general/ButtonCancel.png";

export const Line = styled.div`
  display: flex;
  height: 1px;
  border: 0.1em solid gray;
`;
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 88px;
  min-height: 88px;
  width: 500px;
  gap: 12px;
`;
export const ButtonFilterStyled = styled.div`
  width: fit-content;
  height: 25px;
  text-align: left;
  padding-left: 10px;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: small;
  border-radius: 6px;
  border: none;
  color: #fff;
  background-image: url(${buttonCancel});
  background-size: 10px 10px;
  background-repeat: no-repeat;
  background-color: #367af6;
  background-position: right 5px center;
`;
export const PriceDescription = styled.div``;
export const ButtonsStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
`;
