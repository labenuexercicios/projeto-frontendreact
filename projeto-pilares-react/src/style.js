import styled from "styled-components";

export const StyledMain = styled.main``;
export const StyledShopping = styled.section`
  z-index: 99;
  display: flex;
  justify-content: center;
`;
export const StyledFilter = styled.section`
  width: 20vw;
`;
export const StyledListProduct = styled.section`
  width: 65vw;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledFavorites = styled.section`
  width: 85vw;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(20vw, 1fr);
  overflow-x: scroll;
  transition-delay: 3s;
  margin: 0 auto;
`;

export const StyledNameSection = styled.h2`
  margin-left: 7.5vw;
  margin-bottom: 0px;
  margin-top: 18vh;
`;

export const StyledInfoQuantity = styled.div`
  width: 62vw;
  margin-left: 28.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3vh;
  span {
    color: #dfdcdb;
  }
  select {
    width: 8vw;
    margin: 0 0.5vw 0 0.5vw;
    border-radius: 10px;
  }
`;
