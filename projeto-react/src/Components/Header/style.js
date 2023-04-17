import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #272c99;
  position: fixed;

  .nav-bar {
    display: flex;
    align-items: center;
    gap: 10px;

    p{
      font-size: 16px;
      font-weight: 600;
      padding-left: 10px;
      color: white;
    }
  }

  .logo-header {
    display: flex;
    align-items: center;

    :hover{
      cursor: pointer;
    }
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    border: none;
    color: white;
    background: none;

    :hover{
      cursor: pointer;
      color: #4299e1;
    }

    .cart-badge{
      position: relative;
      margin-bottom: 30px;
      font-size: 0.8rem;
    }
  }
`;

export const Logo = styled.h1`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  text-align: center;
  color: white;
  padding-right: 5px;
`;