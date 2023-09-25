import { styled } from "styled-components";

export const CartContainer = styled.div`
  background-color: var(--isabelline);
  margin-top: 12vh;
  width: 100%;
  max-width: 300px;
  height: calc(100vh - 12vh);
  top: 0;
  right: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* transform: translate(110%, 0);
  transition: all 400ms ease; */

  /* .cart--active {
    transform: translate(0,0);
  } */

  h2 {
    font-size: 34px;
  }
  
  button {
        background: transparent;
        width: 100%;
        height: 30px;
        border: 2px solid var(--rosa-muito-claro);
        margin: 10px 0;
        cursor: pointer;
        border-radius: 6px;
        font-size: 1.4rem;
    }
`;

export const CartItems = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export const CartResume = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 35px 0 15px;
  border-top: 1px solid var(--eerie-black);
`;
