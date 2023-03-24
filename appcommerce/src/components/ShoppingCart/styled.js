import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

export const SidebarCart = styled.div`
  top: 0;
  right: ${(props) => props.cartIsOpen};
  width: 30vw;
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
  padding: 1.5rem;

  @media screen and (max-width: 1440px) {
    width: 35vw;
  }

  @media screen and (max-width: 1280px) {
    width: 40vw;
  }

  @media screen and (max-width: 1080px) {
    width: 55vw;
  }

  @media screen and (max-width: 780px) {
    width: 100vw;
    padding: 1.5rem 1rem 1rem 1.5rem;
    border-radius: 0;
  }
`;

export const HeaderCart = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;

  h2 {
    font-family: "Barriecito", cursive;
    text-transform: uppercase;
    text-decoration: 0.2rem solid underline #C25A7C;
    text-underline-offset: 0.4rem;

    @media screen and (max-width: 350px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 319px) {
      font-size: 1rem;
    }
  }
`;

export const CloseIcon = styled(IoIosClose)`
  font-size: 2.5rem;

  :hover {
    color: #7E354D;
  }
`;

export const EmptyCart = styled.div`
  display: ${(props) => (props.cart.length === 0 ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  p {
    width: 90%;
    height: 5.5rem;
    padding: 1rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    @media screen and (max-width: 420px) {
      width: 90%;
      font-size: 0.75rem;
      padding: 0;
    }
  }
`;

export const Moon = styled.img`
  width: 20rem;
  height: 60rem;
`;

export const CartWithItens = styled.div`
  display: ${(props) => (props.cart.length === 0 ? "none" : "flex")};
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  height: 100%;
  align-items: center;

  p {
    color: #7E354D;
    font-size: 0.85rem;
    margin: 0.5rem;
    cursor: pointer;
  }
`;

export const CartItens = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 0;
  gap: 0.75rem;
  margin-top: 1rem;
  overflow-y: auto;
  height: 74%;

  @media screen and (max-width: 780px) {
    padding: 0;
  }

  @media screen and (max-width: 450px) {
    height: 65%;
  }
`;

export const TotalAmount = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.5rem;

  @media screen and (max-width: 319px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Button = styled.button`
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

  @media screen and (max-width: 319px) {
    font-size: 0.7rem;
  }
`;