import styled from "styled-components";

export const HeaderContainer = styled.header`
  /* background-color: greenyellow; */
  /* position: fixed; */
  width: 1350px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 300px;
`;

export const MenuCenter = styled.nav`
  display: flex;
  align-items: center;
  gap: 35px;
  cursor: pointer;
`;

export const OptionsMenu = styled.span`
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
  margin-right: 75px;
`;

export const BagImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  &:hover {
    background-color: #adeaea;
    padding: 5px;
    border-radius: 25px;
    cursor: pointer;
  }
`;
export const InputBuscar = styled.input`
  background-color: #f8f8f8;
  height: 35px;
  border: none;
  border-radius: 20px;
  padding: 5px;
`;

export const BotaoBuscar = styled.button`
  background-color: white;
  height: 35px;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #adeaea;
    color: black;
  }
`;
