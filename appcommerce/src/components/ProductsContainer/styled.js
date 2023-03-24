import styled from "styled-components";

export const ShowProducts = styled.section`
  display: flex;
  width: 100%;
  padding: 1rem 2rem 2rem 1rem;
  gap: 2rem;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 0;
  }
`;

export const ListProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 85vw;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1080px) {
    width: 75vw;
  }
`;

export const HeaderList = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #810541;
    font-family: "Barrio", cursive;
    text-decoration: 0.2rem solid underline #C25A7C;
    text-underline-offset: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 5vw;
    width: 15rem;

    @media screen and (max-width: 580px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
      line-height: 2.2rem;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  p {
    font-size: 0.8rem;
    margin-left: 5vw;
    width: 9rem;

    @media screen and (max-width: 580px) {
      font-size: 0.65rem;
    }

    @media screen and (max-width: 500px) {
      text-align: center;
    }
  }
`;

export const Products = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.1rem;
  width: 100%;
  max-width: 2178px;
  margin-top: 1rem;
  margin-bottom: 3rem;
  align-items: center;
  justify-content: center;
  margin-left: 15vw;

  @media screen and (min-width: 1780px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 2180px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1130px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;