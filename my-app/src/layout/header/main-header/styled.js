import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
`;

export const LogoIcon = styled.img`
  height: auto;
  width: 110px;
`;

export const NavContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 16px 0;

  input {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjMzMzMzIDBDMi4zODc4MSAwIDAgMi4zODc4MSAwIDUuMzMzMzNDMCA4LjI3ODg1IDIuMzg3ODEgMTAuNjY2NyA1LjMzMzMzIDEwLjY2NjdDNi41NjU4MSAxMC42NjY3IDcuNzAwNjQgMTAuMjQ4NiA4LjYwMzc2IDkuNTQ2NTdMMTAuMTk1MyAxMS4xMzgxQzEwLjQ1NTYgMTEuMzk4NCAxMC44Nzc3IDExLjM5ODQgMTEuMTM4MSAxMS4xMzgxQzExLjM5ODQgMTAuODc3NyAxMS4zOTg0IDEwLjQ1NTYgMTEuMTM4MSAxMC4xOTUzTDkuNTQ2NTcgOC42MDM3NkMxMC4yNDg2IDcuNzAwNjQgMTAuNjY2NyA2LjU2NTgxIDEwLjY2NjcgNS4zMzMzM0MxMC42NjY3IDIuMzg3ODEgOC4yNzg4NSAwIDUuMzMzMzMgMFpNMS4zMzMzMyA1LjMzMzMzQzEuMzMzMzMgMy4xMjQxOSAzLjEyNDE5IDEuMzMzMzMgNS4zMzMzMyAxLjMzMzMzQzcuNTQyNDcgMS4zMzMzMyA5LjMzMzMzIDMuMTI0MTkgOS4zMzMzMyA1LjMzMzMzQzkuMzMzMzMgNy41NDI0NyA3LjU0MjQ3IDkuMzMzMzMgNS4zMzMzMyA5LjMzMzMzQzMuMTI0MTkgOS4zMzMzMyAxLjMzMzMzIDcuNTQyNDcgMS4zMzMzMyA1LjMzMzMzWiIgZmlsbD0iIzFBMUExQSIvPgo8L3N2Zz4K")
      no-repeat 8% center #f7f7f7;
    border-radius: 50px;
    border: 1px solid #f7f7f7;
    height: 40px;
    padding-left: 40px;
    width: 100%;
  }

  input::placeholder {
    color: #737373;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const List = styled.ul`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  gap: 24px;
  justify-content: center;
  list-style: none;
`;

export const ItemList = styled.li``;

export const Button = styled.button`
  color: #000;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  gap: 1vw;
`;

export const Basket = styled.img`
  height: auto;
  width: 30px;
  /* filter: invert(100%) sepia(1%) saturate(9%) hue-rotate(243deg) brightness(103%) contrast(100%); */
`;
