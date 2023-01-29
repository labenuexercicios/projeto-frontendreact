import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  width: 100%;
  height: 6rem;
  padding: 1rem 2rem;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const LogoDiv = styled.img`
  width: 15rem;
  height: 100%;
`;

export const FormInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const Input = styled.input`
  width: 25rem;
  height: 2.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  border: none;
`;

export const SearchIcon = styled(BsSearch)`
  color: #1f1235;
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
    color: #1f1235;
  }

  li a {
    text-decoration: none;
    color: #1f1235;
  }

  li a:hover {
    color: #ff6e6c;
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
  color: #1f1235;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  p {
    font-size: 1rem;
  }

  :hover {
    color: #ff6e6c;
  }
`;
