import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px; 
  font-size: 130%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Logo = styled.img`
  width: auto;
`;

export const MenuCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const OptionsMenu = styled.div`
  &:hover {
    background-color: #adeaea;
    color: black;
    padding: 8px;
    border-radius: 6px;
  }
`;

export const DivRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BagImage = styled.img`
  width: auto;
  height: 30%;
  margin-right: auto;
  &:hover {
    background-color: #adeaea;
    padding: 5px;
    border-radius: 25px;
    cursor: pointer;
  }
`;
export const InputBuscar = styled.input`
  background-color: #f8f8f8;
  height: 30%;
  border: none;
  border-radius: 20px;
  padding: 5px;
`;

export const BotaoBuscar = styled.button`
  background-color: white;
  margin-right: 10px;
  height: 30%;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #adeaea;
    color: black;
  }
`;
