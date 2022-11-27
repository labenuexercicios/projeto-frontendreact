import styled from "styled-components";

export const MainContent = styled.main`
  background-color: #ededed;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const CardsGrid = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 30px;
  width: 1075px;
  height: 80vh;
`;

export const AsideContent = styled.div`
  padding-top: 30px;
`

export const Cart = styled.aside`
  display: flex;
  width: 200px;
  height: 100px;
  padding-top: 10px;
`
export const NavFilters = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainContentWrapper = styled.div`
  display: flex;
  width: 60%;
`

/* height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  label {
    font-size: 12px;
  }
  input {
    margin-left: 10px;
    border-width: 0;
    padding: 2px 30px 2px 10px;
  } */