import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  background-color: #FFF0F5;
  width: 100%;
  height: 6rem;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 468px) {
    padding: 1rem;
  }

  @media screen and (max-width: 319px) {
    padding: 0.5rem;
  }
`;