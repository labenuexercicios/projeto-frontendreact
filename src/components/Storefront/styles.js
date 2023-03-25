import styled from "styled-components";

export const StoreContainer = styled.section`
  padding: 2% 2%;
  padding-top:5%;
  width: 100%;
  background-color: var(--beige);
  background-image: url("https://www.transparenttextures.com/patterns/grid-noise.png");

  .searchResults p {
    font-size: 12px;
    color: gray;
    margin-bottom: 20px;
  }

  .store-grid {
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
    row-gap: 20px;
  }
`;
