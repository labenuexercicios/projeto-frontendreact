import styled from "styled-components";
import { MdClose } from "react-icons/md"
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #00000047;
  z-index: 20000;
  transition: all 0.3s ease 0s;
  cursor: default;
  visibility: visible;
  transition: all 0.4s ease-in-out;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalWrapper = styled.div`
  top: 0;
  right: 0;
  width: 30vw;
  background-color: #fff;
  border-radius: 1rem 0 0 1rem;
  position: fixed;
  display: block;
  height: 100vh;
  color: #1f1235;
  padding: 1.5rem;
`;

export const ModalContent =styled.div`

  h1 {
    font-family: "Barriecito", cursive;
    text-transform: uppercase;
    text-decoration: 0.2rem solid underline #C25A7C;
    text-underline-offset: 0.4rem;
    margin-left: 4rem; 

    @media screen and (max-width: 350px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 319px) {
      font-size: 1rem;
    }
  }
`;

  
export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  :hover {
  color: #7E354D;
  }
`;


export const Button = styled.button`
  width: 15rem;
  background-color: #550A35;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #fff;
  margin: 0.5rem 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-left: 5rem;

  :hover {
    background-color: #810541;
  }

  :active {
    background-color: #67568c;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  margin-top: 2rem;
  margin-left: 4rem;

  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  h4{
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-left: 3.5rem;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 25rem;
  height: 2.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  border: none;

  :focus {
    outline: 0;
  }

  @media screen and (max-width: 480px) {
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