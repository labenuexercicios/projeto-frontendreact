import styled from "styled-components";

export const NavHeader = styled.header`
  background-color: #1471c1;
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 20px;
`;

export const NavContentWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 45px;
  h1 {
    font-size: 27px;
  }
`;

export const NavSearch = styled.div`
  display: flex;
`;

export const Searchbar = styled.div`
  display: flex;
  justify-content: center;
  input {
    height: 38px;
    width: 100%;
    padding: 7px 15px 9px 15px;
    border-style: solid;
    border-width: 0;
    font-size: 17px;
    outline: none;
  }
  button {
    background-color: white;
    border: none;
    padding-right: 10px;
    img {
      object-fit: contain;
      width: 20px;
    }
  }
`;
