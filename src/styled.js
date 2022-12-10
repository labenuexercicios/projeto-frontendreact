import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  flex-direction: column;
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

export const AsideContent = styled.aside`
  padding-top: 30px;
`;

export const CartContainer = styled.aside`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 250px;
  height: 500px;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  span {
    font-weight: bold;
  }
`;

export const NavFilters = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding-bottom: 10px;
    font-weight: bold;
  }
  input {
    padding-left: 10px;
    height: 25px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    width: 80px;
    outline: none;
  }
`;

export const MainContentWrapper = styled.div`
  display: flex;
  width: 60%;
`;

export const OrderContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  p {
    margin-right: 10px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  select {
    width: 100px;
    height: 20px;
    border-radius: 8px;
    margin-bottom: 10px;
    outline: none;
  }
`;
