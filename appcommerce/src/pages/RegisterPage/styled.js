import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export const RegisterContainer = styled.div`
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterSection = styled.section`
  width: 30rem;
  margin: 3rem;

  h1 {
    color: #810541;
    font-family: "Barrio", cursive;
    text-decoration: 0.2rem solid underline #C25A7C;
    text-underline-offset: 0.5rem;
    margin-bottom: 1rem;
    font-size: 3rem;

    @media screen and (max-width: 375px) {
      font-size: 2rem;
    }
  }

  > p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    color: #7E354D;
  }

  @media screen and (max-width: 560px) {
    width: 20rem;
  }

  @media screen and (max-width: 375px) {
    width: 15rem;
  }
`;

export const FormRegister = styled.form`
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

  @media screen and (max-width: 560px) {
    width: 20rem;
  }

  @media screen and (max-width: 375px) {
    width: 15rem;
  }
`;

export const EyeIcon = styled(AiOutlineEye)`
  color: #1f1235;
  position: absolute;
  right: 1rem;
  margin-top: 0.7rem;
`;

export const EyeInvisibleIcon = styled(AiOutlineEyeInvisible)`
  color: #1f1235;
  position: absolute;
  right: 1rem;
  margin-top: 0.7rem;
`;

export const Link = styled.a`
  color: #7E354D;
  text-decoration: none;
  font-size: 0.8rem;
  align-self: flex-end;
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