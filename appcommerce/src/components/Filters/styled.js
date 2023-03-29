import styled from "styled-components";

export const FiltersContainer = styled.aside`
  display: flex;
  flex-direction: row;
  width: 50vw;
  gap: 2rem;
  margin-left: 14rem;

  h2 {
    color: #810541;
    font-family: "Barrio", cursive;
    text-decoration: 0.2rem solid underline #C25A7C;
    text-underline-offset: 0.5rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 1080px) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1080px) {
    width: 40rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 0rem 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 30rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 480px) {
    width: 17rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 319px) {
    gap: 0rem 0.75rem;
  }
`;

export const Input = styled.input`
  width: 10rem;
  border: #810541 1px solid;
  margin-bottom: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 5rem;
  }
`;

export const Button = styled.button`
  width: 7rem;
  background-color: #550A35;
  border-radius: 0.5rem;
  color: #fff;
  margin: 0.5rem 0;
  border: none;
  height: 2rem;

  :hover {
    background-color: #810541;
  }

  :active {
    background-color: #67568c;
  }

  @media screen and (max-width: 768px) {
    width: 7rem;
  }
`;