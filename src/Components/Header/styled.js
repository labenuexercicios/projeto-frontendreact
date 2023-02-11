import styled from "styled-components";

export const HeaderDisplay = styled.header`
  display: flex;
  border-bottom: 1px solid black;
  height: 10vh;
  align-items: center;
  padding: 0 10px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationBar = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Search = styled.nav`
  display: flex;
`;

export const SearchBar = styled.input`
  width: 50vw;
  height: 32px;
`;

export const Filters = styled.div`
  display: flex;
`;

export const FilterBar = styled.input`
  width: 100px;
`;

export const Icons = styled.img``;
