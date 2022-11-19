import styled from "styled-components";

export const NavHeader = styled.header`
  background-color: #1471c1;
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 20px;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  h1 {
    font-size: 20px;
  }
`;

export const NavSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Searchbar = styled.div`
  display: flex;
  justify-content: center;
  input {
    height: 38px;
    width: 70%;
    padding: 7px 60px 9px 15px;
    border-style: solid;
    border-width: 0;
    font-size: 17px;
  }
`;
export const NavFilters = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  label {
    font-size: 15px;
  }
  input {
    margin-left: 10px;
    border-width: 0;
    padding: 3px 30px 3px 10px;
  }
`;
