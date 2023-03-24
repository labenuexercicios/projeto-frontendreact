import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-behavior: auto;
`;

export const Main = styled.main`
  width: 30rem;
  margin: 4rem;

  h1 {
    color:#810541;
    font-family: "Barriecito", cursive;
    text-transform: uppercase;
    text-decoration: 0.2rem solid underline #C25A7C;
    text-underline-offset: 0.5rem;
    margin-bottom: 1rem;
    font-size: 3rem;
    width: 50rem;

    @media screen and (max-width: 540px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 540px) {
    width: 20rem;
  }
  @media screen and (max-width: 375px) {
    width: 15rem;
  }
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 30rem;
  height: 2.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  border: none;

  :focus {
    outline: 0;
  }
  @media screen and (max-width: 540px) {
    width: 20rem;
  }
  @media screen and (max-width: 375px) {
    width: 15rem;
  }
`;

export const TextArea = styled.textarea`
  width: 30rem;
  padding: 1rem 2.5rem 1rem 1rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  border: none;

  :focus {
    outline: 0;
  }

  @media screen and (max-width: 540px) {
    width: 20rem;
  }

  @media screen and (max-width: 375px) {
    width: 15rem;
  }
`;

export const Button = styled.button`
  width: 12rem;
  background-color: #550A35;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-size: 1.2rem;

  :hover {
    background-color: #810541;
  }

  :active {
    background-color: #67568c;
  }
`;