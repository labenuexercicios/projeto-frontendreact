import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  flex-direction: column ;
`;
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
`;

export const CartContainer = styled.aside`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 200px;
  height: 500px;
  background-color: white;
  border-radius: 8px;
  p {
    padding-left: 10px;
  }
`;
export const NavFilters = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainContentWrapper = styled.div`
  display: flex;
  width: 60%;
`;
