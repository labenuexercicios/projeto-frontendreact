import styled from "styled-components";
import { IoIosClose, IoIosArrowForward } from "react-icons/io";
import { FiUser } from "react-icons/fi";

export const SidebarMenu = styled.div`
  top: 0;
  right: ${(props) => props.menuMobileIsOpen};
  width: 55vw;
  background-color: #fff;
  border-radius: 1rem 0 0 1rem;
  transition: all 0.4s ease-in-out;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 20000;
  position: fixed;
  display: block;
  height: 100vh;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.55);
  color: #1f1235;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;

  @media screen and (max-width: 780px) {
    width: 100vw;
    padding: 1.5rem 1rem 1rem 1.5rem;
    border-radius: 0;
  }
`;

export const HeaderMenu = styled.header`
  display: flex;
  margin: 0 1rem 2rem 1rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(IoIosClose)`
  font-size: 2.5rem;

  :hover {
    color: #7E354D;
  }
`;

export const UserArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 2.5rem;
  grid-template-columns: 4rem repeat(3, 1fr);
  margin: 1rem;
  gap: 1rem;

  @media screen and (max-width: 430px) {
    grid-template-columns: 3rem repeat(3, 1fr);
  }

  @media screen and (max-width: 319px) {
    column-gap: 0.5rem;
  }
`;

export const Login = styled.div`
  grid-column: 2 / span 4;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 0.95rem;
    @media screen and (max-width: 376px) {
      font-size: 0.8rem;
    }
  }

  small {
    font-size: 0.85rem;
    line-height: 0.95rem;
    color: gray;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }
`;

export const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #f4f0fc;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  grid-row: 1;

  @media screen and (max-width: 430px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const UserIcon = styled(FiUser)`
  font-size: 1.2rem;
`;

export const LogoDiv = styled.img`
  width: 12rem;
  height: 100%;
`;

export const ButtonLogin = styled.button`
  grid-column: 1 / span 2;
  grid-row: 2;
  width: 100%;
  background-color: #fff;
  border-radius: 0.75rem;
  padding: 0.5rem;
  color: #550A35;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  border:#810541 2px solid;

  :hover {
    background-color: #810541;
    color: #fff;
  }

  :active {
    background-color: #463366;
    color: #fff;
  }

  @media screen and (max-width: 399px) {
    letter-spacing: 0.15rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 319px) {
    letter-spacing: 0;
  }
`;

export const ButtonRegister = styled.button`
  grid-column: 3 / span 4;
  grid-row: 2;
  width: 100%;
  background-color: #550A35;
  border-radius: 0.75rem;
  padding: 0.5rem;
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  :hover {
    background-color: #810541;
  }

  :active {
    background-color: #67568c;
  }

  @media screen and (max-width: 399px) {
    letter-spacing: 0.1rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 319px) {
    letter-spacing: 0;
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  list-style-type: none;
  height: 100%;
  align-items: center;
  text-transform: uppercase;
  margin-top: 2rem;

  li {
    color: #1f1235;
    border-bottom: 1px solid lightgray;
    padding: 0.5rem 0 1rem 0;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li:hover {
    color: #7E354D;
    cursor: pointer;
  }

  @media screen and (max-width: 1280px) {
    gap: 1rem;
  }
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  font-size: 1.2rem;

  :hover {
    color: #7E354D;
  }
`;