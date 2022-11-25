import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: white;
  width: 1350px;
  display: flex;
  padding: 5px;
`;

export const CardsContainer = styled.div`
  font-family: Cambria, sans-serif;
  background-color: white;
  margin-right: -70px;
  width: 1100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: white;
  height: 350px;
  width: 280px;
  top: 436px;
  border-radius: 8px;
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .title {
    font-size: 20px;
    margin: 15px;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  display: flex;
`;

export const PriceAndButton = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;

  .price {
    margin-left: 15px;
    :hover {
      cursor: pointer;
    }
  }

  .button {
    width: 100px;
    height: 50px;
    padding: 5px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #adeaea;

    :hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;


