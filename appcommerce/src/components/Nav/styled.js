import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 1280px) {
    gap: 1rem;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LogoDiv = styled.img`
  width: 20rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    width: 10rem;
  }
`;

export const FormInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const Input = styled.input`
  width: 18rem;
  height: 2.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  border: none;

  :focus {
    outline: 0;
  }

  @media screen and (min-width: 1920px) {
    width: 30rem;
  }

  @media screen and (max-width: 1280px) {
    width: 12rem;
  }
`;

export const SearchIcon = styled(BsSearch)`
  color: #550A35;
  position: absolute;
  right: 1rem;
`;

export const OptionsList = styled.ul`
  display: flex;
  list-style-type: none;
  height: 100%;
  align-items: center;
  gap: 2rem;

  li {
    color: #550A35;
  }

  li:hover {
    color: #7E354D;
    cursor: pointer;
  }

  @media screen and (max-width: 1280px) {
    gap: 1rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  font-size: 1.5rem;
  color: #550A35;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  p {
    font-size: 1rem;
  }

  :hover {
    color: #7E354D;
    cursor: pointer;
  }
`;